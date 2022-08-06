import * as React from "react";
import { Box, Typography } from "@mui/material";
import { IPhoto } from "../data.models";
import { styled } from "@mui/system";

const Styled = {
  Root: styled(Box)({
    width: "232px",
    backgroundColor: "#FFFFFF",
    padding: "8px 8px 0",
    borderRadius: "4px",
    boxShadow: "0px 12px 27px -5px rgba(0,0,0,0.43)",
    overflow: "hidden",
    transition: "transform 0.2s ease",
    backfaceVisibility: "hidden",
    "&:hover": {
      transform: "scale(1.01)",
    },
  }),
  TitleBox: styled(Box)({
    padding: "6px 4px 12px",
    "& .image-title": {
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    "& .image-creator": {
      color: "#686868",
      fontStyle: "italic",
    },
  }),
  Photo: styled("img")({
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "50% 50%",
  }),
};

interface Props {
  photo: IPhoto;
  onOpenModal: (photo: IPhoto) => void;
}

const PhotoCard = ({ photo, onOpenModal }: Props): React.ReactElement => {
  const { title, creator, thumbnailUrl } = photo;
  const handleOpenModal = React.useCallback(() => {
    onOpenModal(photo);
  }, [onOpenModal, photo]);

  return (
    <Styled.Root onClick={handleOpenModal} data-testid="photo-card-root">
      <Styled.Photo src={thumbnailUrl} alt={title} />
      <Styled.TitleBox>
        <Typography
          variant="body1"
          className="image-title"
          data-testid="photo-card-title"
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          className="image-creator"
          data-testid="photo-card-creator"
        >
          {creator}
        </Typography>
      </Styled.TitleBox>
    </Styled.Root>
  );
};

export default PhotoCard;
