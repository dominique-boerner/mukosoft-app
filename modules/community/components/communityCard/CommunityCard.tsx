import { FunctionComponent } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { ChevronRight, Favorite, FavoriteBorder } from "@mui/icons-material";

interface CommunityCardProps {
  id: string;
  name: string;
  image: string;
  location: string;
  isFavourite: boolean;
  onFavouriteClick: () => void;
}

const CommunityCard: FunctionComponent<CommunityCardProps> = ({
  id,
  name,
  image,
  location,
  isFavourite,
  onFavouriteClick,
}) => {
  // const [isFavourite, setIsFavourite] = useState(false);

  // const communityService = CommunityService.getInstance();

  // useEffect(() => {
  //   communityService?.isFavourite(id).then((result) => setIsFavourite(result));
  // }, [communityService, id]);

  return (
    <Box mb="1rem">
      <Card sx={{ minWidth: 275 }}>
        <CardMedia component="img" alt={name} image={image} />
        <CardContent>
          <Typography variant="h2" color="text.secondary" gutterBottom>
            {name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {location}
          </Typography>
        </CardContent>
        <CardActions>
          {isFavourite ? (
            <IconButton
              onClick={() => {
                onFavouriteClick();
              }}
            >
              <Favorite />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => {
                onFavouriteClick();
              }}
            >
              <FavoriteBorder />
            </IconButton>
          )}
          <IconButton>
            <ChevronRight />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
};

export default CommunityCard;
