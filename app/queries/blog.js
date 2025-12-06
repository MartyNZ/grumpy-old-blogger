export const qryAllBlogCategories = groq`
  *[_type == "blog.category"][]{
      _id,
      title,
      'slug': slug.current,
  }
`;

export const qryBlog = groq`
  *[_type == "blog"][0]{
    _id,
    title,
    image{
      asset->{
        url,
        _id,
        metadata
      }
    },
    description,
    latestPosts->{
      displayNumber,
      title,
      summary
    }
  }
`;

export const qryAllPosts = groq`
*[_type == "post" && draft != true && dateTime(now()) > dateTime(publishedDate + "T00:00:00Z")]{
    _id,
    title,
    'slug': slug.current,
    image{
      asset->{
        url,
        _id,
        metadata
      }
    },
    'excerpt': array::join(string::split(pt::text(body), "")[0...175], "") + "...",
    publishedDate,
    category->{
      _id,
      name,
      'slug':slug.current,
      'postCount':count(*[_type == 'post' && references(^._id)])
    },
    tags[]->{
      _id,
      tag,
      'slug':slug.current
    },
    authors[]->{
      _id,
      'slug':slug.current,
      'name':firstName + ' ' + lastName,
      image{
        asset->{
          url,
          _id,
          metadata
        }
      },
    },
  } | order(publishedDate desc)
`;

export const qryPosts = groq`
  *[_type == "post" && draft != true && dateTime(now()) > dateTime(publishedDate + "T00:00:00Z")]{
    _id,
    title,
    'slug': slug.current,
    image{
      asset->{
        url,
        _id,
        metadata
      }
    },
    'excerpt': array::join(string::split(pt::text(body), "")[0...175], "") + "...",
    publishedDate,
    category->{
      _id,
      name,
      'slug':slug.current,
      'postCount':count(*[_type == 'post' && references(^._id)])
    },
    tags[]->{
      _id,
      tag,
      'slug':slug.current
    },
    authors[]->{
      _id,
      'slug':slug.current,
      'name':firstName + ' ' + lastName,
      image{
        asset->{
          url,
          _id,
          metadata
        }
      },
    },
  } | order(publishedDate desc)[]
`;

export const qryPostBySlug = groq`
  *[_type == "post" && draft != true && slug.current == $slug ][0]{
    _id,
    title,
    'slug': slug.current,
    image{
      asset->{
        url,
        _id,
        metadata
      }
    },
    body,
    'excerpt': array::join(string::split(pt::text(body), "")[0...175], "") + "...",
    publishedDate,
    category->{
      _id,
      name,
      'slug':slug.current,
    },
    tags[]->{
      _id,
      tag,
      'slug':slug.current
    },
    authors[]->{
      _id,
      'slug':slug.current,
      'name':firstName + ' ' + lastName,
      image{
        asset->{
          url,
          _id,
          metadata
        }
      },
    },
  }
`;

export const qryAllPostsByCategory = groq`
*[_type == "blog.category"][]{
    _id,
    title,
    image{
      asset->{
        url,
        _id,
        metadata
      }
    },
    'slug':slug.current,
    description,
    'posts':*[_type=='post' && draft!= true && references(^._id) && dateTime(now()) > dateTime(publishedDate + "T00:00:00Z")]{
      _id,
      title,
      'slug': slug.current,
      image{
        asset->{
          url,
          _id,
          metadata
        }
      },
      'excerpt': array::join(string::split(pt::text(body), "")[0...175], "") + "...",
      publishedDate,
      'category':category->{
        name,
        'slug':slug.current
      },
      authors[]->{
        _id,
        'slug':slug.current,
        'name':firstName + ' ' + lastName,
        image{
          asset->{
            url,
            _id,
            metadata
          }
        }
      } | order(publishedDate desc)
    }
  }
`;

export const qryPostsByCategory = groq`
*[_type == "blog.category" && slug.current == $slug][0]{
    _id,
    title,
    image{
      asset->{
        url,
        _id,
        metadata
      }
    },
    'slug':slug.current,
    description,
    'posts':*[_type=='post' && draft!= true && references(^._id) && dateTime(now()) > dateTime(publishedDate + "T00:00:00Z")]{
      _id,
      title,
      'slug': slug.current,
      image{
        asset->{
          url,
          _id,
          metadata
        }
      },
      'excerpt': array::join(string::split(pt::text(body), "")[0...175], "") + "...",
      publishedDate,
      'category':category->{
        name,
        'slug':slug.current
      },
      authors[]->{
        _id,
        'slug':slug.current,
        'name':firstName + ' ' + lastName,
        image{
          asset->{
            url,
            _id,
            metadata
          }
        }
      } | order(publishedDate desc)
    }
  }
`;

export const qryAllPostTags = groq`
 *[_type == 'post.tag'][]{
  _id,
  tag
}
`;

export const qryBlogCollectionNavigation = groq`
*[_type == "blog.collectionNavigation" && _id == 'blogCollectionNavigation'][0]{
    _id,
    title,
    'slug':slug.current,
    blogCollectionNavGroup[]->{
      _id,
      title,
      'slug':slug.current,
      category->{
        _id,
        title,
        'slug':slug.current,
        image{
          asset->{
            url,
            _id,
            metadata
          }
        },
        description,
        'count':count(*[_type == 'blog' && references(^._id)])
      },
      collections[]->{
        _id,
        title,
        'slug':slug.current,
        image{
          asset->{
            url,
            _id,
            metadata
          }
        },
        parentCollection->{
          _id,
          title,
          description,
          'slug':slug.current,
          image{
            asset->{
              url,
              _id,
              metadata
            },
          }
        },
        childCollections[]->{
          _id,
          title,
          description,
          'slug':slug.current,
          image{
            asset->{
              url,
              _id,
              metadata
            }
          }
        },
      }
    }
  }
`;

export const qryBlogCount = groq`
*[_type == "blog.category"][] {
  title,
  'slug':slug.current,
  'posts':count(*[_type == 'post' && references(^._id)])
}
`;
