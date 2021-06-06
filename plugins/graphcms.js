import { GraphQLClient } from 'graphql-request';

const graphcmsClient = new GraphQLClient(
  'https://api-us-east-1.graphcms.com/v2/ckphvtlf1ovpw01xpcovg1hrj/master'
);

export default (_, inject) => {
  inject('graphcms', graphcmsClient);
};
