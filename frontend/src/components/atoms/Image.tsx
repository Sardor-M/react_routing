import styled, { css } from "styled-components";

interface ImageProps {
  src?: string;
  alt?: string;
  width?: string;
  height?: string;
  objectFit?: "cover" | "contain" | "none" | "scale-down" | "fill";
  isIcon?: boolean;
  style?: React.CSSProperties;
}

const ImageWrapper = styled.img<ImageProps>`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "auto"};
  object-fit: ${(props) => props.objectFit || "cover"};

  ${({ isIcon, height, width }) =>
    isIcon &&
    css`
      height: ${height || "1em"};
      width: ${width || "1em"};
    `}
`;

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  objectFit,
  style,
}) => {
  return (
    <ImageWrapper
      src={src}
      alt={alt}
      width={width}
      height={height}
      objectFit={objectFit}
      style={style}
    />
  );
};

export default Image;
