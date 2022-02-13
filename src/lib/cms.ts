import { GraphQLClient } from "graphql-request";

interface RequestProps {
  query: string;
  variables?: any;
  preview?: boolean;
}

export function request({ query, variables, preview }: RequestProps) {
  const endpoint = preview
    ? `https://graphql.datocms.com/preview`
    : `https://graphql.datocms.com/`;

  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
    },
  });

  return client.request(query, variables);
}
