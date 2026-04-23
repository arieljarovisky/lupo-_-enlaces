import { motion } from 'motion/react';
import { Instagram, Facebook } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

export default function SocialFooter() {
  const socials = [
    { icon: Instagram, url: BUSINESS_INFO.socials.instagram },
    { icon: Facebook, url: BUSINESS_INFO.socials.facebook },
    { 
      customIcon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .011 5.403.008 12.039c0 2.12.553 4.189 1.603 6.04L0 24l6.095-1.599c1.779.97 3.786 1.481 5.861 1.481h.005c6.634 0 12.034-5.403 12.037-12.039a11.85 11.85 0 00-3.527-8.513z"/>
        </svg>
      ),
      url: BUSINESS_INFO.socials.whatsapp 
    },
    { 
      customIcon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.9-.23-2.74.12-.69.28-1.27.8-1.62 1.46-.45.83-.42 1.9.09 2.69.51.72 1.34 1.12 2.21 1.08.85.01 1.68-.45 2.11-1.18.39-.63.48-1.41.47-2.13-.02-5.49-.02-10.98-.01-16.47z"/>
        </svg>
      ),
      url: BUSINESS_INFO.socials.tiktok 
    },
  ];

  return (
    <div className="flex justify-center items-center space-x-6 py-12">
      {socials.map((social, index) => (
        <motion.a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
          whileHover={{ y: -4, scale: 1.1 }}
          className="group w-12 h-12 border-2 border-lupo-black flex items-center justify-center text-lupo-black hover:bg-lupo-black transition-all bg-transparent rounded-lg"
        >
          <div className="group-hover:text-white transition-colors duration-200 flex items-center justify-center">
            {social.customIcon ? social.customIcon : <social.icon size={20} strokeWidth={2} />}
          </div>
        </motion.a>
      ))}
    </div>
  );
}
