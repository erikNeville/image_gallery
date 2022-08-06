import * as React from "react";
import { Box, Typography } from "@mui/material";
import PhotoGrid from "./PhotoGrid";
import RootLayout from "../../Components/Layout/RootLayout";
import SearchBar from "../../Components/SearchBar";
import { styled } from "@mui/system";
import { useFetchPhotos } from "../../fetchPhotos";
import { Filter } from "../../data.models";

const Styled = {
  TitleBox: styled(Box)({
    display: "flex",
    flexDirection: "column",
    marginBottom: "32px",
  }),
};

const PhotoGallery = (): React.ReactElement => {
  const { fetchData, photos, loading } = useFetchPhotos();
  const [searchValue, setSearchValue] = React.useState<string>("");
  const [filters, setFilters] = React.useState<Filter>(["video", "photo"]);

  React.useEffect(() => {
    fetchData(filters, searchValue);
  }, [filters]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleChange = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const val = event.target.value;
    setSearchValue(val);
  };

  const handleSubmit = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    if (searchValue.length > 0) {
      fetchData(filters, searchValue);
    }
  };

  const handleFilters = (
    event: React.MouseEvent<HTMLElement>,
    newFilters: Filter
  ): void => {
    setFilters(newFilters);
  };

  return (
    <RootLayout>
      <Styled.TitleBox>
        <Typography variant="h4" margin="0 auto">
          Photo Gallery
        </Typography>
        <SearchBar
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          value={searchValue}
          filters={filters}
          handleFilters={handleFilters}
        />
      </Styled.TitleBox>
      {loading ? (
        <Box>
          <Typography>Loading...</Typography>
        </Box>
      ) : (
        <PhotoGrid photos={photos} />
      )}
    </RootLayout>
  );
};

export default PhotoGallery;
