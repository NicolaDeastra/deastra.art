export const GetAllPosts = `query getAllPost {
  allPosts {
    title
    _createdAt
    date
    id
    image {
      url
      alt
      responsiveImage {
        aspectRatio
        sizes
        src
      }
    }
  }
}

`;
