export {};

// // Components/AboutUsCard.tsx
// import React from "react";
// import { Card, CardContent, Typography, CardMedia } from "@mui/material";
// import { styled, Theme } from "@mui/material/styles";

// // Define the types for the component props
// interface AboutUsCardProps {
//   title: string;
//   description: string;
//   imageUrl: string;
// }

// // Define styled components
// const CustomCard = styled(Card)(({ theme }: { theme: Theme }) => ({
//   display: "flex",
//   flexDirection: "row",
//   alignItems: "center",
//   borderRadius: theme.shape.borderRadius,
//   boxShadow: theme.shadows[4],
//   backgroundColor: theme.palette.background.paper,
//   [theme.breakpoints.down("sm")]: {
//     flexDirection: "column",
//   },
// }));

// const CustomCardContent = styled(CardContent)(
//   ({ theme }: { theme: Theme }) => ({
//     maxWidth: "50%",
//     [theme.breakpoints.down("sm")]: {
//       maxWidth: "100%",
//     },
//   })
// );

// const CustomCardMedia = styled(CardMedia)(({ theme }: { theme: Theme }) => ({
//   width: "50%",
//   height: "100%",
//   // Assuming a known aspect ratio for the image; adjust as needed
//   paddingTop: "calc(50% * 9 / 16)",
// }));

// // Define the component using the styled components
// const AboutUsCard: React.FC<AboutUsCardProps> = ({
//   title,
//   description,
//   imageUrl,
// }) => {
//   return (
//     <CustomCard>
//       <CustomCardContent>
//         <Typography variant="h4" component="h2" gutterBottom>
//           {title}
//         </Typography>
//         <Typography variant="body1" color="textSecondary">
//           {description}
//         </Typography>
//       </CustomCardContent>
//       <CustomCardMedia image={imageUrl} title="About us image" />
//     </CustomCard>
//   );
// };

// export default AboutUsCard;
