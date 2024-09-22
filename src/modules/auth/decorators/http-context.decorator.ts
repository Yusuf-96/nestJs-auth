import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { appConfig } from '../../../config/app.config';
import { GqlExecutionContext } from '@nestjs/graphql';
import { HttpContext } from '../type/http-context';

function getRequestIp(request: any) {
  //Replace ipv6 prefix for ipv4 address
  const hostIp = request.ip?.replace('::ffff:', '');
  const xForwardedFor = request.headers['x-forwarded-for']?.replace(
    '::ffff:',
    '',
  );

  // Get real IP by trusting forwarded IP headers, but only from localhost proxies
  const trustProxy = appConfig.trustProxy || hostIp === '127.0.0.1';
  const realIp = trustProxy && !!xForwardedFor ? xForwardedFor : hostIp;

  return realIp;
}

export const CurrentHttpContext = createParamDecorator(
  (data: unknown, context: ExecutionContext): HttpContext => {
    const ctx = GqlExecutionContext.create(context);

    const request = ctx.getContext().req;
    const ipAddress = getRequestIp(request);
    // const user = request.user;
    const userAgent = request.headers['user-agent'];

    return {
      ipAddress,
      //   user,
      userAgent,
    };
  },
);
