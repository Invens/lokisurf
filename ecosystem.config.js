module.exports = {
    apps: [
      {
        name: 'lokisurf',
        script: 'node_modules/.bin/next',
        args: 'start',
        instances: 'max', // This will use all available CPU cores
        exec_mode: 'cluster', // Enables clustering
        env: {
          NODE_ENV: 'production',
        },
        watch: false,
        log_date_format: 'YYYY-MM-DD HH:mm Z',
      }
    ]
  };
  