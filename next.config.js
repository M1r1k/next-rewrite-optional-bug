module.exports = {
  async rewrites() {
    return [
      {
        source: '/:optionalParam(foo|bar)?/:secondOptional(foo|bar)?',
        destination: '/?optionalParam=:optionalParam&secondOptional=:secondOptional',
      },
    ]
  },
}

