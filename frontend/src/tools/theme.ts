export type Font = {
  fontSize: string;
  size: string;
  weight: number;
  lineHeight: string;
  family: string;
};

export type Theme = {
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
    background: string;
    text: string;
  };
  fonts: {
    body: Font;
    heading: Font;
  };
};

const theme: Theme = {
  colors: {
    primary: "#007bff",
    secondary: "#6c757d",
    tertiary: "#6c757d",
    background: "#f8f9fa",
    text: "#343a40",
  },
  fonts: {
    body: {
      fontSize: "1rem",
      size: "16px",
      weight: 400,
      lineHeight: "1.5",
      family: "Arial, sans-serif",
    },
    heading: {
      fontSize: "2rem",
      size: "24px",
      weight: 700,
      lineHeight: "1.5",
      family: "Arial, sans-serif",
    },
  },
};

export default theme;
