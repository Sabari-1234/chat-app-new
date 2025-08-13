import React, { useState } from "react";
import {
  Plus,
  DotsThree,
  List,
  Link,
  Pencil,
  Trash,
  ArrowUp,
  ArrowDown,
} from "phosphor-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import PageWrapper from "./shared/PageWrapper";
import SectionTitle from "./shared/SectionTitle";
import SectionWrapper from "./shared/SectionWrapper";
import { useLeftPanel } from "@/contexts/LeftPanelContext";

interface FolderData {
  id: string;
  name: string;
  chatCount: number;
  emoji?: string;
  hasLink?: boolean;
  isDefault?: boolean;
}

interface ChatFolderItemProps extends FolderData {
  showMenu?: boolean;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  onMoveUp?: (id: string) => void;
  onMoveDown?: (id: string) => void;
  onDragStart?: (id: string) => void;
  onDragOver?: (e: React.DragEvent, id: string) => void;
  onDragLeave?: (e: React.DragEvent) => void;
  onDrop?: (e: React.DragEvent, id: string) => void;
  onDragEnd?: () => void;
  isDragging?: boolean;
  isDragOver?: boolean;
}

const ChatFolder: React.FC = () => {
  const { setLeftPanel } = useLeftPanel();
  const [folders, setFolders] = useState<FolderData[]>([
    { id: "all", name: "All Chats", chatCount: 0, isDefault: true },
    { id: "family", name: "Family", chatCount: 2, emoji: "❤️😊" },
    { id: "friends", name: "Friends", chatCount: 2, emoji: "😱" },
    { id: "nanbargal", name: "Nanbargal", chatCount: 1, emoji: "😈" },
    { id: "personal", name: "Personal", chatCount: 87 },
    { id: "unread", name: "Unread", chatCount: 128 },
    { id: "groups", name: "Groups", chatCount: 1, emoji: "📊" },
    { id: "channels", name: "Channels", chatCount: 3, emoji: "🅰️" },
    { id: "bot", name: "Bot", chatCount: 14, emoji: "☺️" },
    { id: "anime", name: "Anime Toon", chatCount: 29, hasLink: true },
    { id: "series", name: "Series", chatCount: 85, emoji: "🔥", hasLink: true },
  ]);

  // const [selectedFolder, setSelectedFolder] = useState<string>("all");
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  const [dragOverItem, setDragOverItem] = useState<string | null>(null);

  const AnimatedFolderIcon: React.FC = () => {
    const handleFolderClick = () => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 2000); // Animation duration
    };

    return (
      <div className="relative cursor-pointer" onClick={handleFolderClick}>
        <div
          className={`transition-all duration-500 ${
            isAnimating ? "animate-pulse" : ""
          }`}
        >
          {/* Main folder body */}
          <div className="w-24 h-20 bg-amber-200 rounded-lg relative overflow-hidden border border-amber-300">
            {/* Folder tabs with animation */}
            <div
              className={`absolute transition-all duration-700 ${
                isAnimating ? "-top-1 scale-110" : "-top-2"
              }`}
            >
              <div
                className={`absolute left-2 w-8 h-4 bg-orange-300 rounded-t-md transition-all duration-500 ${
                  isAnimating ? "bg-orange-400 translate-y-1" : ""
                }`}
              ></div>
              <div
                className={`absolute left-12 w-8 h-4 bg-blue-400 rounded-t-md transition-all duration-700 ${
                  isAnimating ? "bg-blue-500 translate-y-1" : ""
                }`}
              ></div>
              <div
                className={`absolute left-22 w-8 h-4 bg-red-400 rounded-t-md transition-all duration-900 ${
                  isAnimating ? "bg-red-500 translate-y-1" : ""
                }`}
              ></div>
            </div>

            {/* Folder body animation */}
            <div
              className={`w-full h-full bg-amber-300 rounded-lg border border-amber-400 transition-all duration-500 ${
                isAnimating ? "bg-amber-400 shadow-md" : ""
              }`}
            >
              {/* Inner files animation */}
              {isAnimating && (
                <div className="absolute inset-2 space-y-1">
                  <div className="h-1 bg-amber-600 rounded opacity-60 animate-pulse"></div>
                  <div
                    className="h-1 bg-amber-600 rounded opacity-60 animate-pulse"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="h-1 bg-amber-600 rounded opacity-60 animate-pulse"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
              )}

              {/* Sorting animation lines */}
              {isAnimating && (
                <div className="absolute inset-x-2 top-6 space-y-2">
                  <div className="flex gap-1">
                    <div
                      className="w-4 h-1 bg-blue-500 rounded animate-bounce"
                      style={{ animationDelay: "0.3s" }}
                    ></div>
                    <div
                      className="w-4 h-1 bg-red-500 rounded animate-bounce"
                      style={{ animationDelay: "0.4s" }}
                    ></div>
                    <div
                      className="w-4 h-1 bg-green-500 rounded animate-bounce"
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const handleCreateFolder = () => {
    const newFolder: FolderData = {
      id: `folder_${Date.now()}`,
      name: "New Folder",
      chatCount: 0,
      emoji: "📁",
    };
    setFolders((prev) => [...prev, newFolder]);
  };

  const handleEditFolder = (id: string) => {
    // In a real app, this would open an edit dialog
    console.log("Edit folder:", id);
  };

  const handleDeleteFolder = (id: string) => {
    setFolders((prev) => prev.filter((folder) => folder.id !== id));
  };

  const handleMoveFolder = (id: string, direction: "up" | "down") => {
    setFolders((prev) => {
      const index = prev.findIndex((folder) => folder.id === id);
      if (index === -1) return prev;

      const newIndex = direction === "up" ? index - 1 : index + 1;
      if (newIndex < 0 || newIndex >= prev.length) return prev;

      const newFolders = [...prev];
      [newFolders[index], newFolders[newIndex]] = [
        newFolders[newIndex],
        newFolders[index],
      ];
      return newFolders;
    });
  };

  // const handleFolderClick = (id: string) => {
  //   setSelectedFolder(id);
  //   // In a real app, this would navigate to the folder's chat list
  //   console.log("Selected folder:", id);
  // };

  const handleDragStart = (id: string) => {
    setDraggedItem(id);
  };

  const handleDragOver = (e: React.DragEvent, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    if (draggedItem !== id) {
      setDragOverItem(id);
    }
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    // Only clear drag over if we're leaving the container entirely
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = e.clientX;
    const y = e.clientY;

    if (x < rect.left || x > rect.right || y < rect.top || y > rect.bottom) {
      setDragOverItem(null);
    }
  };

  const handleDrop = (e: React.DragEvent, dropId: string) => {
    e.preventDefault();
    e.stopPropagation();

    if (draggedItem && draggedItem !== dropId) {
      const draggedIndex = folders.findIndex(
        (folder) => folder.id === draggedItem
      );
      const dropIndex = folders.findIndex((folder) => folder.id === dropId);

      if (draggedIndex !== -1 && dropIndex !== -1) {
        const newFolders = [...folders];
        const [draggedFolder] = newFolders.splice(draggedIndex, 1);
        newFolders.splice(dropIndex, 0, draggedFolder);
        setFolders(newFolders);
      }
    }

    setDraggedItem(null);
    setDragOverItem(null);
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
    setDragOverItem(null);
  };

  const ChatFolderItem: React.FC<ChatFolderItemProps> = ({
    id,
    name,
    chatCount,
    emoji,
    hasLink,
    isDefault,
    showMenu = true,
    onEdit,
    onDelete,
    onMoveUp,
    onMoveDown,
    onDragStart,
    onDragOver,
    onDragLeave,
    onDrop,
    onDragEnd,
    isDragging,
    isDragOver,
  }) => (
    <div
      className={`group flex items-center justify-between py-3 px-2 rounded-md transition-colors cursor-pointer
        ${isDragging ? "opacity-50 bg-muted" : "hover:bg-muted/50"}
        ${
          isDragOver && !isDragging
            ? "bg-muted border-2 border-dashed border-primary"
            : ""
        }
      `}
      draggable={!isDefault}
      onDragStart={() => onDragStart && onDragStart(id)}
      onDragOver={(e) => onDragOver && onDragOver(e, id)}
      onDragLeave={onDragLeave}
      onDrop={(e) => onDrop && onDrop(e, id)}
      onDragEnd={onDragEnd}
    >
      <div className="flex items-center gap-3 flex-1">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="text-[16px] font-medium">
              {emoji && <span className="mr-1">{emoji}</span>}
              {name}
            </span>
            {hasLink && <Link size={16} className="text-muted-foreground" />}
          </div>
          <span className="text-sm text-muted-foreground">
            {isDefault && name === "All Chats"
              ? "All unarchived chats"
              : chatCount === 1
              ? "1 chat"
              : `${chatCount} chats`}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {/* Drag Handle - Shows on hover for non-default folders */}
        {!isDefault && (
          <div className="opacity-0 group-hover:opacity-100 transition-opacity">
            <List
              size={20}
              className="text-muted-foreground cursor-grab active:cursor-grabbing"
            />
          </div>
        )}

        {/* Menu - Shows for non-default folders */}
        {showMenu && !isDefault && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <DotsThree size={20} className="text-muted-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => onEdit && onEdit(id)}>
                <Pencil size={16} className="mr-2" />
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onMoveUp && onMoveUp(id)}>
                <ArrowUp size={16} className="mr-2" />
                Move Up
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onMoveDown && onMoveDown(id)}>
                <ArrowDown size={16} className="mr-2" />
                Move Down
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => onDelete && onDelete(id)}
                className="text-destructive focus:text-destructive"
              >
                <Trash size={16} className="mr-2" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </div>
  );

  return (
    <PageWrapper
      title="Chat Folders"
      variant="full-width"
      onBack={() => setLeftPanel("settings")}
    >
      {/* Folder Illustration */}
      <SectionWrapper variant="columnCenter" className="gap-4 py-8">
        <AnimatedFolderIcon />
        <div className="text-center max-w-xs">
          <p className="text-muted-foreground text-sm leading-relaxed">
            Create folders for different groups of chats and quickly switch
            between them.
          </p>
        </div>
      </SectionWrapper>

      {/* Create New Folder Button */}
      <div className="flex justify-center">
        <Button variant="outline" onClick={handleCreateFolder} className="px-6">
          <Plus size={20} className="text-muted-foreground mr-2" />
          Create New Folder
        </Button>
      </div>

      {/* Chat Folders List */}
      <div className="flex flex-col gap-2">
        <SectionTitle>Chat Folders</SectionTitle>

        {/* Dynamic Folders */}
        {folders.map((folder) => (
          <ChatFolderItem
            key={folder.id}
            id={folder.id}
            name={folder.name}
            chatCount={folder.chatCount}
            emoji={folder.emoji}
            hasLink={folder.hasLink}
            isDefault={folder.isDefault}
            onEdit={handleEditFolder}
            onDelete={handleDeleteFolder}
            onMoveUp={(id) => handleMoveFolder(id, "up")}
            onMoveDown={(id) => handleMoveFolder(id, "down")}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onDragEnd={handleDragEnd}
            isDragging={draggedItem === folder.id}
            isDragOver={dragOverItem === folder.id}
          />
        ))}
      </div>
    </PageWrapper>
  );
};

export default ChatFolder;
