import React from "react"
import { INLINES, BLOCKS, MARKS, Document } from "@contentful/rich-text-types"
import {
  Options,
  documentToReactComponents,
} from "@contentful/rich-text-react-renderer"
import PropTypes from "prop-types"
import { Box, BoxProps, Divider, Heading, Link } from "@chakra-ui/react"
import Image from "next/image"

const options: Options = {
  renderMark: {
    [MARKS.UNDERLINE]: (text) => <span className="underline">{text}</span>,
    [MARKS.ITALIC]: (text) => <em>{text}</em>,
    [MARKS.BOLD]: (text) => <strong>{text}</strong>,
    [MARKS.CODE]: (text) => <code>{text}</code>,
  },
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { gatsbyImageData, description } = node.data.target

      return (
        <div>
          <Image src={gatsbyImageData} alt={description ? description : null} />
          {description && <div>{description}</div>}
        </div>
      )
    },
    [INLINES.HYPERLINK]: (node, children) => {
      if (node.data.uri.includes("player.vimeo.com/video")) {
        return (
          <iframe
            title="Vimeo content"
            loading="lazy"
            src={node.data.uri}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        )
      } else if (node.data.uri.includes("youtube.com/embed")) {
        ;<iframe
          title="YouTube content"
          loading="lazy"
          frameBorder="0"
          src={node.data.uri}
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      } else if (node.data.uri.includes("giphy.com/embed")) {
        return (
          <iframe
            title="Giphy content"
            loading="lazy"
            src={node.data.uri}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        )
      } else {
        return <Link href={node.data.uri}>{children}</Link>
      }
    },
    [BLOCKS.HEADING_1]: (node, children) => (
      <Heading as="h1" mb={3}>
        {children}
      </Heading>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <Heading as="h2" mb={3}>
        {children}
      </Heading>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <Heading as="h2">{children}</Heading>
    ),
    [BLOCKS.HEADING_4]: (node, children) => (
      <Heading as="h2">{children}</Heading>
    ),
    [BLOCKS.HEADING_5]: (node, children) => (
      <Heading as="h3">{children}</Heading>
    ),
    [BLOCKS.HEADING_6]: (node, children) => (
      <Heading as="h4">{children}</Heading>
    ),
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <Box as="p" mb={5}>
        {children}
      </Box>
    ),
    [BLOCKS.HR]: (node, children) => <Divider />,
  },
}

type RichTextProps = BoxProps & {
  children: Document
}

const RichText = ({ children, ...props }: RichTextProps) => {
  return <Box {...props}>{documentToReactComponents(children, options)}</Box>
}

RichText.propTypes = {
  children: PropTypes.any.isRequired,
}

export default RichText
