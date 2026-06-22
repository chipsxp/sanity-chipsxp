import { defineQuery } from 'next-sanity'

export const PAGE_QUERY = defineQuery(`
  *[_type == "page" && slug.current == $slug][0] {
    ...,
    seo {
      ...,
      ogImage {
        ...,
        asset->
      }
    },
    header-> {
      ...,
      logo {
        ...,
        asset->
      },
      favicon {
        ...,
        asset->
      }
    },
    pageBuilder[] {
      ...,
      _type == "heroBlock" => {
        heroImage {
          ...,
          asset->
        }
      },
      _type == "featuresBlock" => {
        featureImage {
          ...,
          asset->
        }
      },
      _type == "advertisingBlock" => {
        promotionalImage {
          ...,
          asset->
        }
      },
      _type == "authorBioBlock" => {
        avatar {
          ...,
          asset->
        }
      },
      _type == "socialShareBlock" => {
        ogImage {
          ...,
          asset->
        }
      },
      _type == "splitImageBlock" => {
        image {
          ...,
          asset->
        }
      },
      _type == "twoColumnLayout" => {
        ...,
        leftColumn[] {
          ...,
          _type == "featuresBlock" => { featureImage { ..., asset-> } },
          _type == "advertisingBlock" => { promotionalImage { ..., asset-> } },
          _type == "authorBioBlock" => { avatar { ..., asset-> } },
          _type == "socialShareBlock" => { ogImage { ..., asset-> } }
        },
        rightColumn[] {
          ...,
          _type == "featuresBlock" => { featureImage { ..., asset-> } },
          _type == "advertisingBlock" => { promotionalImage { ..., asset-> } },
          _type == "authorBioBlock" => { avatar { ..., asset-> } },
          _type == "socialShareBlock" => { ogImage { ..., asset-> } }
        }
      }
    },
    footer-> {
      ...,
      logos[] {
        ...,
        asset->
      }
    }
  }
`)
