
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.7.1
 * Query Engine version: 0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5
 */
Prisma.prismaVersion = {
  client: "5.7.1",
  engine: "0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.Audit_log_entriesScalarFieldEnum = {
  instance_id: 'instance_id',
  id: 'id',
  payload: 'payload',
  created_at: 'created_at',
  ip_address: 'ip_address'
};

exports.Prisma.Flow_stateScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  auth_code: 'auth_code',
  code_challenge_method: 'code_challenge_method',
  code_challenge: 'code_challenge',
  provider_type: 'provider_type',
  provider_access_token: 'provider_access_token',
  provider_refresh_token: 'provider_refresh_token',
  created_at: 'created_at',
  updated_at: 'updated_at',
  authentication_method: 'authentication_method'
};

exports.Prisma.IdentitiesScalarFieldEnum = {
  provider_id: 'provider_id',
  user_id: 'user_id',
  identity_data: 'identity_data',
  provider: 'provider',
  last_sign_in_at: 'last_sign_in_at',
  created_at: 'created_at',
  updated_at: 'updated_at',
  email: 'email',
  id: 'id'
};

exports.Prisma.InstancesScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  raw_base_config: 'raw_base_config',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Mfa_amr_claimsScalarFieldEnum = {
  session_id: 'session_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  authentication_method: 'authentication_method',
  id: 'id'
};

exports.Prisma.Mfa_challengesScalarFieldEnum = {
  id: 'id',
  factor_id: 'factor_id',
  created_at: 'created_at',
  verified_at: 'verified_at',
  ip_address: 'ip_address'
};

exports.Prisma.Mfa_factorsScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  friendly_name: 'friendly_name',
  factor_type: 'factor_type',
  status: 'status',
  created_at: 'created_at',
  updated_at: 'updated_at',
  secret: 'secret'
};

exports.Prisma.Refresh_tokensScalarFieldEnum = {
  instance_id: 'instance_id',
  id: 'id',
  token: 'token',
  user_id: 'user_id',
  revoked: 'revoked',
  created_at: 'created_at',
  updated_at: 'updated_at',
  parent: 'parent',
  session_id: 'session_id'
};

exports.Prisma.Saml_providersScalarFieldEnum = {
  id: 'id',
  sso_provider_id: 'sso_provider_id',
  entity_id: 'entity_id',
  metadata_xml: 'metadata_xml',
  metadata_url: 'metadata_url',
  attribute_mapping: 'attribute_mapping',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Saml_relay_statesScalarFieldEnum = {
  id: 'id',
  sso_provider_id: 'sso_provider_id',
  request_id: 'request_id',
  for_email: 'for_email',
  redirect_to: 'redirect_to',
  from_ip_address: 'from_ip_address',
  created_at: 'created_at',
  updated_at: 'updated_at',
  flow_state_id: 'flow_state_id'
};

exports.Prisma.Schema_migrationsScalarFieldEnum = {
  version: 'version'
};

exports.Prisma.SessionsScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  factor_id: 'factor_id',
  aal: 'aal',
  not_after: 'not_after',
  refreshed_at: 'refreshed_at',
  user_agent: 'user_agent',
  ip: 'ip',
  tag: 'tag'
};

exports.Prisma.Sso_domainsScalarFieldEnum = {
  id: 'id',
  sso_provider_id: 'sso_provider_id',
  domain: 'domain',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Sso_providersScalarFieldEnum = {
  id: 'id',
  resource_id: 'resource_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.UsersScalarFieldEnum = {
  instance_id: 'instance_id',
  id: 'id',
  aud: 'aud',
  role: 'role',
  email: 'email',
  encrypted_password: 'encrypted_password',
  email_confirmed_at: 'email_confirmed_at',
  invited_at: 'invited_at',
  confirmation_token: 'confirmation_token',
  confirmation_sent_at: 'confirmation_sent_at',
  recovery_token: 'recovery_token',
  recovery_sent_at: 'recovery_sent_at',
  email_change_token_new: 'email_change_token_new',
  email_change: 'email_change',
  email_change_sent_at: 'email_change_sent_at',
  last_sign_in_at: 'last_sign_in_at',
  raw_app_meta_data: 'raw_app_meta_data',
  raw_user_meta_data: 'raw_user_meta_data',
  is_super_admin: 'is_super_admin',
  created_at: 'created_at',
  updated_at: 'updated_at',
  phone: 'phone',
  phone_confirmed_at: 'phone_confirmed_at',
  phone_change: 'phone_change',
  phone_change_token: 'phone_change_token',
  phone_change_sent_at: 'phone_change_sent_at',
  confirmed_at: 'confirmed_at',
  email_change_token_current: 'email_change_token_current',
  email_change_confirm_status: 'email_change_confirm_status',
  banned_until: 'banned_until',
  reauthentication_token: 'reauthentication_token',
  reauthentication_sent_at: 'reauthentication_sent_at',
  is_sso_user: 'is_sso_user',
  deleted_at: 'deleted_at'
};

exports.Prisma.Account_ai_chatScalarFieldEnum = {
  account_id: 'account_id',
  plan_id: 'plan_id',
  created_at: 'created_at'
};

exports.Prisma.Account_blog_post_instancesScalarFieldEnum = {
  blog_post_id: 'blog_post_id',
  account_id: 'account_id',
  plan_id: 'plan_id',
  post_content: 'post_content',
  created_at: 'created_at'
};

exports.Prisma.Account_blog_postsScalarFieldEnum = {
  account_id: 'account_id',
  plan_id: 'plan_id',
  created_at: 'created_at'
};

exports.Prisma.Account_plansScalarFieldEnum = {
  account_id: 'account_id',
  plan_id: 'plan_id',
  created_at: 'created_at'
};

exports.Prisma.Account_review_generatorScalarFieldEnum = {
  account_id: 'account_id',
  plan_id: 'plan_id',
  created_at: 'created_at'
};

exports.Prisma.Account_social_mediaScalarFieldEnum = {
  account_id: 'account_id',
  plan_id: 'plan_id',
  created_at: 'created_at'
};

exports.Prisma.AccountsScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  stage: 'stage',
  active: 'active',
  customer_record_id: 'customer_record_id'
};

