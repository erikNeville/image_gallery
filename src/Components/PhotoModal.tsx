import * as React from "react";
import { Box, Fade, IconButton, Modal, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";
import { IPhoto } from "../data.models";
import { styled } from "@mui/system";

const Styled = {
  Root: styled(Box)({
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxHeight: "90vh",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  }),
  Title: styled(Typography)({
    color: "#FFFFFF",
    padding: "12px",
  }),
  Photo: styled("img")({
    objectFit: "contain",
    objectPosition: "center",
    height: "100%",
    width: "100%",
  }),
  CloseBtn: styled(IconButton)({
    position: "absolute",
    color: "#FFFFFF",
    top: "-48px",
    right: "-12px",
  }),
};

type ModalProps = "thumbnailUrl" | "title";

interface Props extends Pick<IPhoto, ModalProps> {
  open: boolean;
  handleClose: () => void;
}

const PhotoModal = ({
  open,
  handleClose,
  ...photoProps
}: Props): React.ReactElement => {
  const { thumbnailUrl, title } = photoProps;

  return (
    <Modal
      open={open}
      onClose={handleClose}
      BackdropProps={{
        style: { backgroundColor: "#333333", opacity: 0.9 },
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Styled.Root>
          <Styled.CloseBtn onClick={handleClose}>
            <Close />
          </Styled.CloseBtn>
          <Styled.Photo src={thumbnailUrl} />
          <Styled.Title variant="body1">{title}</Styled.Title>
        </Styled.Root>
      </Fade>
    </Modal>
  );
};

export default PhotoModal;
