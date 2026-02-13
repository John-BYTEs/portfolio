import { useState } from "react";
import { items } from "../data/Items";
import CardProject from "@/components/CardProject";
import Modal from "@/components/Modal";
import type { ProjectItem } from "@/types/project-types";

export default function Project() {
  const [selectedItem, setSelectedItem] = useState<ProjectItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleCardClick = (item: ProjectItem): void => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = (): void => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <>
      <main className="flex-1 text-gray-200 p-6 overflow-y-auto">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {items.map((item: ProjectItem, i: number) => (
            <div 
              key={item.id || i} 
              onClick={() => handleCardClick(item)}
              className="cursor-pointer"
            >
              <CardProject 
                title={item.title} 
                description={item.description} 
                image={item.image} 
                link={item.link}
              />
            </div>
          ))}
        </div>
      </main>

      <Modal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        item={selectedItem}
      />
    </>
  );
}