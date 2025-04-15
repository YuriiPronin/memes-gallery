import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "@heroui/react";
import Cookies from "js-cookie";
import initialMemes from "../utils/fakeBackend";
import "../styles/memeEditModal.css";

const MemeEditModal = ({ isOpen, onClose, meme, setMemes }) => {
  const navigate = useNavigate();
  const [editedMeme, setEditedMeme] = useState({ ...meme });

  useEffect(() => {
    if (meme) {
      setEditedMeme({ ...meme });
    }
  }, [meme]);

  const handleSave = () => {
    if (
      !editedMeme.name ||
      editedMeme.name.length < 3 ||
      !editedMeme.image ||
      !isValidURL(editedMeme.image)
    ) {
      alert(
        "Check the title (3+ characters) and the correctness of the image URL"
      );
      return;
    }

    const updatedMemes = initialMemes.map((m) =>
      m.id === editedMeme.id ? editedMeme : m
    );

    Cookies.set("memesData", JSON.stringify(updatedMemes));
    setMemes(updatedMemes);
    onClose();
    navigate("/");
  };

  const isValidURL = (url) => {
    try {
      new URL(url);
      return /\.(jpg|jpeg)$/i.test(url);
    } catch {
      return false;
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onClose}
      placement="top-center"
      aria-label="edit modal"
    >
      <ModalContent className="modal-content">
        {(onClose) => (
          <>
            <ModalHeader className="modal-header">Edit Mem</ModalHeader>
            <ModalBody>
              <Input
                label="Name"
                value={editedMeme.name}
                onValueChange={(value) =>
                  setEditedMeme((prev) => ({ ...prev, name: value }))
                }
                className="input-field"
                aria-label="Name"
              />
              <Input
                label="Likes"
                type="number"
                value={editedMeme.likes}
                onValueChange={(value) =>
                  setEditedMeme((prev) => ({
                    ...prev,
                    likes: parseInt(value) || 0,
                  }))
                }
                className="input-field"
                aria-label="Likes"
              />
              <Input
                label="Image (URL .jpg)"
                value={editedMeme.image}
                onValueChange={(value) =>
                  setEditedMeme((prev) => ({ ...prev, image: value }))
                }
                className="input-field"
                aria-label="Image"
              />
            </ModalBody>
            <ModalFooter className="modal-footer">
              <Button
                color="danger"
                variant="flat"
                onPress={onClose}
                className="button cancel-button"
                aria-label="Cancel"
              >
                Cancel
              </Button>
              <Button
                color="primary"
                onPress={handleSave}
                className="button save-button"
                aria-label="Save changes"
              >
                Save
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default MemeEditModal;
