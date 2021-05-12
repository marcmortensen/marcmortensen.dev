export default function ({ $gtm, $config, $cookies }) {
  if ($cookies.isEnabled('ga')) {
    $gtm.init($config.gtm.id);
  }
}
