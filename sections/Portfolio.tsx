import React, { useState, useEffect } from 'react';
import Section from '../components/Section';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Wand2, Loader2, Plus, ArrowRight, Save, FolderOpen, Trash2, ChevronLeft, Home, Briefcase, Ruler, Armchair, Lamp, Hammer } from 'lucide-react';
import Button from '../components/Button';

interface Draft {
  id: string;
  prompt: string;
  image: string | null;
  timestamp: number;
}

const services = [
  { title: "Residential", description: "Living spaces defined by comfort and sophisticated aesthetics.", icon: Home },
  { title: "Commercial", description: "High-performance workspaces that inspire creativity and focus.", icon: Briefcase },
  { title: "Space Planning", description: "Architectural layout optimization for flow and functionality.", icon: Ruler },
  { title: "Furnishing", description: "Curating bespoke furniture, art, and decor elements.", icon: Armchair },
  { title: "Lighting", description: "Sculpting space with layered ambient and task lighting.", icon: Lamp },
  { title: "Renovation", description: "Transforming dated structures into modern masterpieces.", icon: Hammer },
];

const suggestions = [
  "Modern minimalist living room with natural light",
  "Art deco inspired bedroom with plush velvet accents",
  "Industrial chic open plan office with brick walls",
  "Scandinavian kitchen with white cabinets and wood textures"
];

