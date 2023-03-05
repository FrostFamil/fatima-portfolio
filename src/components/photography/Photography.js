import React from 'react';
import {Box, ImageList, ImageListItem} from "@mui/material";
import {info} from "../../info/Info";

export default function Photography() {
    return (
    <Box sx={{padding: '20px'}}>
        <ImageList variant="masonry" cols={4} gap={8}>
          {info.photography.map((item) => (
            <ImageListItem key={item.image}>
              <img
                src={`${item.image}?w=248&fit=crop&auto=format`}
                srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    );
};