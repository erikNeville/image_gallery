import * as React from "react";
import {
  Button,
  Grid,
  OutlinedInput,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import { Filter } from "../data.models";

const Styled = {
  Grid: styled(Grid)({
    marginTop: "16px",
    alignItems: "center",
  }),
  Input: styled(OutlinedInput)({
    backgroundColor: "#FFFFFF",
    height: "28px",
  }),
  Button: styled(Button)({
    height: "28px",
    textTransform: "none",
    alignItems: "center",
    padding: "15px 20px 12px",
    color: "#000000",
    borderColor: "#000000",
  }),
  Toggle: styled(ToggleButton)({
    backgroundColor: "#FFFFFF",
    padding: "15px 20px 12px",
    height: "32px",
  }),
};

interface Props {
  handleChange: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLElement>) => void;
  handleFilters: (
    event: React.MouseEvent<HTMLElement>,
    newFilters: Filter
  ) => void;
  value: string;
  filters: string[];
}

const SearchBar = ({
  handleChange,
  handleSubmit,
  handleFilters,
  value,
  filters,
}: Props): React.ReactElement => {
  return (
    <form onSubmit={handleSubmit}>
      <Styled.Grid container spacing={3}>
        <Grid item>
          <Typography variant="body2">Search for images:</Typography>
        </Grid>
        <Grid item>
          <Styled.Input
            onChange={handleChange}
            value={value}
            onSubmit={handleSubmit}
          />
        </Grid>
        <Grid item>
          <Styled.Button
            type="submit"
            variant="outlined"
            onClick={handleSubmit}
          >
            Search
          </Styled.Button>
        </Grid>
        <Grid item>
          <ToggleButtonGroup value={filters} onChange={handleFilters}>
            <Styled.Toggle value="video" sx={{ marginRight: "1px" }}>
              VIDEOS
            </Styled.Toggle>
            <Styled.Toggle value="photo">PHOTOS</Styled.Toggle>
          </ToggleButtonGroup>
        </Grid>
      </Styled.Grid>
    </form>
  );
};

export default SearchBar;
