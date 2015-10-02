require LWP::UserAgent;

my $ua   = LWP::UserAgent->new;
my $data = {  'key-data': {    'account-id': '123456789001',    'allowed-domains': [      'http://www.abc.com',      'https://www.abc.com',      'http://www.xyz.com',      'https://www.xyz.com'    ]  }};

$ua->default_header("Authorization" => "Bearer {token}");
$ua->default_header("Content-Type" => "application/json");

my $response = $ua->post("https://policy.api.brightcove.com/v1/accounts/20318290001/policy_keys", Content => $data);

print $response->as_string;
