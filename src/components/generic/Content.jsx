import Prismic from 'prismic-javascript';
import { useEffect, useState } from 'react';

export const Content = ({ children, type, uid }) => {
	const endpoint = "https://pixelate.prismic.io/api/v2";
  const [content, setContent] = useState(undefined);

  useEffect(() => {
    if (!content) {
      Prismic.getApi(endpoint, { accessToken: process.env.PRISMIC_TOKEN })
        .then(api => {
          if (uid) {
            api.getByUID([type], uid).then(response => {
              setContent(response);
            });
          } else {
            api.query(
              Prismic.Predicates.any('document.type', [type]), { pageSize : 100 })
              .then(response => {
                setContent(response);
              });
          }
        })
    }
  });

  return children ? children({ content }) : null;
}