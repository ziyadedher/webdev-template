/* eslint-disable node/no-process-env -- centralized environment variable extraction. */

const getNodeEnv = (): string => process.env.NODE_ENV;

// eslint-disable-next-line import/prefer-default-export -- only have one for now.
export { getNodeEnv };
