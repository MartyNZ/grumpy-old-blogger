export const qryAuthors = groq`
  *[_type == "contact" && contactType match 'author'][]{
    _id,
    'slug':slug.current,
    'name':firstName + ' ' + lastName,
    image{
      asset->{
        _id,
        url,
        metadata
      }
    },
    'posts':*[_type == "post"&& references(^._id)]{
      _id,
      title,
      'slug':slug.current,
      image{
        asset->{
          _id,
          url,
          metadata
        }
      },
    }
  } | order(lastName asc)
`;

export const qryAuthorBySlug = groq`
  *[_type == "contact" && draft != true && slug.current == $slug ][0]{
    _id,
    'name':firstName + ' ' + lastName,
    'slug':slug.current,
    image{
      asset->{
        _id,
        url,
        metadata
      }
    },
    bio,
    socialConnections[]{
      'url': url + username,
      title,
      iconName,
    },
      'posts':*[_type == "post"&& references(^._id)]{
      _id,
      title,
      'slug':slug.current,
      image{
        asset->{
          _id,
          url,
          metadata
        }
      },
    }
  }
`;
