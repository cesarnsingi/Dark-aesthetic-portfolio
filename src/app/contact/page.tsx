import Contact from '@/pages/Contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Contact - Cesar Nsingi',
	description: 'Get in touch with Cesar Nsingi, a Software Engineer specializing in full-stack development.',
};

export default function ContactPage() {
	return <Contact />;
}