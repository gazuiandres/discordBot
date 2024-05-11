module.exports = {
  apps: [{
    name: 'discordBot', 
    script: 'npm',
    args: 'run start',
    instances: 1,
    exec_mode: 'fork',
    merge_logs: true
  }]
};
  