exports.Prisma.CommunicationsScalarFieldEnum = {
  id: 'id',
  customer_record_id: 'customer_record_id',
  type: 'type',
  created_at: 'created_at',
  marketing_campaign_id: 'marketing_campaign_id'
};

exports.Prisma.Communications_emailsScalarFieldEnum = {
  id: 'id',
  communications_id: 'communications_id',
  created_at: 'created_at',
  email_id: 'email_id'
};

exports.Prisma.Communications_emails_status_updatesScalarFieldEnum = {
  id: 'id',
  communications_emails: 'communications_emails',
  status: 'status',
  created_at: 'created_at'
};

exports.Prisma.Communications_textsScalarFieldEnum = {
  id: 'id',
  communications_id: 'communications_id',
  status: 'status',
  created_at: 'created_at'
};

exports.Prisma.Contact_info_emailsScalarFieldEnum = {
  id: 'id',
  contact_id: 'contact_id',
  value: 'value',
  priority: 'priority',
  created_at: 'created_at',
  email_id: 'email_id'
};

exports.Prisma.Contact_info_phonesScalarFieldEnum = {
  id: 'id',
  contact_id: 'contact_id',
  type: 'type',
  value: 'value',
  priority: 'priority',
  created_at: 'created_at'
};

exports.Prisma.ContactsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  position: 'position',
  priority: 'priority',
  created_at: 'created_at',
  customer_record_id: 'customer_record_id'
};

exports.Prisma.Customer_recordsScalarFieldEnum = {
  id: 'id',
  business_name: 'business_name',
  active: 'active',
  stage: 'stage',
  created_at: 'created_at',
  business_owner_name: 'business_owner_name'
};

exports.Prisma.Email_templatesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  category: 'category',
  created_at: 'created_at'
};

exports.Prisma.LeadsScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  stage: 'stage',
  active: 'active',
  customer_record_id: 'customer_record_id'
};

exports.Prisma.Marketing_campaignsScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at'
};

exports.Prisma.NotesScalarFieldEnum = {
  id: 'id',
  author: 'author',
  note: 'note',
  created_at: 'created_at',
  customer_record_id: 'customer_record_id'
};

exports.Prisma.OpportunitiesScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  stage: 'stage',
  active: 'active',
  customer_record_id: 'customer_record_id'
};

exports.Prisma.PlansScalarFieldEnum = {
  id: 'id',
  plan_name: 'plan_name',
  created_at: 'created_at'
};

exports.Prisma.RepsScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  name: 'name',
  role: 'role',
  status: 'status'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.code_challenge_method = exports.$Enums.code_challenge_method = {
  s256: 's256',
  plain: 'plain'
};

exports.factor_type = exports.$Enums.factor_type = {
  totp: 'totp',
  webauthn: 'webauthn'
};

exports.factor_status = exports.$Enums.factor_status = {
  unverified: 'unverified',
  verified: 'verified'
};

exports.aal_level = exports.$Enums.aal_level = {
  aal1: 'aal1',
  aal2: 'aal2',
  aal3: 'aal3'
};

exports.Prisma.ModelName = {
  audit_log_entries: 'audit_log_entries',
  flow_state: 'flow_state',
  identities: 'identities',
  instances: 'instances',
  mfa_amr_claims: 'mfa_amr_claims',
  mfa_challenges: 'mfa_challenges',
  mfa_factors: 'mfa_factors',
  refresh_tokens: 'refresh_tokens',
  saml_providers: 'saml_providers',
  saml_relay_states: 'saml_relay_states',
  schema_migrations: 'schema_migrations',
  sessions: 'sessions',
  sso_domains: 'sso_domains',
  sso_providers: 'sso_providers',
  users: 'users',
  account_ai_chat: 'account_ai_chat',
  account_blog_post_instances: 'account_blog_post_instances',
  account_blog_posts: 'account_blog_posts',
  account_plans: 'account_plans',
  account_review_generator: 'account_review_generator',
  account_social_media: 'account_social_media',
  accounts: 'accounts',
  communications: 'communications',
  communications_emails: 'communications_emails',
  communications_emails_status_updates: 'communications_emails_status_updates',
  communications_texts: 'communications_texts',
  contact_info_emails: 'contact_info_emails',
  contact_info_phones: 'contact_info_phones',
  contacts: 'contacts',
  customer_records: 'customer_records',
  email_templates: 'email_templates',
  leads: 'leads',
  marketing_campaigns: 'marketing_campaigns',
  notes: 'notes',
  opportunities: 'opportunities',
  plans: 'plans',
  reps: 'reps'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://github.com/prisma/prisma/issues`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
