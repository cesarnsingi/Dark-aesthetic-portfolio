import Contact from '@/pages/Contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Contact - Cesar Nsingi',
	description: 'Cesar Nsingi, a Software Engineer.',
};

export default function ContactPage() {
	return <Contact />;
}