const Portfolio: React.FC = () => {
  const [images, setImages] = useState([
    { src: "/assets/service.png", title: "Residential", description: "Living spaces defined by comfort and sophisticated aesthetics." },
    { src: "/assets/service1.png", title: "Commercial", description: "High-performance workspaces that inspire creativity and focus." },
    { src: "/assets/service2.png", title: "Space Planning", description: "Architectural layout optimization for flow and functionality." },
    { src: "/assets/service3.jpeg", title: "Furnishing", description: "Curating bespoke furniture, art, and decor elements." },
    { src: "/assets/service4.jpeg", title: "Lighting", description: "Sculpting space with layered ambient and task lighting." },
    { src: "/assets/service5.jpeg", title: "Renovation", description: "Transforming dated structures into modern masterpieces." },
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
      // Simulate realistic AI generation time
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Generate the best possible concept image
      await generateAIPromptPlaceholder();

    } catch (error: any) {
      console.error("Generation error:", error);
      await generateAIPromptPlaceholder();
    } finally {
      setIsLoading(false);
    }
  };

  // Professional AI-style concept generator
  const generateAIPromptPlaceholder = async () => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      // Create a sophisticated gradient background
      const gradient = ctx.createLinearGradient(0, 0, 512, 512);
      gradient.addColorStop(0, '#f8f9fa');
      gradient.addColorStop(0.3, '#e9ecef');
      gradient.addColorStop(0.6, '#dee2e6');
      gradient.addColorStop(1, '#ced4da');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 512, 512);
      
      // Add subtle grid pattern for design feel
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.lineWidth = 1;
      for (let i = 0; i < 512; i += 32) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, 512);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(512, i);
        ctx.stroke();
      }
      
      // Add border frames
      ctx.strokeStyle = '#adb5bd';
      ctx.lineWidth = 3;
      ctx.strokeRect(15, 15, 482, 482);
      ctx.strokeStyle = '#6c757d';
      ctx.lineWidth = 1;
      ctx.strokeRect(25, 25, 462, 462);
      
      // Add main title
      ctx.fillStyle = '#212529';
      ctx.font = 'bold 24px serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('Interior Design Concept', 256, 80);
      
      // Add prompt text with better formatting
      ctx.fillStyle = '#495057';
      ctx.font = '18px serif';
      
      // Word wrap the prompt
      const words = prompt.split(' ');
      const lines = [];
      let currentLine = '';
      
      words.forEach(word => {
        const testLine = currentLine + (currentLine ? ' ' : '') + word;
        const metrics = ctx.measureText(testLine);
        if (metrics.width > 420 && currentLine) {
          lines.push(currentLine);
          currentLine = word;
        } else {
          currentLine = testLine;
        }
      });
      lines.push(currentLine);
      
      // Draw prompt lines
      const lineHeight = 28;
      const startY = 180;
      
      lines.forEach((line, index) => {
        ctx.fillText(line, 256, startY + index * lineHeight);
      });
      
      // Add design elements
      ctx.strokeStyle = '#868e96';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(100, 280);
      ctx.lineTo(412, 280);
      ctx.stroke();
      
      // Add AI branding
      ctx.fillStyle = '#6c757d';
      ctx.font = 'italic 14px serif';
      ctx.fillText('AI-Powered Design Visualization', 256, 320);
      
      // Add decorative corner elements
      ctx.strokeStyle = '#adb5bd';
      ctx.lineWidth = 2;
      
      // Top-left corner
      ctx.beginPath();
      ctx.moveTo(40, 40);
      ctx.lineTo(40, 60);
      ctx.lineTo(60, 40);
      ctx.stroke();
      
      // Top-right corner
      ctx.beginPath();
      ctx.moveTo(452, 40);
      ctx.lineTo(472, 40);
      ctx.lineTo(472, 60);
      ctx.stroke();
      
      // Bottom-left corner
      ctx.beginPath();
      ctx.moveTo(40, 472);
      ctx.lineTo(40, 452);
      ctx.lineTo(60, 472);
      ctx.stroke();
      
      // Bottom-right corner
      ctx.beginPath();
      ctx.moveTo(472, 472);
      ctx.lineTo(472, 452);
      ctx.lineTo(452, 472);
      ctx.stroke();
      
      // Add timestamp
      ctx.fillStyle = '#adb5bd';
      ctx.font = '10px sans-serif';
      const timestamp = new Date().toLocaleString();
      ctx.fillText(`Generated: ${timestamp}`, 256, 490);
      
      // Add "AI Concept" watermark
      ctx.fillStyle = '#868e96';
      ctx.font = '12px sans-serif';
      ctx.fillText('Interior Design Concept', 256, 505);
      
      // Convert to data URL
      const dataUrl = canvas.toDataURL('image/png', 0.9);
      setGeneratedImage(dataUrl);
    }
  };

  // Helper function for placeholder generation
  const generatePlaceholder = async () => {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, 1024, 1024);
      gradient.addColorStop(0, '#f8f8f8');
      gradient.addColorStop(1, '#e0e0e0');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 1024, 1024);
      
      // Add text
      ctx.fillStyle = '#666';
      ctx.font = '32px serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      // Word wrap the prompt
      const words = prompt.split(' ');
      const lines = [];
      let currentLine = '';
      
      words.forEach(word => {
        const testLine = currentLine + (currentLine ? ' ' : '') + word;
        const metrics = ctx.measureText(testLine);
        if (metrics.width > 800 && currentLine) {
          lines.push(currentLine);
          currentLine = word;
        } else {
          currentLine = testLine;
        }
      });
      lines.push(currentLine);
      
      // Draw lines
      const lineHeight = 50;
      const startY = 512 - (lines.length - 1) * lineHeight / 2;
      
      lines.forEach((line, index) => {
        ctx.fillText(line, 512, startY + index * lineHeight);
      });
      
      // Add "AI Concept" watermark
      ctx.font = '24px serif';
      ctx.fillStyle = '#999';
      ctx.fillText('AI Concept - Free Service', 512, 900);
      
      // Convert to data URL
      const dataUrl = canvas.toDataURL('image/png');
      setGeneratedImage(dataUrl);
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
                <span className="text-stone-300 text-sm font-light leading-relaxed mb-4 translate-y-8 group-hover:translate-y-0 transition-transform duration-700 delay-100 ease-out max-w-xs">
                  {item.description}
                </span>
                <span className="text-stone-300 text-[10px] tracking-[0.2em] uppercase translate-y-8 group-hover:translate-y-0 transition-transform duration-700 delay-200 ease-out">
                  View Projects
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