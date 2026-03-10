import { motion } from "framer-motion";

const photos = [
  {
    url: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=1000",
    caption: "Momentos Inesquecíveis",
    rotate: -2,
  },
  {
    url: "https://images.unsplash.com/photo-1530103862676-fa8c9d34bbad?q=80&w=1000",
    caption: "Brilho e Alegria",
    rotate: 3,
  },
  {
    url: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1000",
    caption: "Celebrando a Vida",
    rotate: -3,
  },
  {
    url: "https://images.unsplash.com/photo-1496337589254-7e19d01ced44?q=80&w=1000",
    caption: "Sempre Radiante",
    rotate: 2,
  },
];

const PhotoGallery = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 py-12">
      {photos.map((photo, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
          whileInView={{ opacity: 1, scale: 1, rotate: photo.rotate }}
          viewport={{ once: true }}
          whileHover={{ 
            scale: 1.05, 
            rotate: 0, 
            zIndex: 50,
            transition: { type: "spring", stiffness: 300 } 
          }}
          className="relative group"
        >
          <div className="bg-white p-3 pb-12 shadow-2xl rounded-sm border border-border/40 transform transition-transform duration-500">
            <div className="relative overflow-hidden aspect-[4/5]">
              <img 
                src={photo.url} 
                alt={photo.caption}
                className="object-cover w-full h-full grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="absolute bottom-4 left-0 right-0 text-center font-script text-xl text-gray-700">
              {photo.caption}
            </p>
          </div>
          {/* Decorative tape effect */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-6 bg-white/40 backdrop-blur-md border border-white/20 -rotate-2 z-10 shadow-sm" />
        </motion.div>
      ))}
    </div>
  );
};

export default PhotoGallery;
