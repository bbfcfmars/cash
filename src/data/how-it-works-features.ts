import { StaticImageData } from 'next/image';
import fileIcon from '/public/file.svg';
import globeIcon from '/public/globe.svg';
import windowIcon from '/public/window.svg';

export interface Feature {
  icon: StaticImageData;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: fileIcon,
    title: 'Upload Your Document',
    description:
      'Simply upload your PDF, DOCX, or TXT file. Our system securely processes your document.',
  },
  {
    icon: windowIcon,
    title: 'AI Analysis',
    description:
      'Our advanced AI reads and understands your document, identifying key information and context.',
  },
  {
    icon: globeIcon,
    title: 'Get Instant Answers',
    description:
      'Ask questions in natural language and receive accurate answers based on the document content.',
  },
];
