
import { motion } from "framer-motion";
import { FiZoomIn } from "react-icons/fi";


const GalleryCard = ({ img, index, itemVariants }) => {
    return (
        <motion.a
            key={index}
            href={img}
            data-fancybox="gallery"
            data-caption={`Gallery Image ${index + 1}`}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: .2 }}
            variants={itemVariants}
            className="group relative block overflow-hidden rounded-xl shadow-lg"
        >

            {/* Image */}
            <img
                src={img}
                alt={`gallery-${index}`}
                className="w-full h-40 md:h-60 object-cover transition duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-100 transition duration-400 flex items-center justify-center">

                <FiZoomIn className="text-white text-3xl opacity-90" />

            </div>

        </motion.a>
    )
}

export default GalleryCard