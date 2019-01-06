export default (req, res) => {
  res.json({
    name: 'HealthCheckService',
    status: 'Everything is ok'
  });
};
