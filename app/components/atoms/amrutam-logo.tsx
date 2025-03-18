import {
  Anchor,
  type AnchorProps,
  Image,
  type ImageProps,
} from "@mantine/core";
import { Link, type LinkProps } from "react-router";
import Amrutam from "~/assets/amrutam-text.webp";

interface AmrutamLogoProps extends Partial<AnchorProps & LinkProps> {
  ImageProps?: ImageProps;
}

const AmrutamLogo = ({ ImageProps, ...rest }: AmrutamLogoProps) => {
  return (
    <Anchor component={Link} to={"/"} {...rest}>
      <Image
        src={Amrutam}
        w={{
          base: 150,
          md: 200,
        }}
        {...ImageProps}
      />
    </Anchor>
  );
};

export default AmrutamLogo;
