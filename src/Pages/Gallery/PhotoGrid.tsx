import * as React from "react";
import { Box, Typography } from "@mui/material";
import { IPhoto } from "../../data.models";
import PhotoCard from "../../Components/PhotoCard";
import PhotoModal from "../../Components/PhotoModal";
import { styled } from "@mui/system";

const Styled = {
  ImageLayout: styled(Box)({
    columns: "6 232px",
    columnGap: "28px",
    margin: "0 auto",
    width: "100%",
  }),
  Image: styled(Box)({
    display: "inline-block",
    width: "100%",
    marginRight: "1rem",
    marginBottom: "1rem",
  }),
};

interface Props {
  photos: IPhoto[] | null;
}

const PhotoGrid = ({ photos }: Props): React.ReactElement => {
  const [selectedPhoto, setSelectedPhoto] = React.useState<IPhoto | null>(null);
  const modalOpen = Boolean(selectedPhoto);

  const handleOpenModal = (photo: IPhoto): void => {
    setSelectedPhoto(photo);
  };

  const handleCloseModal = (): void => {
    setSelectedPhoto(null);
  };

  return (
    <>
      {photos !== null ? (
        <Styled.ImageLayout>
          {photos.map((photo) => (
            <Styled.Image key={photo.id}>
              <PhotoCard photo={photo} onOpenModal={handleOpenModal} />
            </Styled.Image>
          ))}
        </Styled.ImageLayout>
      ) : (
        <Typography>We couldn't find the photos you searched for.</Typography>
      )}
      {!!selectedPhoto && (
        <PhotoModal
          open={modalOpen}
          handleClose={handleCloseModal}
          {...selectedPhoto}
        />
      )}
    </>
  );
};

export default PhotoGrid;
