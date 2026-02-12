import type { Metadata } from 'next';
import { metadata as workMetadata } from './metadata';

export const metadata: Metadata = workMetadata;

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


