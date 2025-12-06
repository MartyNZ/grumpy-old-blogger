export const qryHero = groq`
  *[_type == 'hero'][0]{
    title,
    buttons[]{
      title,
      linkType,
      _key,
      internalLink{
        'link':reference->{
          'slug':slug.current
        }
      },
      externalLink{
        url
      },
      'phone':{
        'number':phoneNumber->number,
        'label':phoneNumber->label
      },
      externalVideo{
        url
      }
    },
    image{
      asset->{
        _id,
        url,
        metadata
      }
    },
    content
  }
`;

export const qryWhyUs = groq`
  *[_type == 'whyUs'][]{
    title,
    reasons[]{
      _key,
      title,
      subTitle,
      summary
    },
    image{
      asset->{
        _id,
        url,
        metadata
      }
    }
  }
`;

export const qryWhyUsById = groq`
  *[_type == 'whyUs' && _id == $id][0]{
    title,
    reasons[]{
      _key,
      title,
      subTitle,
      summary
    },
    image{
      asset->{
        _id,
        url,
        metadata
      }
    }
  }
`;

export const qryAbout = groq`
  *[_type == 'about'][0]{
    _id,
    title,
    subTitle,
    image{
      asset->{
        _id,
        url,
        metadata
      }
    },
    body
  }
`;

export const qryTeam = groq`
*[_type == 'team'][0]{
  title,
  summary,
  members[]->{_id,
  'name': firstName + " " + lastName,
    image{
      asset->{
        _id,
        url,
        metadata
      }
    },
  details{
    socialConnections[]{
      _key,
      _type,
      title,
      'url':url + username,
    }
  },
  teamDetails{
    role,
    bio
  }
}
}
`;

export const qryContactTypeBySlug = groq`
*[_type == "contact" && references(*[_type == 'contact.type' && slug.current == $slug]._id)][0]{
    _id,
    'name': firstName + " " + lastName,
    image{
      asset->{
        _id,
        url,
        metadata
      }
    },
  details{
    socialConnections[]{
      _key,
      _type,
      title,
      'url':url + username,
    }
  },
  teamDetails{
    role,
    bio
  }
}
`;

export const qryTestimonials = groq`
  *[_type == "testimonials" && _id == 'testimonials'][0]{
    _id,
    title,
    summary,
    testimonial[]{
      _key,
      body,
      rating,
      contact->{
        'name': firstName + ' ' + lastName,
        image{
          'url':asset->url,
          'assetId':asset->_id
        },
        'slug':slug.current
      },
      organisation->{
        name,
        logo{
          asset->{
            _id,
            url,
            metadata
          }
        }
      }
    }
  }
`;

export const qryPolicyById = groq`
  *[_type == 'policy' && _id == $id][0]{
    _id,
    title,
    content
  }
`;

export const qryAllPortfolioCategories = groq`
  *[_type == "portfolio.category" && isActive][]{
    _id,
    title,
    'slug':slug.current
  }
`;
export const qryPortfolio = groq`
  *[_type == "portfolio"][0]{
    title,
    summary,
    items[]->{
      _id,
      'slug':slug.current,
      'url':url.url,
      summary,
      client->{
        'name': firstName + " " + lastName,
      },
      category->{
        title,
        'slug':slug.current,
      },
      completionDate,
      images[]{
        'url':asset->url,
        'assetId':asset->_id
      }
    }
  }
`;

export const qryPortfolioItem = groq`
*[_type == "portfolio.item" && draft != true && slug.current == $slug ][0]{
    _id,
    title,
    'slug':slug.current,
    'url':url.url,
    summary,
    client->{
      'name': firstName + " " + lastName,
    },
    category->{
      title,
      'slug':slug.current,
    },
    completionDate,
    images[]{
      'url':asset->url,
      'assetId':asset->_id
    }
  }
`;

export const qryServices = groq`
  *[_type == 'services'][]{
    title,
    services[]->{
      _id,
      title,
      summary,
      image{
        'url':asset->url,
        'assetId': asset->assetId
      },
      icon{
        style,
        provider,
        name,
      }
    },
  }
`;

export const qryServicesById = groq`
  *[_type == 'services' && _id == $id][0]{
    _id,
    layout,
    title,
    services[]->{
      _key,
      title,
      summary,
      image{
        'url':asset->url,
        'assetId': asset->assetId
      },
      icon{
        provider,
        name,
        'colour':iconColour.hex
      }
    },
  }
`;

export const qryFeatures = groq`
  *[_type == 'features'][]{
    _id,
      title,
      subTitle,
      body,
      layout,
      featureList[]->{
        title,
        summary,
        icon{
          provider,
          name,
          'colour':iconColour.hex
        },
      image{
        'url':asset->url,
        'assetId':asset->_id
      },
      },
      cta{
        title,
        linkType,
        internalLink{
          'link':reference->{
            'slug':slug.current
          }
        },
        externalLink{
          url
        },
        'phone':{
          'number':phoneNumber->number,
          'label':phoneNumber->label
        },
        externalVideo{
          url
        }
      },
      image{
        'url':asset->url,
        'assetId':asset->_id
      },
  }
`;

export const qryFeaturesById = groq`
  *[_type == 'features' && _id == $id][0]{
    _id,
      title,
      subTitle,
      body,
      layout,
      featureList[]->{
        title,
        summary,
        icon{
          provider,
          name,
          'colour':iconColour.hex
        },
      image{
        'url':asset->url,
        'assetId':asset->_id
      },
      },
      cta{
        title,
        linkType,
        internalLink{
          'link':reference->{
            'slug':slug.current
          }
        },
        externalLink{
          url
        },
        'phone':{
          'number':phoneNumber->number,
          'label':phoneNumber->label
        },
        externalVideo{
          url
        }
      },
      image{
        'url':asset->url,
        'assetId':asset->_id
      },
  }
`;

export const qryCta = groq`
  *[_type == 'cta'][]{
  _id,
    title,
    content,
    buttons[]{
      title,
      linkType,
      _key,
      internalLink{
        'link':reference->{
          'slug':slug.current
        }
      },
      externalLink{
        url
      },
      'phone':{
        'number':phoneNumber->number,
        'label':phoneNumber->label
      },
      externalVideo{
        url
      }
    },
    image{
      'url':asset->url,
      'assetId':asset->assetId
    },
  }
`;
export const qryCtaById = groq`
  *[_type == 'cta' && _id == $id][0]{
  _id,
    title,
    content,
    buttons[]{
      title,
      linkType,
      _key,
      internalLink{
        'link':reference->{
          'slug':slug.current
        }
      },
      externalLink{
        url
      },
      'phone':{
        'number':phoneNumber->number,
        'label':phoneNumber->label
      },
      externalVideo{
        url
      }
    },
    image{
      'url':asset->url,
      'assetId':asset->assetId
    },
  }
`;
