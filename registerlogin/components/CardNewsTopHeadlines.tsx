import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { INewsTopHeadlines } from '@/types/dataTopHeadline';
import "../app/globals.css"

const CardNewsTopHeadlines: React.FC<INewsTopHeadlines> = ({ author, title, url, urlToImage, publishedAt }) => {
    return (
        <Card className="mt-5">
            <CardMedia
                sx={{ height: 140 }}
                image={urlToImage}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {author}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {title}
                </Typography>
            </CardContent>
            <CardActions className="bg-gray-100 ">
                <div className="flex ml-auto font-semibold">
                    <a href={url}>Learn More</a>
                </div>
            </CardActions>
        </Card>
    );
}
export default CardNewsTopHeadlines