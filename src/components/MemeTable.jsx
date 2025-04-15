import { useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Button,
} from "@heroui/react";
import MemeEditModal from "./MemeEditModal";
import Cookies from "js-cookie";
import "../styles/memeTable.css";

const MemeTable = ({ memes, setMemes }) => {
  const memesFromCookies = Cookies.get("memesData");

  const [memesData, setMemesData] = useState(
    memesFromCookies ? JSON.parse(memesFromCookies) : []
  );
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedMeme, setSelectedMeme] = useState(null);

  const handleOpenEditModal = (meme) => {
    setSelectedMeme(meme);
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedMeme(null);
  };

  const handleSaveChanges = (updatedMeme) => {
    setMemesData(
      memesData.map((meme) => (meme.id === updatedMeme.id ? updatedMeme : meme))
    );
  };

  const isValidURL = (url) => {
    const pattern = new RegExp(
      "^(https?://)?([a-z0-9-]+\\.)+[a-z0-9]{2,6}(/[-a-zA-Z0-9@:%_\\+.~#?&//=]*)?$"
    );
    return pattern.test(url);
  };

  return (
    <>
      <Table className="meme-table" aria-label="meme table">
        <TableHeader>
          <TableColumn>ID</TableColumn>
          <TableColumn>Name</TableColumn>
          <TableColumn>Picture</TableColumn>
          <TableColumn>Likes</TableColumn>
          <TableColumn>Actions</TableColumn>
        </TableHeader>

        <TableBody>
          {memes.map((meme) => (
            <TableRow key={meme.id}>
              <TableCell>{meme.id}</TableCell>
              <TableCell>{meme.name}</TableCell>
              <TableCell>
                {isValidURL(meme.image) ? (
                  <a
                    href={meme.image}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Переглянути мем
                  </a>
                ) : (
                  <span style={{ color: "red" }}>Невірний URL</span>
                )}
              </TableCell>
              <TableCell>{meme.likes}</TableCell>
              <TableCell>
                <Button
                  className="actions-button"
                  onPress={() => handleOpenEditModal(meme)}
                  aria-label="edit"
                >
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <MemeEditModal
        isOpen={isEditModalOpen}
        meme={selectedMeme}
        onClose={handleCloseEditModal}
        onSave={handleSaveChanges}
        setMemes={setMemes}
      />
    </>
  );
};

export default MemeTable;
