export const qrySiteSettings = groq`
*[_type == 'settings'][0]{
  siteOwner,
  title,
  'logoUrl':logo.asset->url,
  'imageId':image.asset->_id,
  image{
    'url': asset->url,
    'assetId': asset->_id,
  },
  description,
  'email':primaryLocation->email,
  'address':primaryLocation->address,
  'addressExt':primaryLocation->addressExt,
  'city':primaryLocation->city,
  'postcode':primaryLocation->postcode,
  'country':primaryLocation->country,
  'state':primaryLocation->state,
  primaryLocation->{
    'lat':mapLocation.lat,
    'lng':mapLocation.lng,
    phoneNumbers[]{
      number,
    },
    socialConnections[]{
      _type,
      title,
      'url': url + username,
    }
  }
}
`;

export const qrySiteNavigation = groq`
{
  "mainNav": coalesce(*[_type=="navigation" && _id == "mainNavigation"][0]{
    _id,
    name,
    navigationLinks[]{
      _key,
      name,
      linkType,
      externalLink{
        _type,
        newWindow,
        url
      },
      internalLink{
        _type,
        reference->{
          _id,
          'slug':slug.current,
          title,
        }
      },
      anchorLink{
        _type,
        anchor,
        page->{
          _id,
        title,
        'slug':slug.current
        }
      }
    }
  }, {}),
  "footerNav": coalesce(*[_type=="navigation" && _id == "footerNavigation"][0]{
    _id,
    name,
    navigationLinks[]{
      _key,
      name,
      linkType,
      externalLink{
        _type,
        newWindow,
        url
      },
      internalLink{
        _type,
        reference->{
          _id,
          'slug':slug.current,
          title,
        }
      },
      anchorLink{
        _type,
        anchor,
        page->{
          _id,
        title,
        'slug':slug.current
        }
      }
    }
  }, {}),
  "mobileNav": coalesce(*[_type=="navigation" && _id == "mobileNavigation"][0]{
    _id,
    name,
    navigationLinks[]{
      _key,
      name,
      linkType,
      externalLink{
        _type,
        newWindow,
        url
      },
      internalLink{
        _type,
        reference->{
          _id,
          'slug':slug.current,
          title,
        }
      },
      anchorLink{
        _type,
        anchor,
        page->{
          _id,
        title,
        'slug':slug.current
        }
      }
    }
  }, {}),
  "otherNav": coalesce(*[_type=="navigation" && _id != 'mainNavigation' && _id != 'footerNavigation' && _id != 'mobileNavigation']{
    _id,
    name,
    navigationLinks[]{
      _key,
      name,
      linkType,
      externalLink{
        _type,
        newWindow,
        url
      },
      internalLink{
        _type,
        reference->{
          _id,
          'slug':slug.current,
          title,
        }
      },
      anchorLink{
        _type,
        anchor,
        page->{
          _id,
        title,
        'slug':slug.current
        }
      }
    }
  }, [])
}
`;

export const qryPage = groq`
  *[_type == 'page' && slug.current==$slug && isActive][0]{
    title,
    isActive,
    'slug':slug.current,
    'image':{
      'url':headerImage.asset->url,
      'assetId':headerImage.asset->_id
    },
    body,
    _id,
    seo{
      description,
      image{
        'url':asset->url,
        'assetId': asset->_id
      }
    },
    sections[]->{
      _type,
      _id,
      title,
      layout,
      ...
    }
  }
`;

export const qryHomePage = groq`
  *[_type == 'homepage'][0]{
    title,
    'image':{
      'url':headerImage.asset->url,
      'assetId':headerImage.asset->_id
    },
    body,
    _id,
    seo{
      description,
      image{
        'url':asset->url,
        'assetId': asset->_id
      }
    },
    sections[]->{
      _type,
      _id,
      title,
      layout
    }
  }
`;

export const qryContactPage = groq`
  *[_type == 'contactpage'][0]{
    title,
    image{
      'url':asset->url,
      'assetId':asset->_id
    },
    content,
    _id,
    seo{
      description,
      image{
        'url':asset->url,
        'assetId': asset->_id
      }
    },
    sections[]->{
      _type,
      _id,
      title,
      layout
    }
  }
`;
