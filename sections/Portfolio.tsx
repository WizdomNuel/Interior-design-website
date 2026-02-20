import React, { useState, useEffect } from 'react';
import Section from '../components/Section';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Wand2, Loader2, Plus, ArrowRight, Save, FolderOpen, Trash2, ChevronLeft } from 'lucide-react';
import Button from '../components/Button';

interface Draft {
  id: string;
  prompt: string;
  image: string | null;
  timestamp: number;
}

const suggestions = [
  "Modern minimalist living room with natural light",
  "Art deco inspired bedroom with plush velvet accents",
  "Industrial chic open plan office with brick walls",
  "Scandinavian kitchen with white cabinets and wood textures"
];

const Portfolio: React.FC = () => {
  const [images, setImages] = useState([
    { src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?q=80&w=800&auto=format&fit=crop", title: "Modern Living" },
    { src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop", title: "Executive Office" },
    { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop", title: "Minimalist Kitchen" },
    { src: "https://images.unsplash.com/photo-1616594039964-408359566a05?q=80&w=800&auto=format&fit=crop", title: "Luxury Bedroom" },
    { src: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=800&auto=format&fit=crop", title: "Lounge Area" },
    { src: "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=800&auto=format&fit=crop", title: "Open Plan Studio" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  
  // Drafts State
  const [view, setView] = useState<'editor' | 'drafts'>('editor');
  const [drafts, setDrafts] = useState<Draft[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('luxe_interiors_drafts');
    if (saved) {
      try {
        setDrafts(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse drafts", e);
      }
    }
  }, []);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setIsLoading(true);
    setGeneratedImage(null);

    try {
      // Dynamically import heavy AI client to avoid bundling it in main chunk
      const mod = await import('@google/genai');
      const GoogleGenAI = mod.GoogleGenAI || mod.default?.GoogleGenAI || mod.default;
      // Read API key from client-safe env var (Vite exposes `import.meta.env`),
      // fallback to process.env mapping if defined in vite.config.ts
      // Use a graceful error if missing to avoid uncaught exceptions in browser.
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const apiKey = (import.meta as any).env?.VITE_GEMINI_API_KEY || (process.env as any)?.API_KEY || (import.meta as any).env?.GEMINI_API_KEY;
      if (!apiKey) {
        alert('AI generation requires an API key. Please set VITE_GEMINI_API_KEY in your .env.local');
        setIsLoading(false);
        return;
      }

      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [{ text: prompt }]
        },
      });

      let foundImage = false;
      if (response.candidates?.[0]?.content?.parts) {
        for (const part of response.candidates[0].content.parts) {
          if (part.inlineData) {
            const base64EncodeString = part.inlineData.data;
            setGeneratedImage(`data:image/png;base64,${base64EncodeString}`);
            foundImage = true;
            break;
          }
        }
      }
      
      if (!foundImage) {
        alert("The model did not return an image. Please try a different prompt.");
      }

    } catch (error) {
      console.error("Generation error:", error);
      alert("Failed to generate image. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddToPortfolio = () => {
    if (generatedImage) {
      setImages(prev => [{ src: generatedImage, title: "AI Concept: " + prompt.slice(0, 20) + "..." }, ...prev]);
      handleClose();
    }
  };

  const handleSaveDraft = () => {
    if (!prompt.trim() && !generatedImage) return;

    const newDraft: Draft = {
      id: Date.now().toString(),
      prompt,
      image: generatedImage,
      timestamp: Date.now()
    };

    const updatedDrafts = [newDraft, ...drafts];
    setDrafts(updatedDrafts);
    localStorage.setItem('luxe_interiors_drafts', JSON.stringify(updatedDrafts));
    
    // Simple visual feedback could be added here
    const btn = document.getElementById('save-draft-btn');
    if (btn) {
      const originalText = btn.innerHTML;
      btn.innerHTML = '<span class="flex items-center gap-2">Saved!</span>';
      setTimeout(() => {
        btn.innerHTML = originalText;
      }, 2000);
    }
  };

  const handleDeleteDraft = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updatedDrafts = drafts.filter(d => d.id !== id);
    setDrafts(updatedDrafts);
    localStorage.setItem('luxe_interiors_drafts', JSON.stringify(updatedDrafts));
  };

  const handleLoadDraft = (draft: Draft) => {
    setPrompt(draft.prompt);
    setGeneratedImage(draft.image);
    setView('editor');
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setPrompt('');
    setGeneratedImage(null);
    setIsLoading(false);
    setView('editor');
  };

  return (
    <Section id="portfolio" bgColor="dark">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-lg">
            <span className="text-fdd-dark-text-secondary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Our Work</span>
            <h2 className="font-serif text-4xl text-fdd-dark-text-primary mb-6">Selected Projects</h2>
            <p className="text-fdd-dark-text-secondary font-light text-sm leading-relaxed">
              A collection of spaces transformed through our vision. From private residences to corporate headquarters.
            </p>
          </div>
          
          <div className="flex gap-6">
             <Button
               variant="outline"
               onClick={() => setIsModalOpen(true)}
               className="flex items-center gap-3 text-xs uppercase tracking-[0.15em]"
             >
               <Wand2 size={14} className="text-fdd-dark-text-secondary" />
               <span>AI Studio</span>
             </Button>
            <Button variant="text" className="flex items-center gap-3 text-fdd-accent-primary border-b border-fdd-accent-primary pb-1 text-xs uppercase tracking-[0.15em]">
              Full Gallery <ArrowRight size={14} />
            </Button>
          </div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {images.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.99 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              className="break-inside-avoid relative group overflow-hidden bg-fdd-dark-surface shadow-sm hover:shadow-xl"
            >
              <img 
                src={item.src} 
                alt={item.title} 
                className="w-full h-auto object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 grayscale-[10%] group-hover:grayscale-0"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-stone-900/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-8 text-center">
                <span className="text-white font-serif text-3xl mb-4 translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                  {item.title}
                </span>
                <span className="text-stone-300 text-[10px] tracking-[0.2em] uppercase translate-y-8 group-hover:translate-y-0 transition-transform duration-700 delay-100 ease-out">
                  View Case Study
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* AI Generation Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="absolute inset-0 bg-stone-900/90 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white w-full max-w-3xl overflow-hidden shadow-2xl"
            >
              <div className="flex h-[600px] flex-col md:flex-row">
                
                {/* Left Panel: Inputs & History */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col border-b md:border-b-0 md:border-r border-stone-100">
                  
                  {/* Header */}
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <h3 className="font-serif text-3xl text-stone-900 mb-2">Concept Lab</h3>
                      <p className="text-stone-400 text-xs tracking-wider uppercase">Powered by Gemini AI</p>
                    </div>
                    <div className="flex gap-2">
                        <motion.button
                         onClick={() => setView(view === 'editor' ? 'drafts' : 'editor')}
                          type="button"
                         whileTap={{ scale: 0.95 }}
                         className="p-2 text-stone-400 hover:text-stone-900 transition-colors hover:bg-stone-100 rounded-sm"
                         title={view === 'editor' ? "View Drafts" : "Back to Editor"}
                       >
                         {view === 'editor' ? <FolderOpen size={20} /> : <ChevronLeft size={20} />}
                       </motion.button>
                    </div>
                  </div>

                  {view === 'editor' ? (
                    <div className="flex flex-col h-full">
                      <div className="mb-auto">
                        <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500 mb-4">
                          Describe your vision
                        </label>
                        <textarea
                          value={prompt}
                          onChange={(e) => setPrompt(e.target.value)}
                          placeholder="e.g. A sunlit reading corner with a mid-century modern armchair, beige linen curtains, and a fiddle leaf fig plant..."
                          rows={4}
                          className="w-full bg-stone-50 border-0 p-4 text-sm font-light text-stone-900 placeholder-stone-400 resize-none focus:ring-1 focus:ring-stone-900 transition-all mb-4"
                          autoFocus
                        />
                        
                        {/* Suggestions */}
                        <div>
                           <span className="text-[9px] font-bold uppercase tracking-wider text-stone-400 mb-2 block">Try a prompt:</span>
                           <div className="flex flex-wrap gap-2">
                             {suggestions.map((s, i) => (
                               <motion.button
                                 key={i}
                                 onClick={() => setPrompt(s)}
                                type="button"
                                 whileHover={{ scale: 1.03 }}
                                 whileTap={{ scale: 0.98 }}
                                 className="text-[10px] px-3 py-1.5 bg-stone-100 hover:bg-stone-200 border border-stone-200 text-stone-600 rounded-sm transition-colors text-left"
                               >
                                 {s}
                               </motion.button>
                             ))}
                           </div>
                        </div>
                      </div>
                      
                      <div className="pt-8 flex gap-3">
                         <Button 
                            id="save-draft-btn"
                            variant="outline"
                            onClick={handleSaveDraft}
                            disabled={!prompt.trim() && !generatedImage}
                            className="flex-1 h-14 text-[10px]"
                          >
                            <Save size={14} className="mr-2"/> Save Draft
                          </Button>
                         <Button 
                            onClick={handleGenerate} 
                            disabled={isLoading || !prompt.trim()}
                            className="flex-[1.5] h-14 text-[10px]"
                          >
                            {isLoading ? (
                              <span className="flex items-center gap-2">
                                <Loader2 className="animate-spin" size={16} /> Generating
                              </span>
                            ) : (
                              <span className="flex items-center gap-2">
                                <Wand2 size={16} /> Generate
                              </span>
                            )}
                          </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col h-full overflow-hidden">
                       <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-stone-900 mb-6 pb-2 border-b border-stone-100">
                         Saved Drafts
                       </h4>
                       <div className="flex-1 overflow-y-auto pr-2 space-y-3 custom-scrollbar">
                         {drafts.length === 0 && (
                            <p className="text-stone-400 text-sm font-light italic">No saved drafts yet.</p>
                         )}
                         {drafts.map((draft) => (
                           <motion.div
                             key={draft.id}
                             onClick={() => handleLoadDraft(draft)}
                             initial={{ opacity: 0, y: 8 }}
                             whileInView={{ opacity: 1, y: 0 }}
                             whileHover={{ scale: 1.01 }}
                             viewport={{ once: true }}
                             className="group p-4 border border-stone-200 hover:border-stone-900 cursor-pointer transition-all bg-stone-50 hover:bg-white shadow-sm hover:shadow-md"
                           >
                             <div className="flex justify-between items-center mb-2">
                                <span className="text-[10px] uppercase tracking-wider text-stone-400 font-bold">
                                  {new Date(draft.timestamp).toLocaleDateString()}
                                </span>
                                <motion.button
                                  onClick={(e) => handleDeleteDraft(draft.id, e)}
                                  type="button"
                                  whileTap={{ scale: 0.95 }}
                                  className="text-stone-300 hover:text-red-500 transition-colors p-1"
                                >
                                  <Trash2 size={12} />
                                </motion.button>
                             </div>
                             <p className="text-xs text-stone-600 line-clamp-2 font-light leading-relaxed mb-2">
                               {draft.prompt || "No text prompt..."}
                             </p>
                             {draft.image && (
                                <div className="text-[9px] text-stone-900 font-bold uppercase tracking-widest flex items-center gap-1.5 opacity-50 group-hover:opacity-100 transition-opacity">
                                  <div className="w-1.5 h-1.5 bg-stone-900 rounded-full"></div> 
                                  Image Attached
                                </div>
                             )}
                           </motion.div>
                         ))}
                       </div>
                    </div>
                  )}
                </div>

                {/* Right Panel: Preview */}
                <div className="w-full md:w-1/2 bg-stone-100 flex flex-col relative border-l border-white">
                  <motion.button
                    type="button"
                    onClick={handleClose}
                    whileTap={{ scale: 0.95 }}
                    className="absolute top-4 right-4 z-10 p-2 bg-white/50 hover:bg-white text-stone-900 transition-colors rounded-full"
                  >
                    <X size={20} />
                  </motion.button>

                  <div className="flex-1 flex items-center justify-center p-8 bg-stone-100">
                    {generatedImage ? (
                      <div className="relative w-full h-full shadow-xl bg-white p-2">
                        <img 
                          src={generatedImage} 
                          alt="Generated Concept" 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                    ) : (
                      <div className="text-stone-300 flex flex-col items-center">
                        <Wand2 size={48} className="mb-4 opacity-20" />
                        <span className="text-xs uppercase tracking-widest text-center">Preview will appear here</span>
                      </div>
                    )}
                  </div>

                  {generatedImage && (
                    <div className="p-4 bg-white border-t border-stone-100 flex gap-4 justify-between">
                      <Button variant="text" onClick={() => setGeneratedImage(null)} className="text-stone-400 hover:text-stone-900 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors">
                        Discard
                      </Button>
                      <Button variant="outline" onClick={handleAddToPortfolio} className="px-6 py-2 h-auto text-[10px]">
                        Save to Gallery
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Portfolio;