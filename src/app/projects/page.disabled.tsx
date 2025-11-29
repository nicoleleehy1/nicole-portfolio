import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Filter, X } from 'lucide-react';

import ProjectDashboard from "../../components/projects/ProjectDashboard";


export const metadata = {
  title: 'Projects - Your Portfolio',
  description: 'View all my projects and technical work',
};

export default function ProjectsPage() {
  

  return (
    <div>
      <header className="bg-gradient-to-r from-white to-white">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="md:flex md:items-center md:justify-between">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold">Projects</h1>
            <p className="mt-2 text-gray-700">Hello</p>
            <div className="mt-4 space-x-3">
            </div>
          </div>
          <div className="mt-6 md:mt-0 text-right">
            <p className="text-sm text-gray-500">Seeking SWE roles — focused on full-stack, ML infra, MLOps & product-facing systems.</p>
          </div>
        </div>
        
      </div>
      </header>
      <ProjectDashboard />
    </div>
  );
}