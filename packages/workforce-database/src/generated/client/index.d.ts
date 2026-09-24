
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model WorkforceUser
 * 
 */
export type WorkforceUser = $Result.DefaultSelection<Prisma.$WorkforceUserPayload>
/**
 * Model WorkforceTeam
 * 
 */
export type WorkforceTeam = $Result.DefaultSelection<Prisma.$WorkforceTeamPayload>
/**
 * Model WorkforceProfile
 * 
 */
export type WorkforceProfile = $Result.DefaultSelection<Prisma.$WorkforceProfilePayload>
/**
 * Model WorkforceTeamMember
 * 
 */
export type WorkforceTeamMember = $Result.DefaultSelection<Prisma.$WorkforceTeamMemberPayload>
/**
 * Model WorkforceDepartment
 * 
 */
export type WorkforceDepartment = $Result.DefaultSelection<Prisma.$WorkforceDepartmentPayload>
/**
 * Model WorkforceEmployee
 * 
 */
export type WorkforceEmployee = $Result.DefaultSelection<Prisma.$WorkforceEmployeePayload>
/**
 * Model WorkforceTask
 * 
 */
export type WorkforceTask = $Result.DefaultSelection<Prisma.$WorkforceTaskPayload>
/**
 * Model WorkforceInvitation
 * 
 */
export type WorkforceInvitation = $Result.DefaultSelection<Prisma.$WorkforceInvitationPayload>
/**
 * Model WorkforceNotification
 * 
 */
export type WorkforceNotification = $Result.DefaultSelection<Prisma.$WorkforceNotificationPayload>
/**
 * Model WorkforceCustomRole
 * 
 */
export type WorkforceCustomRole = $Result.DefaultSelection<Prisma.$WorkforceCustomRolePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const WorkforceEmployeeStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  ON_LEAVE: 'ON_LEAVE',
  TERMINATED: 'TERMINATED'
};

export type WorkforceEmployeeStatus = (typeof WorkforceEmployeeStatus)[keyof typeof WorkforceEmployeeStatus]


export const WorkforceTaskStatus: {
  TODO: 'TODO',
  IN_PROGRESS: 'IN_PROGRESS',
  REVIEW: 'REVIEW',
  COMPLETED: 'COMPLETED'
};

export type WorkforceTaskStatus = (typeof WorkforceTaskStatus)[keyof typeof WorkforceTaskStatus]


export const WorkforceTaskPriority: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  URGENT: 'URGENT'
};

export type WorkforceTaskPriority = (typeof WorkforceTaskPriority)[keyof typeof WorkforceTaskPriority]

}

export type WorkforceEmployeeStatus = $Enums.WorkforceEmployeeStatus

export const WorkforceEmployeeStatus: typeof $Enums.WorkforceEmployeeStatus

export type WorkforceTaskStatus = $Enums.WorkforceTaskStatus

export const WorkforceTaskStatus: typeof $Enums.WorkforceTaskStatus

export type WorkforceTaskPriority = $Enums.WorkforceTaskPriority

export const WorkforceTaskPriority: typeof $Enums.WorkforceTaskPriority

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more WorkforceUsers
 * const workforceUsers = await prisma.workforceUser.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more WorkforceUsers
   * const workforceUsers = await prisma.workforceUser.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.workforceUser`: Exposes CRUD operations for the **WorkforceUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkforceUsers
    * const workforceUsers = await prisma.workforceUser.findMany()
    * ```
    */
  get workforceUser(): Prisma.WorkforceUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workforceTeam`: Exposes CRUD operations for the **WorkforceTeam** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkforceTeams
    * const workforceTeams = await prisma.workforceTeam.findMany()
    * ```
    */
  get workforceTeam(): Prisma.WorkforceTeamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workforceProfile`: Exposes CRUD operations for the **WorkforceProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkforceProfiles
    * const workforceProfiles = await prisma.workforceProfile.findMany()
    * ```
    */
  get workforceProfile(): Prisma.WorkforceProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workforceTeamMember`: Exposes CRUD operations for the **WorkforceTeamMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkforceTeamMembers
    * const workforceTeamMembers = await prisma.workforceTeamMember.findMany()
    * ```
    */
  get workforceTeamMember(): Prisma.WorkforceTeamMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workforceDepartment`: Exposes CRUD operations for the **WorkforceDepartment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkforceDepartments
    * const workforceDepartments = await prisma.workforceDepartment.findMany()
    * ```
    */
  get workforceDepartment(): Prisma.WorkforceDepartmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workforceEmployee`: Exposes CRUD operations for the **WorkforceEmployee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkforceEmployees
    * const workforceEmployees = await prisma.workforceEmployee.findMany()
    * ```
    */
  get workforceEmployee(): Prisma.WorkforceEmployeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workforceTask`: Exposes CRUD operations for the **WorkforceTask** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkforceTasks
    * const workforceTasks = await prisma.workforceTask.findMany()
    * ```
    */
  get workforceTask(): Prisma.WorkforceTaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workforceInvitation`: Exposes CRUD operations for the **WorkforceInvitation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkforceInvitations
    * const workforceInvitations = await prisma.workforceInvitation.findMany()
    * ```
    */
  get workforceInvitation(): Prisma.WorkforceInvitationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workforceNotification`: Exposes CRUD operations for the **WorkforceNotification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkforceNotifications
    * const workforceNotifications = await prisma.workforceNotification.findMany()
    * ```
    */
  get workforceNotification(): Prisma.WorkforceNotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workforceCustomRole`: Exposes CRUD operations for the **WorkforceCustomRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkforceCustomRoles
    * const workforceCustomRoles = await prisma.workforceCustomRole.findMany()
    * ```
    */
  get workforceCustomRole(): Prisma.WorkforceCustomRoleDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    WorkforceUser: 'WorkforceUser',
    WorkforceTeam: 'WorkforceTeam',
    WorkforceProfile: 'WorkforceProfile',
    WorkforceTeamMember: 'WorkforceTeamMember',
    WorkforceDepartment: 'WorkforceDepartment',
    WorkforceEmployee: 'WorkforceEmployee',
    WorkforceTask: 'WorkforceTask',
    WorkforceInvitation: 'WorkforceInvitation',
    WorkforceNotification: 'WorkforceNotification',
    WorkforceCustomRole: 'WorkforceCustomRole'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "workforceUser" | "workforceTeam" | "workforceProfile" | "workforceTeamMember" | "workforceDepartment" | "workforceEmployee" | "workforceTask" | "workforceInvitation" | "workforceNotification" | "workforceCustomRole"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      WorkforceUser: {
        payload: Prisma.$WorkforceUserPayload<ExtArgs>
        fields: Prisma.WorkforceUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkforceUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkforceUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceUserPayload>
          }
          findFirst: {
            args: Prisma.WorkforceUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkforceUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceUserPayload>
          }
          findMany: {
            args: Prisma.WorkforceUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceUserPayload>[]
          }
          create: {
            args: Prisma.WorkforceUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceUserPayload>
          }
          createMany: {
            args: Prisma.WorkforceUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkforceUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceUserPayload>[]
          }
          delete: {
            args: Prisma.WorkforceUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceUserPayload>
          }
          update: {
            args: Prisma.WorkforceUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceUserPayload>
          }
          deleteMany: {
            args: Prisma.WorkforceUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkforceUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkforceUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceUserPayload>[]
          }
          upsert: {
            args: Prisma.WorkforceUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceUserPayload>
          }
          aggregate: {
            args: Prisma.WorkforceUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkforceUser>
          }
          groupBy: {
            args: Prisma.WorkforceUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkforceUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkforceUserCountArgs<ExtArgs>
            result: $Utils.Optional<WorkforceUserCountAggregateOutputType> | number
          }
        }
      }
      WorkforceTeam: {
        payload: Prisma.$WorkforceTeamPayload<ExtArgs>
        fields: Prisma.WorkforceTeamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkforceTeamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceTeamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkforceTeamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceTeamPayload>
          }
          findFirst: {
            args: Prisma.WorkforceTeamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceTeamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkforceTeamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceTeamPayload>
          }
          findMany: {
            args: Prisma.WorkforceTeamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceTeamPayload>[]
          }
          create: {
            args: Prisma.WorkforceTeamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceTeamPayload>
          }
          createMany: {
            args: Prisma.WorkforceTeamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkforceTeamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceTeamPayload>[]
          }
          delete: {
            args: Prisma.WorkforceTeamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceTeamPayload>
          }
          update: {
            args: Prisma.WorkforceTeamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceTeamPayload>
          }
          deleteMany: {
            args: Prisma.WorkforceTeamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkforceTeamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkforceTeamUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceTeamPayload>[]
          }
          upsert: {
            args: Prisma.WorkforceTeamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceTeamPayload>
          }
          aggregate: {
            args: Prisma.WorkforceTeamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkforceTeam>
          }
          groupBy: {
            args: Prisma.WorkforceTeamGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkforceTeamGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkforceTeamCountArgs<ExtArgs>
            result: $Utils.Optional<WorkforceTeamCountAggregateOutputType> | number
          }
        }
      }
      WorkforceProfile: {
        payload: Prisma.$WorkforceProfilePayload<ExtArgs>
        fields: Prisma.WorkforceProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkforceProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkforceProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceProfilePayload>
          }
          findFirst: {
            args: Prisma.WorkforceProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkforceProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceProfilePayload>
          }
          findMany: {
            args: Prisma.WorkforceProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceProfilePayload>[]
          }
          create: {
            args: Prisma.WorkforceProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceProfilePayload>
          }
          createMany: {
            args: Prisma.WorkforceProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkforceProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceProfilePayload>[]
          }
          delete: {
            args: Prisma.WorkforceProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceProfilePayload>
          }
          update: {
            args: Prisma.WorkforceProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceProfilePayload>
          }
          deleteMany: {
            args: Prisma.WorkforceProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkforceProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkforceProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceProfilePayload>[]
          }
          upsert: {
            args: Prisma.WorkforceProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceProfilePayload>
          }
          aggregate: {
            args: Prisma.WorkforceProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkforceProfile>
          }
          groupBy: {
            args: Prisma.WorkforceProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkforceProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkforceProfileCountArgs<ExtArgs>
            result: $Utils.Optional<WorkforceProfileCountAggregateOutputType> | number
          }
        }
      }
      WorkforceTeamMember: {
        payload: Prisma.$WorkforceTeamMemberPayload<ExtArgs>
        fields: Prisma.WorkforceTeamMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkforceTeamMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceTeamMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkforceTeamMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceTeamMemberPayload>
          }
          findFirst: {
            args: Prisma.WorkforceTeamMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceTeamMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkforceTeamMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceTeamMemberPayload>
          }
          findMany: {
            args: Prisma.WorkforceTeamMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceTeamMemberPayload>[]
          }
          create: {
            args: Prisma.WorkforceTeamMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceTeamMemberPayload>
          }
          createMany: {
            args: Prisma.WorkforceTeamMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkforceTeamMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceTeamMemberPayload>[]
          }
          delete: {
            args: Prisma.WorkforceTeamMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceTeamMemberPayload>
          }
          update: {
            args: Prisma.WorkforceTeamMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceTeamMemberPayload>
          }
          deleteMany: {
            args: Prisma.WorkforceTeamMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkforceTeamMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkforceTeamMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceTeamMemberPayload>[]
          }
          upsert: {
            args: Prisma.WorkforceTeamMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceTeamMemberPayload>
          }
          aggregate: {
            args: Prisma.WorkforceTeamMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkforceTeamMember>
          }
          groupBy: {
            args: Prisma.WorkforceTeamMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkforceTeamMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkforceTeamMemberCountArgs<ExtArgs>
            result: $Utils.Optional<WorkforceTeamMemberCountAggregateOutputType> | number
          }
        }
      }
      WorkforceDepartment: {
        payload: Prisma.$WorkforceDepartmentPayload<ExtArgs>
        fields: Prisma.WorkforceDepartmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkforceDepartmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceDepartmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkforceDepartmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceDepartmentPayload>
          }
          findFirst: {
            args: Prisma.WorkforceDepartmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceDepartmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkforceDepartmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceDepartmentPayload>
          }
          findMany: {
            args: Prisma.WorkforceDepartmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceDepartmentPayload>[]
          }
          create: {
            args: Prisma.WorkforceDepartmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceDepartmentPayload>
          }
          createMany: {
            args: Prisma.WorkforceDepartmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkforceDepartmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceDepartmentPayload>[]
          }
          delete: {
            args: Prisma.WorkforceDepartmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceDepartmentPayload>
          }
          update: {
            args: Prisma.WorkforceDepartmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceDepartmentPayload>
          }
          deleteMany: {
            args: Prisma.WorkforceDepartmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkforceDepartmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkforceDepartmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceDepartmentPayload>[]
          }
          upsert: {
            args: Prisma.WorkforceDepartmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceDepartmentPayload>
          }
          aggregate: {
            args: Prisma.WorkforceDepartmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkforceDepartment>
          }
          groupBy: {
            args: Prisma.WorkforceDepartmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkforceDepartmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkforceDepartmentCountArgs<ExtArgs>
            result: $Utils.Optional<WorkforceDepartmentCountAggregateOutputType> | number
          }
        }
      }
      WorkforceEmployee: {
        payload: Prisma.$WorkforceEmployeePayload<ExtArgs>
        fields: Prisma.WorkforceEmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkforceEmployeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceEmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkforceEmployeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceEmployeePayload>
          }
          findFirst: {
            args: Prisma.WorkforceEmployeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceEmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkforceEmployeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceEmployeePayload>
          }
          findMany: {
            args: Prisma.WorkforceEmployeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceEmployeePayload>[]
          }
          create: {
            args: Prisma.WorkforceEmployeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceEmployeePayload>
          }
          createMany: {
            args: Prisma.WorkforceEmployeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkforceEmployeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceEmployeePayload>[]
          }
          delete: {
            args: Prisma.WorkforceEmployeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceEmployeePayload>
          }
          update: {
            args: Prisma.WorkforceEmployeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceEmployeePayload>
          }
          deleteMany: {
            args: Prisma.WorkforceEmployeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkforceEmployeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkforceEmployeeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceEmployeePayload>[]
          }
          upsert: {
            args: Prisma.WorkforceEmployeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceEmployeePayload>
          }
          aggregate: {
            args: Prisma.WorkforceEmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkforceEmployee>
          }
          groupBy: {
            args: Prisma.WorkforceEmployeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkforceEmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkforceEmployeeCountArgs<ExtArgs>
            result: $Utils.Optional<WorkforceEmployeeCountAggregateOutputType> | number
          }
        }
      }
      WorkforceTask: {
        payload: Prisma.$WorkforceTaskPayload<ExtArgs>
        fields: Prisma.WorkforceTaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkforceTaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceTaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkforceTaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceTaskPayload>
          }
          findFirst: {
            args: Prisma.WorkforceTaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceTaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkforceTaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceTaskPayload>
          }
          findMany: {
            args: Prisma.WorkforceTaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceTaskPayload>[]
          }
          create: {
            args: Prisma.WorkforceTaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceTaskPayload>
          }
          createMany: {
            args: Prisma.WorkforceTaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkforceTaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceTaskPayload>[]
          }
          delete: {
            args: Prisma.WorkforceTaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceTaskPayload>
          }
          update: {
            args: Prisma.WorkforceTaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceTaskPayload>
          }
          deleteMany: {
            args: Prisma.WorkforceTaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkforceTaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkforceTaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceTaskPayload>[]
          }
          upsert: {
            args: Prisma.WorkforceTaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceTaskPayload>
          }
          aggregate: {
            args: Prisma.WorkforceTaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkforceTask>
          }
          groupBy: {
            args: Prisma.WorkforceTaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkforceTaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkforceTaskCountArgs<ExtArgs>
            result: $Utils.Optional<WorkforceTaskCountAggregateOutputType> | number
          }
        }
      }
      WorkforceInvitation: {
        payload: Prisma.$WorkforceInvitationPayload<ExtArgs>
        fields: Prisma.WorkforceInvitationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkforceInvitationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceInvitationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkforceInvitationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceInvitationPayload>
          }
          findFirst: {
            args: Prisma.WorkforceInvitationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceInvitationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkforceInvitationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceInvitationPayload>
          }
          findMany: {
            args: Prisma.WorkforceInvitationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceInvitationPayload>[]
          }
          create: {
            args: Prisma.WorkforceInvitationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceInvitationPayload>
          }
          createMany: {
            args: Prisma.WorkforceInvitationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkforceInvitationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceInvitationPayload>[]
          }
          delete: {
            args: Prisma.WorkforceInvitationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceInvitationPayload>
          }
          update: {
            args: Prisma.WorkforceInvitationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceInvitationPayload>
          }
          deleteMany: {
            args: Prisma.WorkforceInvitationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkforceInvitationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkforceInvitationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceInvitationPayload>[]
          }
          upsert: {
            args: Prisma.WorkforceInvitationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceInvitationPayload>
          }
          aggregate: {
            args: Prisma.WorkforceInvitationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkforceInvitation>
          }
          groupBy: {
            args: Prisma.WorkforceInvitationGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkforceInvitationGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkforceInvitationCountArgs<ExtArgs>
            result: $Utils.Optional<WorkforceInvitationCountAggregateOutputType> | number
          }
        }
      }
      WorkforceNotification: {
        payload: Prisma.$WorkforceNotificationPayload<ExtArgs>
        fields: Prisma.WorkforceNotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkforceNotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceNotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkforceNotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceNotificationPayload>
          }
          findFirst: {
            args: Prisma.WorkforceNotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceNotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkforceNotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceNotificationPayload>
          }
          findMany: {
            args: Prisma.WorkforceNotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceNotificationPayload>[]
          }
          create: {
            args: Prisma.WorkforceNotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceNotificationPayload>
          }
          createMany: {
            args: Prisma.WorkforceNotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkforceNotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceNotificationPayload>[]
          }
          delete: {
            args: Prisma.WorkforceNotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceNotificationPayload>
          }
          update: {
            args: Prisma.WorkforceNotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceNotificationPayload>
          }
          deleteMany: {
            args: Prisma.WorkforceNotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkforceNotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkforceNotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceNotificationPayload>[]
          }
          upsert: {
            args: Prisma.WorkforceNotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceNotificationPayload>
          }
          aggregate: {
            args: Prisma.WorkforceNotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkforceNotification>
          }
          groupBy: {
            args: Prisma.WorkforceNotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkforceNotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkforceNotificationCountArgs<ExtArgs>
            result: $Utils.Optional<WorkforceNotificationCountAggregateOutputType> | number
          }
        }
      }
      WorkforceCustomRole: {
        payload: Prisma.$WorkforceCustomRolePayload<ExtArgs>
        fields: Prisma.WorkforceCustomRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkforceCustomRoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceCustomRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkforceCustomRoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceCustomRolePayload>
          }
          findFirst: {
            args: Prisma.WorkforceCustomRoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceCustomRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkforceCustomRoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceCustomRolePayload>
          }
          findMany: {
            args: Prisma.WorkforceCustomRoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceCustomRolePayload>[]
          }
          create: {
            args: Prisma.WorkforceCustomRoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceCustomRolePayload>
          }
          createMany: {
            args: Prisma.WorkforceCustomRoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkforceCustomRoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceCustomRolePayload>[]
          }
          delete: {
            args: Prisma.WorkforceCustomRoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceCustomRolePayload>
          }
          update: {
            args: Prisma.WorkforceCustomRoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceCustomRolePayload>
          }
          deleteMany: {
            args: Prisma.WorkforceCustomRoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkforceCustomRoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkforceCustomRoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceCustomRolePayload>[]
          }
          upsert: {
            args: Prisma.WorkforceCustomRoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceCustomRolePayload>
          }
          aggregate: {
            args: Prisma.WorkforceCustomRoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkforceCustomRole>
          }
          groupBy: {
            args: Prisma.WorkforceCustomRoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkforceCustomRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkforceCustomRoleCountArgs<ExtArgs>
            result: $Utils.Optional<WorkforceCustomRoleCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    workforceUser?: WorkforceUserOmit
    workforceTeam?: WorkforceTeamOmit
    workforceProfile?: WorkforceProfileOmit
    workforceTeamMember?: WorkforceTeamMemberOmit
    workforceDepartment?: WorkforceDepartmentOmit
    workforceEmployee?: WorkforceEmployeeOmit
    workforceTask?: WorkforceTaskOmit
    workforceInvitation?: WorkforceInvitationOmit
    workforceNotification?: WorkforceNotificationOmit
    workforceCustomRole?: WorkforceCustomRoleOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type WorkforceUserCountOutputType
   */

  export type WorkforceUserCountOutputType = {
    memberships: number
    ownedTeams: number
  }

  export type WorkforceUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memberships?: boolean | WorkforceUserCountOutputTypeCountMembershipsArgs
    ownedTeams?: boolean | WorkforceUserCountOutputTypeCountOwnedTeamsArgs
  }

  // Custom InputTypes
  /**
   * WorkforceUserCountOutputType without action
   */
  export type WorkforceUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceUserCountOutputType
     */
    select?: WorkforceUserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkforceUserCountOutputType without action
   */
  export type WorkforceUserCountOutputTypeCountMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkforceTeamMemberWhereInput
  }

  /**
   * WorkforceUserCountOutputType without action
   */
  export type WorkforceUserCountOutputTypeCountOwnedTeamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkforceTeamWhereInput
  }


  /**
   * Count Type WorkforceTeamCountOutputType
   */

  export type WorkforceTeamCountOutputType = {
    members: number
    profiles: number
    departments: number
    employees: number
    tasks: number
    invitations: number
    notifications: number
    roles: number
  }

  export type WorkforceTeamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | WorkforceTeamCountOutputTypeCountMembersArgs
    profiles?: boolean | WorkforceTeamCountOutputTypeCountProfilesArgs
    departments?: boolean | WorkforceTeamCountOutputTypeCountDepartmentsArgs
    employees?: boolean | WorkforceTeamCountOutputTypeCountEmployeesArgs
    tasks?: boolean | WorkforceTeamCountOutputTypeCountTasksArgs
    invitations?: boolean | WorkforceTeamCountOutputTypeCountInvitationsArgs
    notifications?: boolean | WorkforceTeamCountOutputTypeCountNotificationsArgs
    roles?: boolean | WorkforceTeamCountOutputTypeCountRolesArgs
  }

  // Custom InputTypes
  /**
   * WorkforceTeamCountOutputType without action
   */
  export type WorkforceTeamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceTeamCountOutputType
     */
    select?: WorkforceTeamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkforceTeamCountOutputType without action
   */
  export type WorkforceTeamCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkforceTeamMemberWhereInput
  }

  /**
   * WorkforceTeamCountOutputType without action
   */
  export type WorkforceTeamCountOutputTypeCountProfilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkforceProfileWhereInput
  }

  /**
   * WorkforceTeamCountOutputType without action
   */
  export type WorkforceTeamCountOutputTypeCountDepartmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkforceDepartmentWhereInput
  }

  /**
   * WorkforceTeamCountOutputType without action
   */
  export type WorkforceTeamCountOutputTypeCountEmployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkforceEmployeeWhereInput
  }

  /**
   * WorkforceTeamCountOutputType without action
   */
  export type WorkforceTeamCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkforceTaskWhereInput
  }

  /**
   * WorkforceTeamCountOutputType without action
   */
  export type WorkforceTeamCountOutputTypeCountInvitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkforceInvitationWhereInput
  }

  /**
   * WorkforceTeamCountOutputType without action
   */
  export type WorkforceTeamCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkforceNotificationWhereInput
  }

  /**
   * WorkforceTeamCountOutputType without action
   */
  export type WorkforceTeamCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkforceCustomRoleWhereInput
  }


  /**
   * Count Type WorkforceProfileCountOutputType
   */

  export type WorkforceProfileCountOutputType = {
    employees: number
    assignedTasks: number
    createdTasks: number
    notifications: number
    managedDepartments: number
    managedEmployees: number
    sentInvitations: number
  }

  export type WorkforceProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | WorkforceProfileCountOutputTypeCountEmployeesArgs
    assignedTasks?: boolean | WorkforceProfileCountOutputTypeCountAssignedTasksArgs
    createdTasks?: boolean | WorkforceProfileCountOutputTypeCountCreatedTasksArgs
    notifications?: boolean | WorkforceProfileCountOutputTypeCountNotificationsArgs
    managedDepartments?: boolean | WorkforceProfileCountOutputTypeCountManagedDepartmentsArgs
    managedEmployees?: boolean | WorkforceProfileCountOutputTypeCountManagedEmployeesArgs
    sentInvitations?: boolean | WorkforceProfileCountOutputTypeCountSentInvitationsArgs
  }

  // Custom InputTypes
  /**
   * WorkforceProfileCountOutputType without action
   */
  export type WorkforceProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceProfileCountOutputType
     */
    select?: WorkforceProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkforceProfileCountOutputType without action
   */
  export type WorkforceProfileCountOutputTypeCountEmployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkforceEmployeeWhereInput
  }

  /**
   * WorkforceProfileCountOutputType without action
   */
  export type WorkforceProfileCountOutputTypeCountAssignedTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkforceTaskWhereInput
  }

  /**
   * WorkforceProfileCountOutputType without action
   */
  export type WorkforceProfileCountOutputTypeCountCreatedTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkforceTaskWhereInput
  }

  /**
   * WorkforceProfileCountOutputType without action
   */
  export type WorkforceProfileCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkforceNotificationWhereInput
  }

  /**
   * WorkforceProfileCountOutputType without action
   */
  export type WorkforceProfileCountOutputTypeCountManagedDepartmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkforceDepartmentWhereInput
  }

  /**
   * WorkforceProfileCountOutputType without action
   */
  export type WorkforceProfileCountOutputTypeCountManagedEmployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkforceEmployeeWhereInput
  }

  /**
   * WorkforceProfileCountOutputType without action
   */
  export type WorkforceProfileCountOutputTypeCountSentInvitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkforceInvitationWhereInput
  }


  /**
   * Count Type WorkforceDepartmentCountOutputType
   */

  export type WorkforceDepartmentCountOutputType = {
    employees: number
    tasks: number
  }

  export type WorkforceDepartmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | WorkforceDepartmentCountOutputTypeCountEmployeesArgs
    tasks?: boolean | WorkforceDepartmentCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * WorkforceDepartmentCountOutputType without action
   */
  export type WorkforceDepartmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceDepartmentCountOutputType
     */
    select?: WorkforceDepartmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkforceDepartmentCountOutputType without action
   */
  export type WorkforceDepartmentCountOutputTypeCountEmployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkforceEmployeeWhereInput
  }

  /**
   * WorkforceDepartmentCountOutputType without action
   */
  export type WorkforceDepartmentCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkforceTaskWhereInput
  }


  /**
   * Models
   */

  /**
   * Model WorkforceUser
   */

  export type AggregateWorkforceUser = {
    _count: WorkforceUserCountAggregateOutputType | null
    _min: WorkforceUserMinAggregateOutputType | null
    _max: WorkforceUserMaxAggregateOutputType | null
  }

  export type WorkforceUserMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    profileId: string | null
    createdAt: Date | null
  }

  export type WorkforceUserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    profileId: string | null
    createdAt: Date | null
  }

  export type WorkforceUserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    profileId: number
    createdAt: number
    _all: number
  }


  export type WorkforceUserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    profileId?: true
    createdAt?: true
  }

  export type WorkforceUserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    profileId?: true
    createdAt?: true
  }

  export type WorkforceUserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    profileId?: true
    createdAt?: true
    _all?: true
  }

  export type WorkforceUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkforceUser to aggregate.
     */
    where?: WorkforceUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkforceUsers to fetch.
     */
    orderBy?: WorkforceUserOrderByWithRelationInput | WorkforceUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkforceUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkforceUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkforceUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkforceUsers
    **/
    _count?: true | WorkforceUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkforceUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkforceUserMaxAggregateInputType
  }

  export type GetWorkforceUserAggregateType<T extends WorkforceUserAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkforceUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkforceUser[P]>
      : GetScalarType<T[P], AggregateWorkforceUser[P]>
  }




  export type WorkforceUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkforceUserWhereInput
    orderBy?: WorkforceUserOrderByWithAggregationInput | WorkforceUserOrderByWithAggregationInput[]
    by: WorkforceUserScalarFieldEnum[] | WorkforceUserScalarFieldEnum
    having?: WorkforceUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkforceUserCountAggregateInputType | true
    _min?: WorkforceUserMinAggregateInputType
    _max?: WorkforceUserMaxAggregateInputType
  }

  export type WorkforceUserGroupByOutputType = {
    id: string
    email: string
    passwordHash: string
    profileId: string | null
    createdAt: Date
    _count: WorkforceUserCountAggregateOutputType | null
    _min: WorkforceUserMinAggregateOutputType | null
    _max: WorkforceUserMaxAggregateOutputType | null
  }

  type GetWorkforceUserGroupByPayload<T extends WorkforceUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkforceUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkforceUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkforceUserGroupByOutputType[P]>
            : GetScalarType<T[P], WorkforceUserGroupByOutputType[P]>
        }
      >
    >


  export type WorkforceUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    profileId?: boolean
    createdAt?: boolean
    profile?: boolean | WorkforceUser$profileArgs<ExtArgs>
    memberships?: boolean | WorkforceUser$membershipsArgs<ExtArgs>
    ownedTeams?: boolean | WorkforceUser$ownedTeamsArgs<ExtArgs>
    _count?: boolean | WorkforceUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workforceUser"]>

  export type WorkforceUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    profileId?: boolean
    createdAt?: boolean
    profile?: boolean | WorkforceUser$profileArgs<ExtArgs>
  }, ExtArgs["result"]["workforceUser"]>

  export type WorkforceUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    profileId?: boolean
    createdAt?: boolean
    profile?: boolean | WorkforceUser$profileArgs<ExtArgs>
  }, ExtArgs["result"]["workforceUser"]>

  export type WorkforceUserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    profileId?: boolean
    createdAt?: boolean
  }

  export type WorkforceUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "profileId" | "createdAt", ExtArgs["result"]["workforceUser"]>
  export type WorkforceUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | WorkforceUser$profileArgs<ExtArgs>
    memberships?: boolean | WorkforceUser$membershipsArgs<ExtArgs>
    ownedTeams?: boolean | WorkforceUser$ownedTeamsArgs<ExtArgs>
    _count?: boolean | WorkforceUserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkforceUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | WorkforceUser$profileArgs<ExtArgs>
  }
  export type WorkforceUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | WorkforceUser$profileArgs<ExtArgs>
  }

  export type $WorkforceUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkforceUser"
    objects: {
      profile: Prisma.$WorkforceProfilePayload<ExtArgs> | null
      memberships: Prisma.$WorkforceTeamMemberPayload<ExtArgs>[]
      ownedTeams: Prisma.$WorkforceTeamPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string
      profileId: string | null
      createdAt: Date
    }, ExtArgs["result"]["workforceUser"]>
    composites: {}
  }

  type WorkforceUserGetPayload<S extends boolean | null | undefined | WorkforceUserDefaultArgs> = $Result.GetResult<Prisma.$WorkforceUserPayload, S>

  type WorkforceUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkforceUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkforceUserCountAggregateInputType | true
    }

  export interface WorkforceUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkforceUser'], meta: { name: 'WorkforceUser' } }
    /**
     * Find zero or one WorkforceUser that matches the filter.
     * @param {WorkforceUserFindUniqueArgs} args - Arguments to find a WorkforceUser
     * @example
     * // Get one WorkforceUser
     * const workforceUser = await prisma.workforceUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkforceUserFindUniqueArgs>(args: SelectSubset<T, WorkforceUserFindUniqueArgs<ExtArgs>>): Prisma__WorkforceUserClient<$Result.GetResult<Prisma.$WorkforceUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkforceUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkforceUserFindUniqueOrThrowArgs} args - Arguments to find a WorkforceUser
     * @example
     * // Get one WorkforceUser
     * const workforceUser = await prisma.workforceUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkforceUserFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkforceUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkforceUserClient<$Result.GetResult<Prisma.$WorkforceUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkforceUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceUserFindFirstArgs} args - Arguments to find a WorkforceUser
     * @example
     * // Get one WorkforceUser
     * const workforceUser = await prisma.workforceUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkforceUserFindFirstArgs>(args?: SelectSubset<T, WorkforceUserFindFirstArgs<ExtArgs>>): Prisma__WorkforceUserClient<$Result.GetResult<Prisma.$WorkforceUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkforceUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceUserFindFirstOrThrowArgs} args - Arguments to find a WorkforceUser
     * @example
     * // Get one WorkforceUser
     * const workforceUser = await prisma.workforceUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkforceUserFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkforceUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkforceUserClient<$Result.GetResult<Prisma.$WorkforceUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkforceUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkforceUsers
     * const workforceUsers = await prisma.workforceUser.findMany()
     * 
     * // Get first 10 WorkforceUsers
     * const workforceUsers = await prisma.workforceUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workforceUserWithIdOnly = await prisma.workforceUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkforceUserFindManyArgs>(args?: SelectSubset<T, WorkforceUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkforceUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkforceUser.
     * @param {WorkforceUserCreateArgs} args - Arguments to create a WorkforceUser.
     * @example
     * // Create one WorkforceUser
     * const WorkforceUser = await prisma.workforceUser.create({
     *   data: {
     *     // ... data to create a WorkforceUser
     *   }
     * })
     * 
     */
    create<T extends WorkforceUserCreateArgs>(args: SelectSubset<T, WorkforceUserCreateArgs<ExtArgs>>): Prisma__WorkforceUserClient<$Result.GetResult<Prisma.$WorkforceUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkforceUsers.
     * @param {WorkforceUserCreateManyArgs} args - Arguments to create many WorkforceUsers.
     * @example
     * // Create many WorkforceUsers
     * const workforceUser = await prisma.workforceUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkforceUserCreateManyArgs>(args?: SelectSubset<T, WorkforceUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkforceUsers and returns the data saved in the database.
     * @param {WorkforceUserCreateManyAndReturnArgs} args - Arguments to create many WorkforceUsers.
     * @example
     * // Create many WorkforceUsers
     * const workforceUser = await prisma.workforceUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkforceUsers and only return the `id`
     * const workforceUserWithIdOnly = await prisma.workforceUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkforceUserCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkforceUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkforceUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkforceUser.
     * @param {WorkforceUserDeleteArgs} args - Arguments to delete one WorkforceUser.
     * @example
     * // Delete one WorkforceUser
     * const WorkforceUser = await prisma.workforceUser.delete({
     *   where: {
     *     // ... filter to delete one WorkforceUser
     *   }
     * })
     * 
     */
    delete<T extends WorkforceUserDeleteArgs>(args: SelectSubset<T, WorkforceUserDeleteArgs<ExtArgs>>): Prisma__WorkforceUserClient<$Result.GetResult<Prisma.$WorkforceUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkforceUser.
     * @param {WorkforceUserUpdateArgs} args - Arguments to update one WorkforceUser.
     * @example
     * // Update one WorkforceUser
     * const workforceUser = await prisma.workforceUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkforceUserUpdateArgs>(args: SelectSubset<T, WorkforceUserUpdateArgs<ExtArgs>>): Prisma__WorkforceUserClient<$Result.GetResult<Prisma.$WorkforceUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkforceUsers.
     * @param {WorkforceUserDeleteManyArgs} args - Arguments to filter WorkforceUsers to delete.
     * @example
     * // Delete a few WorkforceUsers
     * const { count } = await prisma.workforceUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkforceUserDeleteManyArgs>(args?: SelectSubset<T, WorkforceUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkforceUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkforceUsers
     * const workforceUser = await prisma.workforceUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkforceUserUpdateManyArgs>(args: SelectSubset<T, WorkforceUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkforceUsers and returns the data updated in the database.
     * @param {WorkforceUserUpdateManyAndReturnArgs} args - Arguments to update many WorkforceUsers.
     * @example
     * // Update many WorkforceUsers
     * const workforceUser = await prisma.workforceUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkforceUsers and only return the `id`
     * const workforceUserWithIdOnly = await prisma.workforceUser.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkforceUserUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkforceUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkforceUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkforceUser.
     * @param {WorkforceUserUpsertArgs} args - Arguments to update or create a WorkforceUser.
     * @example
     * // Update or create a WorkforceUser
     * const workforceUser = await prisma.workforceUser.upsert({
     *   create: {
     *     // ... data to create a WorkforceUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkforceUser we want to update
     *   }
     * })
     */
    upsert<T extends WorkforceUserUpsertArgs>(args: SelectSubset<T, WorkforceUserUpsertArgs<ExtArgs>>): Prisma__WorkforceUserClient<$Result.GetResult<Prisma.$WorkforceUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkforceUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceUserCountArgs} args - Arguments to filter WorkforceUsers to count.
     * @example
     * // Count the number of WorkforceUsers
     * const count = await prisma.workforceUser.count({
     *   where: {
     *     // ... the filter for the WorkforceUsers we want to count
     *   }
     * })
    **/
    count<T extends WorkforceUserCountArgs>(
      args?: Subset<T, WorkforceUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkforceUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkforceUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkforceUserAggregateArgs>(args: Subset<T, WorkforceUserAggregateArgs>): Prisma.PrismaPromise<GetWorkforceUserAggregateType<T>>

    /**
     * Group by WorkforceUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkforceUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkforceUserGroupByArgs['orderBy'] }
        : { orderBy?: WorkforceUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkforceUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkforceUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkforceUser model
   */
  readonly fields: WorkforceUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkforceUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkforceUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends WorkforceUser$profileArgs<ExtArgs> = {}>(args?: Subset<T, WorkforceUser$profileArgs<ExtArgs>>): Prisma__WorkforceProfileClient<$Result.GetResult<Prisma.$WorkforceProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    memberships<T extends WorkforceUser$membershipsArgs<ExtArgs> = {}>(args?: Subset<T, WorkforceUser$membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkforceTeamMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ownedTeams<T extends WorkforceUser$ownedTeamsArgs<ExtArgs> = {}>(args?: Subset<T, WorkforceUser$ownedTeamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkforceTeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkforceUser model
   */
  interface WorkforceUserFieldRefs {
    readonly id: FieldRef<"WorkforceUser", 'String'>
    readonly email: FieldRef<"WorkforceUser", 'String'>
    readonly passwordHash: FieldRef<"WorkforceUser", 'String'>
    readonly profileId: FieldRef<"WorkforceUser", 'String'>
    readonly createdAt: FieldRef<"WorkforceUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkforceUser findUnique
   */
  export type WorkforceUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceUser
     */
    select?: WorkforceUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceUser
     */
    omit?: WorkforceUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceUserInclude<ExtArgs> | null
    /**
     * Filter, which WorkforceUser to fetch.
     */
    where: WorkforceUserWhereUniqueInput
  }

  /**
   * WorkforceUser findUniqueOrThrow
   */
  export type WorkforceUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceUser
     */
    select?: WorkforceUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceUser
     */
    omit?: WorkforceUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceUserInclude<ExtArgs> | null
    /**
     * Filter, which WorkforceUser to fetch.
     */
    where: WorkforceUserWhereUniqueInput
  }

  /**
   * WorkforceUser findFirst
   */
  export type WorkforceUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceUser
     */
    select?: WorkforceUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceUser
     */
    omit?: WorkforceUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceUserInclude<ExtArgs> | null
    /**
     * Filter, which WorkforceUser to fetch.
     */
    where?: WorkforceUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkforceUsers to fetch.
     */
    orderBy?: WorkforceUserOrderByWithRelationInput | WorkforceUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkforceUsers.
     */
    cursor?: WorkforceUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkforceUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkforceUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkforceUsers.
     */
    distinct?: WorkforceUserScalarFieldEnum | WorkforceUserScalarFieldEnum[]
  }

  /**
   * WorkforceUser findFirstOrThrow
   */
  export type WorkforceUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceUser
     */
    select?: WorkforceUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceUser
     */
    omit?: WorkforceUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceUserInclude<ExtArgs> | null
    /**
     * Filter, which WorkforceUser to fetch.
     */
    where?: WorkforceUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkforceUsers to fetch.
     */
    orderBy?: WorkforceUserOrderByWithRelationInput | WorkforceUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkforceUsers.
     */
    cursor?: WorkforceUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkforceUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkforceUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkforceUsers.
     */
    distinct?: WorkforceUserScalarFieldEnum | WorkforceUserScalarFieldEnum[]
  }

  /**
   * WorkforceUser findMany
   */
  export type WorkforceUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceUser
     */
    select?: WorkforceUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceUser
     */
    omit?: WorkforceUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceUserInclude<ExtArgs> | null
    /**
     * Filter, which WorkforceUsers to fetch.
     */
    where?: WorkforceUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkforceUsers to fetch.
     */
    orderBy?: WorkforceUserOrderByWithRelationInput | WorkforceUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkforceUsers.
     */
    cursor?: WorkforceUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkforceUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkforceUsers.
     */
    skip?: number
    distinct?: WorkforceUserScalarFieldEnum | WorkforceUserScalarFieldEnum[]
  }

  /**
   * WorkforceUser create
   */
  export type WorkforceUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceUser
     */
    select?: WorkforceUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceUser
     */
    omit?: WorkforceUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceUserInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkforceUser.
     */
    data: XOR<WorkforceUserCreateInput, WorkforceUserUncheckedCreateInput>
  }

  /**
   * WorkforceUser createMany
   */
  export type WorkforceUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkforceUsers.
     */
    data: WorkforceUserCreateManyInput | WorkforceUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkforceUser createManyAndReturn
   */
  export type WorkforceUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceUser
     */
    select?: WorkforceUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceUser
     */
    omit?: WorkforceUserOmit<ExtArgs> | null
    /**
     * The data used to create many WorkforceUsers.
     */
    data: WorkforceUserCreateManyInput | WorkforceUserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceUserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkforceUser update
   */
  export type WorkforceUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceUser
     */
    select?: WorkforceUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceUser
     */
    omit?: WorkforceUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceUserInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkforceUser.
     */
    data: XOR<WorkforceUserUpdateInput, WorkforceUserUncheckedUpdateInput>
    /**
     * Choose, which WorkforceUser to update.
     */
    where: WorkforceUserWhereUniqueInput
  }

  /**
   * WorkforceUser updateMany
   */
  export type WorkforceUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkforceUsers.
     */
    data: XOR<WorkforceUserUpdateManyMutationInput, WorkforceUserUncheckedUpdateManyInput>
    /**
     * Filter which WorkforceUsers to update
     */
    where?: WorkforceUserWhereInput
    /**
     * Limit how many WorkforceUsers to update.
     */
    limit?: number
  }

  /**
   * WorkforceUser updateManyAndReturn
   */
  export type WorkforceUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceUser
     */
    select?: WorkforceUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceUser
     */
    omit?: WorkforceUserOmit<ExtArgs> | null
    /**
     * The data used to update WorkforceUsers.
     */
    data: XOR<WorkforceUserUpdateManyMutationInput, WorkforceUserUncheckedUpdateManyInput>
    /**
     * Filter which WorkforceUsers to update
     */
    where?: WorkforceUserWhereInput
    /**
     * Limit how many WorkforceUsers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceUserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkforceUser upsert
   */
  export type WorkforceUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceUser
     */
    select?: WorkforceUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceUser
     */
    omit?: WorkforceUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceUserInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkforceUser to update in case it exists.
     */
    where: WorkforceUserWhereUniqueInput
    /**
     * In case the WorkforceUser found by the `where` argument doesn't exist, create a new WorkforceUser with this data.
     */
    create: XOR<WorkforceUserCreateInput, WorkforceUserUncheckedCreateInput>
    /**
     * In case the WorkforceUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkforceUserUpdateInput, WorkforceUserUncheckedUpdateInput>
  }

  /**
   * WorkforceUser delete
   */
  export type WorkforceUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceUser
     */
    select?: WorkforceUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceUser
     */
    omit?: WorkforceUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceUserInclude<ExtArgs> | null
    /**
     * Filter which WorkforceUser to delete.
     */
    where: WorkforceUserWhereUniqueInput
  }

  /**
   * WorkforceUser deleteMany
   */
  export type WorkforceUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkforceUsers to delete
     */
    where?: WorkforceUserWhereInput
    /**
     * Limit how many WorkforceUsers to delete.
     */
    limit?: number
  }

  /**
   * WorkforceUser.profile
   */
  export type WorkforceUser$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceProfile
     */
    select?: WorkforceProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceProfile
     */
    omit?: WorkforceProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceProfileInclude<ExtArgs> | null
    where?: WorkforceProfileWhereInput
  }

  /**
   * WorkforceUser.memberships
   */
  export type WorkforceUser$membershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceTeamMember
     */
    select?: WorkforceTeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceTeamMember
     */
    omit?: WorkforceTeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceTeamMemberInclude<ExtArgs> | null
    where?: WorkforceTeamMemberWhereInput
    orderBy?: WorkforceTeamMemberOrderByWithRelationInput | WorkforceTeamMemberOrderByWithRelationInput[]
    cursor?: WorkforceTeamMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkforceTeamMemberScalarFieldEnum | WorkforceTeamMemberScalarFieldEnum[]
  }

  /**
   * WorkforceUser.ownedTeams
   */
  export type WorkforceUser$ownedTeamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceTeam
     */
    select?: WorkforceTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceTeam
     */
    omit?: WorkforceTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceTeamInclude<ExtArgs> | null
    where?: WorkforceTeamWhereInput
    orderBy?: WorkforceTeamOrderByWithRelationInput | WorkforceTeamOrderByWithRelationInput[]
    cursor?: WorkforceTeamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkforceTeamScalarFieldEnum | WorkforceTeamScalarFieldEnum[]
  }

  /**
   * WorkforceUser without action
   */
  export type WorkforceUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceUser
     */
    select?: WorkforceUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceUser
     */
    omit?: WorkforceUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceUserInclude<ExtArgs> | null
  }


  /**
   * Model WorkforceTeam
   */

  export type AggregateWorkforceTeam = {
    _count: WorkforceTeamCountAggregateOutputType | null
    _min: WorkforceTeamMinAggregateOutputType | null
    _max: WorkforceTeamMaxAggregateOutputType | null
  }

  export type WorkforceTeamMinAggregateOutputType = {
    id: string | null
    name: string | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkforceTeamMaxAggregateOutputType = {
    id: string | null
    name: string | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkforceTeamCountAggregateOutputType = {
    id: number
    name: number
    ownerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkforceTeamMinAggregateInputType = {
    id?: true
    name?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkforceTeamMaxAggregateInputType = {
    id?: true
    name?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkforceTeamCountAggregateInputType = {
    id?: true
    name?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkforceTeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkforceTeam to aggregate.
     */
    where?: WorkforceTeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkforceTeams to fetch.
     */
    orderBy?: WorkforceTeamOrderByWithRelationInput | WorkforceTeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkforceTeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkforceTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkforceTeams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkforceTeams
    **/
    _count?: true | WorkforceTeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkforceTeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkforceTeamMaxAggregateInputType
  }

  export type GetWorkforceTeamAggregateType<T extends WorkforceTeamAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkforceTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkforceTeam[P]>
      : GetScalarType<T[P], AggregateWorkforceTeam[P]>
  }




  export type WorkforceTeamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkforceTeamWhereInput
    orderBy?: WorkforceTeamOrderByWithAggregationInput | WorkforceTeamOrderByWithAggregationInput[]
    by: WorkforceTeamScalarFieldEnum[] | WorkforceTeamScalarFieldEnum
    having?: WorkforceTeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkforceTeamCountAggregateInputType | true
    _min?: WorkforceTeamMinAggregateInputType
    _max?: WorkforceTeamMaxAggregateInputType
  }

  export type WorkforceTeamGroupByOutputType = {
    id: string
    name: string
    ownerId: string
    createdAt: Date
    updatedAt: Date
    _count: WorkforceTeamCountAggregateOutputType | null
    _min: WorkforceTeamMinAggregateOutputType | null
    _max: WorkforceTeamMaxAggregateOutputType | null
  }

  type GetWorkforceTeamGroupByPayload<T extends WorkforceTeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkforceTeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkforceTeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkforceTeamGroupByOutputType[P]>
            : GetScalarType<T[P], WorkforceTeamGroupByOutputType[P]>
        }
      >
    >


  export type WorkforceTeamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | WorkforceUserDefaultArgs<ExtArgs>
    members?: boolean | WorkforceTeam$membersArgs<ExtArgs>
    profiles?: boolean | WorkforceTeam$profilesArgs<ExtArgs>
    departments?: boolean | WorkforceTeam$departmentsArgs<ExtArgs>
    employees?: boolean | WorkforceTeam$employeesArgs<ExtArgs>
    tasks?: boolean | WorkforceTeam$tasksArgs<ExtArgs>
    invitations?: boolean | WorkforceTeam$invitationsArgs<ExtArgs>
    notifications?: boolean | WorkforceTeam$notificationsArgs<ExtArgs>
    roles?: boolean | WorkforceTeam$rolesArgs<ExtArgs>
    _count?: boolean | WorkforceTeamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workforceTeam"]>

  export type WorkforceTeamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | WorkforceUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workforceTeam"]>

  export type WorkforceTeamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | WorkforceUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workforceTeam"]>

  export type WorkforceTeamSelectScalar = {
    id?: boolean
    name?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkforceTeamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "ownerId" | "createdAt" | "updatedAt", ExtArgs["result"]["workforceTeam"]>
  export type WorkforceTeamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | WorkforceUserDefaultArgs<ExtArgs>
    members?: boolean | WorkforceTeam$membersArgs<ExtArgs>
    profiles?: boolean | WorkforceTeam$profilesArgs<ExtArgs>
    departments?: boolean | WorkforceTeam$departmentsArgs<ExtArgs>
    employees?: boolean | WorkforceTeam$employeesArgs<ExtArgs>
    tasks?: boolean | WorkforceTeam$tasksArgs<ExtArgs>
    invitations?: boolean | WorkforceTeam$invitationsArgs<ExtArgs>
    notifications?: boolean | WorkforceTeam$notificationsArgs<ExtArgs>
    roles?: boolean | WorkforceTeam$rolesArgs<ExtArgs>
    _count?: boolean | WorkforceTeamCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkforceTeamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | WorkforceUserDefaultArgs<ExtArgs>
  }
  export type WorkforceTeamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | WorkforceUserDefaultArgs<ExtArgs>
  }

  export type $WorkforceTeamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkforceTeam"
    objects: {
      owner: Prisma.$WorkforceUserPayload<ExtArgs>
      members: Prisma.$WorkforceTeamMemberPayload<ExtArgs>[]
      profiles: Prisma.$WorkforceProfilePayload<ExtArgs>[]
      departments: Prisma.$WorkforceDepartmentPayload<ExtArgs>[]
      employees: Prisma.$WorkforceEmployeePayload<ExtArgs>[]
      tasks: Prisma.$WorkforceTaskPayload<ExtArgs>[]
      invitations: Prisma.$WorkforceInvitationPayload<ExtArgs>[]
      notifications: Prisma.$WorkforceNotificationPayload<ExtArgs>[]
      roles: Prisma.$WorkforceCustomRolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      ownerId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workforceTeam"]>
    composites: {}
  }

  type WorkforceTeamGetPayload<S extends boolean | null | undefined | WorkforceTeamDefaultArgs> = $Result.GetResult<Prisma.$WorkforceTeamPayload, S>

  type WorkforceTeamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkforceTeamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkforceTeamCountAggregateInputType | true
    }

  export interface WorkforceTeamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkforceTeam'], meta: { name: 'WorkforceTeam' } }
    /**
     * Find zero or one WorkforceTeam that matches the filter.
     * @param {WorkforceTeamFindUniqueArgs} args - Arguments to find a WorkforceTeam
     * @example
     * // Get one WorkforceTeam
     * const workforceTeam = await prisma.workforceTeam.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkforceTeamFindUniqueArgs>(args: SelectSubset<T, WorkforceTeamFindUniqueArgs<ExtArgs>>): Prisma__WorkforceTeamClient<$Result.GetResult<Prisma.$WorkforceTeamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkforceTeam that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkforceTeamFindUniqueOrThrowArgs} args - Arguments to find a WorkforceTeam
     * @example
     * // Get one WorkforceTeam
     * const workforceTeam = await prisma.workforceTeam.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkforceTeamFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkforceTeamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkforceTeamClient<$Result.GetResult<Prisma.$WorkforceTeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkforceTeam that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceTeamFindFirstArgs} args - Arguments to find a WorkforceTeam
     * @example
     * // Get one WorkforceTeam
     * const workforceTeam = await prisma.workforceTeam.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkforceTeamFindFirstArgs>(args?: SelectSubset<T, WorkforceTeamFindFirstArgs<ExtArgs>>): Prisma__WorkforceTeamClient<$Result.GetResult<Prisma.$WorkforceTeamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkforceTeam that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceTeamFindFirstOrThrowArgs} args - Arguments to find a WorkforceTeam
     * @example
     * // Get one WorkforceTeam
     * const workforceTeam = await prisma.workforceTeam.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkforceTeamFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkforceTeamFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkforceTeamClient<$Result.GetResult<Prisma.$WorkforceTeamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkforceTeams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceTeamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkforceTeams
     * const workforceTeams = await prisma.workforceTeam.findMany()
     * 
     * // Get first 10 WorkforceTeams
     * const workforceTeams = await prisma.workforceTeam.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workforceTeamWithIdOnly = await prisma.workforceTeam.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkforceTeamFindManyArgs>(args?: SelectSubset<T, WorkforceTeamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkforceTeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkforceTeam.
     * @param {WorkforceTeamCreateArgs} args - Arguments to create a WorkforceTeam.
     * @example
     * // Create one WorkforceTeam
     * const WorkforceTeam = await prisma.workforceTeam.create({
     *   data: {
     *     // ... data to create a WorkforceTeam
     *   }
     * })
     * 
     */
    create<T extends WorkforceTeamCreateArgs>(args: SelectSubset<T, WorkforceTeamCreateArgs<ExtArgs>>): Prisma__WorkforceTeamClient<$Result.GetResult<Prisma.$WorkforceTeamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkforceTeams.
     * @param {WorkforceTeamCreateManyArgs} args - Arguments to create many WorkforceTeams.
     * @example
     * // Create many WorkforceTeams
     * const workforceTeam = await prisma.workforceTeam.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkforceTeamCreateManyArgs>(args?: SelectSubset<T, WorkforceTeamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkforceTeams and returns the data saved in the database.
     * @param {WorkforceTeamCreateManyAndReturnArgs} args - Arguments to create many WorkforceTeams.
     * @example
     * // Create many WorkforceTeams
     * const workforceTeam = await prisma.workforceTeam.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkforceTeams and only return the `id`
     * const workforceTeamWithIdOnly = await prisma.workforceTeam.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkforceTeamCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkforceTeamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkforceTeamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkforceTeam.
     * @param {WorkforceTeamDeleteArgs} args - Arguments to delete one WorkforceTeam.
     * @example
     * // Delete one WorkforceTeam
     * const WorkforceTeam = await prisma.workforceTeam.delete({
     *   where: {
     *     // ... filter to delete one WorkforceTeam
     *   }
     * })
     * 
     */
    delete<T extends WorkforceTeamDeleteArgs>(args: SelectSubset<T, WorkforceTeamDeleteArgs<ExtArgs>>): Prisma__WorkforceTeamClient<$Result.GetResult<Prisma.$WorkforceTeamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkforceTeam.
     * @param {WorkforceTeamUpdateArgs} args - Arguments to update one WorkforceTeam.
     * @example
     * // Update one WorkforceTeam
     * const workforceTeam = await prisma.workforceTeam.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkforceTeamUpdateArgs>(args: SelectSubset<T, WorkforceTeamUpdateArgs<ExtArgs>>): Prisma__WorkforceTeamClient<$Result.GetResult<Prisma.$WorkforceTeamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkforceTeams.
     * @param {WorkforceTeamDeleteManyArgs} args - Arguments to filter WorkforceTeams to delete.
     * @example
     * // Delete a few WorkforceTeams
     * const { count } = await prisma.workforceTeam.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkforceTeamDeleteManyArgs>(args?: SelectSubset<T, WorkforceTeamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkforceTeams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceTeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkforceTeams
     * const workforceTeam = await prisma.workforceTeam.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkforceTeamUpdateManyArgs>(args: SelectSubset<T, WorkforceTeamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkforceTeams and returns the data updated in the database.
     * @param {WorkforceTeamUpdateManyAndReturnArgs} args - Arguments to update many WorkforceTeams.
     * @example
     * // Update many WorkforceTeams
     * const workforceTeam = await prisma.workforceTeam.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkforceTeams and only return the `id`
     * const workforceTeamWithIdOnly = await prisma.workforceTeam.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkforceTeamUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkforceTeamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkforceTeamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkforceTeam.
     * @param {WorkforceTeamUpsertArgs} args - Arguments to update or create a WorkforceTeam.
     * @example
     * // Update or create a WorkforceTeam
     * const workforceTeam = await prisma.workforceTeam.upsert({
     *   create: {
     *     // ... data to create a WorkforceTeam
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkforceTeam we want to update
     *   }
     * })
     */
    upsert<T extends WorkforceTeamUpsertArgs>(args: SelectSubset<T, WorkforceTeamUpsertArgs<ExtArgs>>): Prisma__WorkforceTeamClient<$Result.GetResult<Prisma.$WorkforceTeamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkforceTeams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceTeamCountArgs} args - Arguments to filter WorkforceTeams to count.
     * @example
     * // Count the number of WorkforceTeams
     * const count = await prisma.workforceTeam.count({
     *   where: {
     *     // ... the filter for the WorkforceTeams we want to count
     *   }
     * })
    **/
    count<T extends WorkforceTeamCountArgs>(
      args?: Subset<T, WorkforceTeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkforceTeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkforceTeam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceTeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkforceTeamAggregateArgs>(args: Subset<T, WorkforceTeamAggregateArgs>): Prisma.PrismaPromise<GetWorkforceTeamAggregateType<T>>

    /**
     * Group by WorkforceTeam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceTeamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkforceTeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkforceTeamGroupByArgs['orderBy'] }
        : { orderBy?: WorkforceTeamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkforceTeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkforceTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkforceTeam model
   */
  readonly fields: WorkforceTeamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkforceTeam.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkforceTeamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends WorkforceUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkforceUserDefaultArgs<ExtArgs>>): Prisma__WorkforceUserClient<$Result.GetResult<Prisma.$WorkforceUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    members<T extends WorkforceTeam$membersArgs<ExtArgs> = {}>(args?: Subset<T, WorkforceTeam$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkforceTeamMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    profiles<T extends WorkforceTeam$profilesArgs<ExtArgs> = {}>(args?: Subset<T, WorkforceTeam$profilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkforceProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    departments<T extends WorkforceTeam$departmentsArgs<ExtArgs> = {}>(args?: Subset<T, WorkforceTeam$departmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkforceDepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    employees<T extends WorkforceTeam$employeesArgs<ExtArgs> = {}>(args?: Subset<T, WorkforceTeam$employeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkforceEmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tasks<T extends WorkforceTeam$tasksArgs<ExtArgs> = {}>(args?: Subset<T, WorkforceTeam$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkforceTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invitations<T extends WorkforceTeam$invitationsArgs<ExtArgs> = {}>(args?: Subset<T, WorkforceTeam$invitationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkforceInvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends WorkforceTeam$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, WorkforceTeam$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkforceNotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    roles<T extends WorkforceTeam$rolesArgs<ExtArgs> = {}>(args?: Subset<T, WorkforceTeam$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkforceCustomRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkforceTeam model
   */
  interface WorkforceTeamFieldRefs {
    readonly id: FieldRef<"WorkforceTeam", 'String'>
    readonly name: FieldRef<"WorkforceTeam", 'String'>
    readonly ownerId: FieldRef<"WorkforceTeam", 'String'>
    readonly createdAt: FieldRef<"WorkforceTeam", 'DateTime'>
    readonly updatedAt: FieldRef<"WorkforceTeam", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkforceTeam findUnique
   */
  export type WorkforceTeamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceTeam
     */
    select?: WorkforceTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceTeam
     */
    omit?: WorkforceTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceTeamInclude<ExtArgs> | null
    /**
     * Filter, which WorkforceTeam to fetch.
     */
    where: WorkforceTeamWhereUniqueInput
  }

  /**
   * WorkforceTeam findUniqueOrThrow
   */
  export type WorkforceTeamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceTeam
     */
    select?: WorkforceTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceTeam
     */
    omit?: WorkforceTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceTeamInclude<ExtArgs> | null
    /**
     * Filter, which WorkforceTeam to fetch.
     */
    where: WorkforceTeamWhereUniqueInput
  }

  /**
   * WorkforceTeam findFirst
   */
  export type WorkforceTeamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceTeam
     */
    select?: WorkforceTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceTeam
     */
    omit?: WorkforceTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceTeamInclude<ExtArgs> | null
    /**
     * Filter, which WorkforceTeam to fetch.
     */
    where?: WorkforceTeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkforceTeams to fetch.
     */
    orderBy?: WorkforceTeamOrderByWithRelationInput | WorkforceTeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkforceTeams.
     */
    cursor?: WorkforceTeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkforceTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkforceTeams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkforceTeams.
     */
    distinct?: WorkforceTeamScalarFieldEnum | WorkforceTeamScalarFieldEnum[]
  }

  /**
   * WorkforceTeam findFirstOrThrow
   */
  export type WorkforceTeamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceTeam
     */
    select?: WorkforceTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceTeam
     */
    omit?: WorkforceTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceTeamInclude<ExtArgs> | null
    /**
     * Filter, which WorkforceTeam to fetch.
     */
    where?: WorkforceTeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkforceTeams to fetch.
     */
    orderBy?: WorkforceTeamOrderByWithRelationInput | WorkforceTeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkforceTeams.
     */
    cursor?: WorkforceTeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkforceTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkforceTeams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkforceTeams.
     */
    distinct?: WorkforceTeamScalarFieldEnum | WorkforceTeamScalarFieldEnum[]
  }

  /**
   * WorkforceTeam findMany
   */
  export type WorkforceTeamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceTeam
     */
    select?: WorkforceTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceTeam
     */
    omit?: WorkforceTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceTeamInclude<ExtArgs> | null
    /**
     * Filter, which WorkforceTeams to fetch.
     */
    where?: WorkforceTeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkforceTeams to fetch.
     */
    orderBy?: WorkforceTeamOrderByWithRelationInput | WorkforceTeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkforceTeams.
     */
    cursor?: WorkforceTeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkforceTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkforceTeams.
     */
    skip?: number
    distinct?: WorkforceTeamScalarFieldEnum | WorkforceTeamScalarFieldEnum[]
  }

  /**
   * WorkforceTeam create
   */
  export type WorkforceTeamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceTeam
     */
    select?: WorkforceTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceTeam
     */
    omit?: WorkforceTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceTeamInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkforceTeam.
     */
    data: XOR<WorkforceTeamCreateInput, WorkforceTeamUncheckedCreateInput>
  }

  /**
   * WorkforceTeam createMany
   */
  export type WorkforceTeamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkforceTeams.
     */
    data: WorkforceTeamCreateManyInput | WorkforceTeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkforceTeam createManyAndReturn
   */
  export type WorkforceTeamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceTeam
     */
    select?: WorkforceTeamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceTeam
     */
    omit?: WorkforceTeamOmit<ExtArgs> | null
    /**
     * The data used to create many WorkforceTeams.
     */
    data: WorkforceTeamCreateManyInput | WorkforceTeamCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceTeamIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkforceTeam update
   */
  export type WorkforceTeamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceTeam
     */
    select?: WorkforceTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceTeam
     */
    omit?: WorkforceTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceTeamInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkforceTeam.
     */
    data: XOR<WorkforceTeamUpdateInput, WorkforceTeamUncheckedUpdateInput>
    /**
     * Choose, which WorkforceTeam to update.
     */
    where: WorkforceTeamWhereUniqueInput
  }

  /**
   * WorkforceTeam updateMany
   */
  export type WorkforceTeamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkforceTeams.
     */
    data: XOR<WorkforceTeamUpdateManyMutationInput, WorkforceTeamUncheckedUpdateManyInput>
    /**
     * Filter which WorkforceTeams to update
     */
    where?: WorkforceTeamWhereInput
    /**
     * Limit how many WorkforceTeams to update.
     */
    limit?: number
  }

  /**
   * WorkforceTeam updateManyAndReturn
   */
  export type WorkforceTeamUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceTeam
     */
    select?: WorkforceTeamSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceTeam
     */
    omit?: WorkforceTeamOmit<ExtArgs> | null
    /**
     * The data used to update WorkforceTeams.
     */
    data: XOR<WorkforceTeamUpdateManyMutationInput, WorkforceTeamUncheckedUpdateManyInput>
    /**
     * Filter which WorkforceTeams to update
     */
    where?: WorkforceTeamWhereInput
    /**
     * Limit how many WorkforceTeams to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceTeamIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkforceTeam upsert
   */
  export type WorkforceTeamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceTeam
     */
    select?: WorkforceTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceTeam
     */
    omit?: WorkforceTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceTeamInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkforceTeam to update in case it exists.
     */
    where: WorkforceTeamWhereUniqueInput
    /**
     * In case the WorkforceTeam found by the `where` argument doesn't exist, create a new WorkforceTeam with this data.
     */
    create: XOR<WorkforceTeamCreateInput, WorkforceTeamUncheckedCreateInput>
    /**
     * In case the WorkforceTeam was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkforceTeamUpdateInput, WorkforceTeamUncheckedUpdateInput>
  }

  /**
   * WorkforceTeam delete
   */
  export type WorkforceTeamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceTeam
     */
    select?: WorkforceTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceTeam
     */
    omit?: WorkforceTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceTeamInclude<ExtArgs> | null
    /**
     * Filter which WorkforceTeam to delete.
     */
    where: WorkforceTeamWhereUniqueInput
  }

  /**
   * WorkforceTeam deleteMany
   */
  export type WorkforceTeamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkforceTeams to delete
     */
    where?: WorkforceTeamWhereInput
    /**
     * Limit how many WorkforceTeams to delete.
     */
    limit?: number
  }

  /**
   * WorkforceTeam.members
   */
  export type WorkforceTeam$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceTeamMember
     */
    select?: WorkforceTeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceTeamMember
     */
    omit?: WorkforceTeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceTeamMemberInclude<ExtArgs> | null
    where?: WorkforceTeamMemberWhereInput
    orderBy?: WorkforceTeamMemberOrderByWithRelationInput | WorkforceTeamMemberOrderByWithRelationInput[]
    cursor?: WorkforceTeamMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkforceTeamMemberScalarFieldEnum | WorkforceTeamMemberScalarFieldEnum[]
  }

  /**
   * WorkforceTeam.profiles
   */
  export type WorkforceTeam$profilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceProfile
     */
    select?: WorkforceProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceProfile
     */
    omit?: WorkforceProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceProfileInclude<ExtArgs> | null
    where?: WorkforceProfileWhereInput
    orderBy?: WorkforceProfileOrderByWithRelationInput | WorkforceProfileOrderByWithRelationInput[]
    cursor?: WorkforceProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkforceProfileScalarFieldEnum | WorkforceProfileScalarFieldEnum[]
  }

  /**
   * WorkforceTeam.departments
   */
  export type WorkforceTeam$departmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceDepartment
     */
    select?: WorkforceDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceDepartment
     */
    omit?: WorkforceDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceDepartmentInclude<ExtArgs> | null
    where?: WorkforceDepartmentWhereInput
    orderBy?: WorkforceDepartmentOrderByWithRelationInput | WorkforceDepartmentOrderByWithRelationInput[]
    cursor?: WorkforceDepartmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkforceDepartmentScalarFieldEnum | WorkforceDepartmentScalarFieldEnum[]
  }

  /**
   * WorkforceTeam.employees
   */
  export type WorkforceTeam$employeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceEmployee
     */
    select?: WorkforceEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceEmployee
     */
    omit?: WorkforceEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceEmployeeInclude<ExtArgs> | null
    where?: WorkforceEmployeeWhereInput
    orderBy?: WorkforceEmployeeOrderByWithRelationInput | WorkforceEmployeeOrderByWithRelationInput[]
    cursor?: WorkforceEmployeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkforceEmployeeScalarFieldEnum | WorkforceEmployeeScalarFieldEnum[]
  }

  /**
   * WorkforceTeam.tasks
   */
  export type WorkforceTeam$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceTask
     */
    select?: WorkforceTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceTask
     */
    omit?: WorkforceTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceTaskInclude<ExtArgs> | null
    where?: WorkforceTaskWhereInput
    orderBy?: WorkforceTaskOrderByWithRelationInput | WorkforceTaskOrderByWithRelationInput[]
    cursor?: WorkforceTaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkforceTaskScalarFieldEnum | WorkforceTaskScalarFieldEnum[]
  }

  /**
   * WorkforceTeam.invitations
   */
  export type WorkforceTeam$invitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceInvitation
     */
    select?: WorkforceInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceInvitation
     */
    omit?: WorkforceInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceInvitationInclude<ExtArgs> | null
    where?: WorkforceInvitationWhereInput
    orderBy?: WorkforceInvitationOrderByWithRelationInput | WorkforceInvitationOrderByWithRelationInput[]
    cursor?: WorkforceInvitationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkforceInvitationScalarFieldEnum | WorkforceInvitationScalarFieldEnum[]
  }

  /**
   * WorkforceTeam.notifications
   */
  export type WorkforceTeam$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceNotification
     */
    select?: WorkforceNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceNotification
     */
    omit?: WorkforceNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceNotificationInclude<ExtArgs> | null
    where?: WorkforceNotificationWhereInput
    orderBy?: WorkforceNotificationOrderByWithRelationInput | WorkforceNotificationOrderByWithRelationInput[]
    cursor?: WorkforceNotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkforceNotificationScalarFieldEnum | WorkforceNotificationScalarFieldEnum[]
  }

  /**
   * WorkforceTeam.roles
   */
  export type WorkforceTeam$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceCustomRole
     */
    select?: WorkforceCustomRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceCustomRole
     */
    omit?: WorkforceCustomRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceCustomRoleInclude<ExtArgs> | null
    where?: WorkforceCustomRoleWhereInput
    orderBy?: WorkforceCustomRoleOrderByWithRelationInput | WorkforceCustomRoleOrderByWithRelationInput[]
    cursor?: WorkforceCustomRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkforceCustomRoleScalarFieldEnum | WorkforceCustomRoleScalarFieldEnum[]
  }

  /**
   * WorkforceTeam without action
   */
  export type WorkforceTeamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceTeam
     */
    select?: WorkforceTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceTeam
     */
    omit?: WorkforceTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceTeamInclude<ExtArgs> | null
  }


  /**
   * Model WorkforceProfile
   */

  export type AggregateWorkforceProfile = {
    _count: WorkforceProfileCountAggregateOutputType | null
    _min: WorkforceProfileMinAggregateOutputType | null
    _max: WorkforceProfileMaxAggregateOutputType | null
  }

  export type WorkforceProfileMinAggregateOutputType = {
    id: string | null
    email: string | null
    firstName: string | null
    lastName: string | null
    role: string | null
    teamId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkforceProfileMaxAggregateOutputType = {
    id: string | null
    email: string | null
    firstName: string | null
    lastName: string | null
    role: string | null
    teamId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkforceProfileCountAggregateOutputType = {
    id: number
    email: number
    firstName: number
    lastName: number
    role: number
    teamId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkforceProfileMinAggregateInputType = {
    id?: true
    email?: true
    firstName?: true
    lastName?: true
    role?: true
    teamId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkforceProfileMaxAggregateInputType = {
    id?: true
    email?: true
    firstName?: true
    lastName?: true
    role?: true
    teamId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkforceProfileCountAggregateInputType = {
    id?: true
    email?: true
    firstName?: true
    lastName?: true
    role?: true
    teamId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkforceProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkforceProfile to aggregate.
     */
    where?: WorkforceProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkforceProfiles to fetch.
     */
    orderBy?: WorkforceProfileOrderByWithRelationInput | WorkforceProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkforceProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkforceProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkforceProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkforceProfiles
    **/
    _count?: true | WorkforceProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkforceProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkforceProfileMaxAggregateInputType
  }

  export type GetWorkforceProfileAggregateType<T extends WorkforceProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkforceProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkforceProfile[P]>
      : GetScalarType<T[P], AggregateWorkforceProfile[P]>
  }




  export type WorkforceProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkforceProfileWhereInput
    orderBy?: WorkforceProfileOrderByWithAggregationInput | WorkforceProfileOrderByWithAggregationInput[]
    by: WorkforceProfileScalarFieldEnum[] | WorkforceProfileScalarFieldEnum
    having?: WorkforceProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkforceProfileCountAggregateInputType | true
    _min?: WorkforceProfileMinAggregateInputType
    _max?: WorkforceProfileMaxAggregateInputType
  }

  export type WorkforceProfileGroupByOutputType = {
    id: string
    email: string
    firstName: string | null
    lastName: string | null
    role: string
    teamId: string | null
    createdAt: Date
    updatedAt: Date
    _count: WorkforceProfileCountAggregateOutputType | null
    _min: WorkforceProfileMinAggregateOutputType | null
    _max: WorkforceProfileMaxAggregateOutputType | null
  }

  type GetWorkforceProfileGroupByPayload<T extends WorkforceProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkforceProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkforceProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkforceProfileGroupByOutputType[P]>
            : GetScalarType<T[P], WorkforceProfileGroupByOutputType[P]>
        }
      >
    >


  export type WorkforceProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    teamId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | WorkforceProfile$userArgs<ExtArgs>
    team?: boolean | WorkforceProfile$teamArgs<ExtArgs>
    employees?: boolean | WorkforceProfile$employeesArgs<ExtArgs>
    assignedTasks?: boolean | WorkforceProfile$assignedTasksArgs<ExtArgs>
    createdTasks?: boolean | WorkforceProfile$createdTasksArgs<ExtArgs>
    notifications?: boolean | WorkforceProfile$notificationsArgs<ExtArgs>
    managedDepartments?: boolean | WorkforceProfile$managedDepartmentsArgs<ExtArgs>
    managedEmployees?: boolean | WorkforceProfile$managedEmployeesArgs<ExtArgs>
    sentInvitations?: boolean | WorkforceProfile$sentInvitationsArgs<ExtArgs>
    _count?: boolean | WorkforceProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workforceProfile"]>

  export type WorkforceProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    teamId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    team?: boolean | WorkforceProfile$teamArgs<ExtArgs>
  }, ExtArgs["result"]["workforceProfile"]>

  export type WorkforceProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    teamId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    team?: boolean | WorkforceProfile$teamArgs<ExtArgs>
  }, ExtArgs["result"]["workforceProfile"]>

  export type WorkforceProfileSelectScalar = {
    id?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    teamId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkforceProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "firstName" | "lastName" | "role" | "teamId" | "createdAt" | "updatedAt", ExtArgs["result"]["workforceProfile"]>
  export type WorkforceProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | WorkforceProfile$userArgs<ExtArgs>
    team?: boolean | WorkforceProfile$teamArgs<ExtArgs>
    employees?: boolean | WorkforceProfile$employeesArgs<ExtArgs>
    assignedTasks?: boolean | WorkforceProfile$assignedTasksArgs<ExtArgs>
    createdTasks?: boolean | WorkforceProfile$createdTasksArgs<ExtArgs>
    notifications?: boolean | WorkforceProfile$notificationsArgs<ExtArgs>
    managedDepartments?: boolean | WorkforceProfile$managedDepartmentsArgs<ExtArgs>
    managedEmployees?: boolean | WorkforceProfile$managedEmployeesArgs<ExtArgs>
    sentInvitations?: boolean | WorkforceProfile$sentInvitationsArgs<ExtArgs>
    _count?: boolean | WorkforceProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkforceProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | WorkforceProfile$teamArgs<ExtArgs>
  }
  export type WorkforceProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | WorkforceProfile$teamArgs<ExtArgs>
  }

  export type $WorkforceProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkforceProfile"
    objects: {
      user: Prisma.$WorkforceUserPayload<ExtArgs> | null
      team: Prisma.$WorkforceTeamPayload<ExtArgs> | null
      employees: Prisma.$WorkforceEmployeePayload<ExtArgs>[]
      assignedTasks: Prisma.$WorkforceTaskPayload<ExtArgs>[]
      createdTasks: Prisma.$WorkforceTaskPayload<ExtArgs>[]
      notifications: Prisma.$WorkforceNotificationPayload<ExtArgs>[]
      managedDepartments: Prisma.$WorkforceDepartmentPayload<ExtArgs>[]
      managedEmployees: Prisma.$WorkforceEmployeePayload<ExtArgs>[]
      sentInvitations: Prisma.$WorkforceInvitationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      firstName: string | null
      lastName: string | null
      role: string
      teamId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workforceProfile"]>
    composites: {}
  }

  type WorkforceProfileGetPayload<S extends boolean | null | undefined | WorkforceProfileDefaultArgs> = $Result.GetResult<Prisma.$WorkforceProfilePayload, S>

  type WorkforceProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkforceProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkforceProfileCountAggregateInputType | true
    }

  export interface WorkforceProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkforceProfile'], meta: { name: 'WorkforceProfile' } }
    /**
     * Find zero or one WorkforceProfile that matches the filter.
     * @param {WorkforceProfileFindUniqueArgs} args - Arguments to find a WorkforceProfile
     * @example
     * // Get one WorkforceProfile
     * const workforceProfile = await prisma.workforceProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkforceProfileFindUniqueArgs>(args: SelectSubset<T, WorkforceProfileFindUniqueArgs<ExtArgs>>): Prisma__WorkforceProfileClient<$Result.GetResult<Prisma.$WorkforceProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkforceProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkforceProfileFindUniqueOrThrowArgs} args - Arguments to find a WorkforceProfile
     * @example
     * // Get one WorkforceProfile
     * const workforceProfile = await prisma.workforceProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkforceProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkforceProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkforceProfileClient<$Result.GetResult<Prisma.$WorkforceProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkforceProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceProfileFindFirstArgs} args - Arguments to find a WorkforceProfile
     * @example
     * // Get one WorkforceProfile
     * const workforceProfile = await prisma.workforceProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkforceProfileFindFirstArgs>(args?: SelectSubset<T, WorkforceProfileFindFirstArgs<ExtArgs>>): Prisma__WorkforceProfileClient<$Result.GetResult<Prisma.$WorkforceProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkforceProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceProfileFindFirstOrThrowArgs} args - Arguments to find a WorkforceProfile
     * @example
     * // Get one WorkforceProfile
     * const workforceProfile = await prisma.workforceProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkforceProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkforceProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkforceProfileClient<$Result.GetResult<Prisma.$WorkforceProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkforceProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkforceProfiles
     * const workforceProfiles = await prisma.workforceProfile.findMany()
     * 
     * // Get first 10 WorkforceProfiles
     * const workforceProfiles = await prisma.workforceProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workforceProfileWithIdOnly = await prisma.workforceProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkforceProfileFindManyArgs>(args?: SelectSubset<T, WorkforceProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkforceProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkforceProfile.
     * @param {WorkforceProfileCreateArgs} args - Arguments to create a WorkforceProfile.
     * @example
     * // Create one WorkforceProfile
     * const WorkforceProfile = await prisma.workforceProfile.create({
     *   data: {
     *     // ... data to create a WorkforceProfile
     *   }
     * })
     * 
     */
    create<T extends WorkforceProfileCreateArgs>(args: SelectSubset<T, WorkforceProfileCreateArgs<ExtArgs>>): Prisma__WorkforceProfileClient<$Result.GetResult<Prisma.$WorkforceProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkforceProfiles.
     * @param {WorkforceProfileCreateManyArgs} args - Arguments to create many WorkforceProfiles.
     * @example
     * // Create many WorkforceProfiles
     * const workforceProfile = await prisma.workforceProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkforceProfileCreateManyArgs>(args?: SelectSubset<T, WorkforceProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkforceProfiles and returns the data saved in the database.
     * @param {WorkforceProfileCreateManyAndReturnArgs} args - Arguments to create many WorkforceProfiles.
     * @example
     * // Create many WorkforceProfiles
     * const workforceProfile = await prisma.workforceProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkforceProfiles and only return the `id`
     * const workforceProfileWithIdOnly = await prisma.workforceProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkforceProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkforceProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkforceProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkforceProfile.
     * @param {WorkforceProfileDeleteArgs} args - Arguments to delete one WorkforceProfile.
     * @example
     * // Delete one WorkforceProfile
     * const WorkforceProfile = await prisma.workforceProfile.delete({
     *   where: {
     *     // ... filter to delete one WorkforceProfile
     *   }
     * })
     * 
     */
    delete<T extends WorkforceProfileDeleteArgs>(args: SelectSubset<T, WorkforceProfileDeleteArgs<ExtArgs>>): Prisma__WorkforceProfileClient<$Result.GetResult<Prisma.$WorkforceProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkforceProfile.
     * @param {WorkforceProfileUpdateArgs} args - Arguments to update one WorkforceProfile.
     * @example
     * // Update one WorkforceProfile
     * const workforceProfile = await prisma.workforceProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkforceProfileUpdateArgs>(args: SelectSubset<T, WorkforceProfileUpdateArgs<ExtArgs>>): Prisma__WorkforceProfileClient<$Result.GetResult<Prisma.$WorkforceProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkforceProfiles.
     * @param {WorkforceProfileDeleteManyArgs} args - Arguments to filter WorkforceProfiles to delete.
     * @example
     * // Delete a few WorkforceProfiles
     * const { count } = await prisma.workforceProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkforceProfileDeleteManyArgs>(args?: SelectSubset<T, WorkforceProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkforceProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkforceProfiles
     * const workforceProfile = await prisma.workforceProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkforceProfileUpdateManyArgs>(args: SelectSubset<T, WorkforceProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkforceProfiles and returns the data updated in the database.
     * @param {WorkforceProfileUpdateManyAndReturnArgs} args - Arguments to update many WorkforceProfiles.
     * @example
     * // Update many WorkforceProfiles
     * const workforceProfile = await prisma.workforceProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkforceProfiles and only return the `id`
     * const workforceProfileWithIdOnly = await prisma.workforceProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkforceProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkforceProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkforceProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkforceProfile.
     * @param {WorkforceProfileUpsertArgs} args - Arguments to update or create a WorkforceProfile.
     * @example
     * // Update or create a WorkforceProfile
     * const workforceProfile = await prisma.workforceProfile.upsert({
     *   create: {
     *     // ... data to create a WorkforceProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkforceProfile we want to update
     *   }
     * })
     */
    upsert<T extends WorkforceProfileUpsertArgs>(args: SelectSubset<T, WorkforceProfileUpsertArgs<ExtArgs>>): Prisma__WorkforceProfileClient<$Result.GetResult<Prisma.$WorkforceProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkforceProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceProfileCountArgs} args - Arguments to filter WorkforceProfiles to count.
     * @example
     * // Count the number of WorkforceProfiles
     * const count = await prisma.workforceProfile.count({
     *   where: {
     *     // ... the filter for the WorkforceProfiles we want to count
     *   }
     * })
    **/
    count<T extends WorkforceProfileCountArgs>(
      args?: Subset<T, WorkforceProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkforceProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkforceProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkforceProfileAggregateArgs>(args: Subset<T, WorkforceProfileAggregateArgs>): Prisma.PrismaPromise<GetWorkforceProfileAggregateType<T>>

    /**
     * Group by WorkforceProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkforceProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkforceProfileGroupByArgs['orderBy'] }
        : { orderBy?: WorkforceProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkforceProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkforceProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkforceProfile model
   */
  readonly fields: WorkforceProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkforceProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkforceProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends WorkforceProfile$userArgs<ExtArgs> = {}>(args?: Subset<T, WorkforceProfile$userArgs<ExtArgs>>): Prisma__WorkforceUserClient<$Result.GetResult<Prisma.$WorkforceUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    team<T extends WorkforceProfile$teamArgs<ExtArgs> = {}>(args?: Subset<T, WorkforceProfile$teamArgs<ExtArgs>>): Prisma__WorkforceTeamClient<$Result.GetResult<Prisma.$WorkforceTeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    employees<T extends WorkforceProfile$employeesArgs<ExtArgs> = {}>(args?: Subset<T, WorkforceProfile$employeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkforceEmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignedTasks<T extends WorkforceProfile$assignedTasksArgs<ExtArgs> = {}>(args?: Subset<T, WorkforceProfile$assignedTasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkforceTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdTasks<T extends WorkforceProfile$createdTasksArgs<ExtArgs> = {}>(args?: Subset<T, WorkforceProfile$createdTasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkforceTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends WorkforceProfile$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, WorkforceProfile$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkforceNotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    managedDepartments<T extends WorkforceProfile$managedDepartmentsArgs<ExtArgs> = {}>(args?: Subset<T, WorkforceProfile$managedDepartmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkforceDepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    managedEmployees<T extends WorkforceProfile$managedEmployeesArgs<ExtArgs> = {}>(args?: Subset<T, WorkforceProfile$managedEmployeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkforceEmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentInvitations<T extends WorkforceProfile$sentInvitationsArgs<ExtArgs> = {}>(args?: Subset<T, WorkforceProfile$sentInvitationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkforceInvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkforceProfile model
   */
  interface WorkforceProfileFieldRefs {
    readonly id: FieldRef<"WorkforceProfile", 'String'>
    readonly email: FieldRef<"WorkforceProfile", 'String'>
    readonly firstName: FieldRef<"WorkforceProfile", 'String'>
    readonly lastName: FieldRef<"WorkforceProfile", 'String'>
    readonly role: FieldRef<"WorkforceProfile", 'String'>
    readonly teamId: FieldRef<"WorkforceProfile", 'String'>
    readonly createdAt: FieldRef<"WorkforceProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"WorkforceProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkforceProfile findUnique
   */
  export type WorkforceProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceProfile
     */
    select?: WorkforceProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceProfile
     */
    omit?: WorkforceProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceProfileInclude<ExtArgs> | null
    /**
     * Filter, which WorkforceProfile to fetch.
     */
    where: WorkforceProfileWhereUniqueInput
  }

  /**
   * WorkforceProfile findUniqueOrThrow
   */
  export type WorkforceProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceProfile
     */
    select?: WorkforceProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceProfile
     */
    omit?: WorkforceProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceProfileInclude<ExtArgs> | null
    /**
     * Filter, which WorkforceProfile to fetch.
     */
    where: WorkforceProfileWhereUniqueInput
  }

  /**
   * WorkforceProfile findFirst
   */
  export type WorkforceProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceProfile
     */
    select?: WorkforceProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceProfile
     */
    omit?: WorkforceProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceProfileInclude<ExtArgs> | null
    /**
     * Filter, which WorkforceProfile to fetch.
     */
    where?: WorkforceProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkforceProfiles to fetch.
     */
    orderBy?: WorkforceProfileOrderByWithRelationInput | WorkforceProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkforceProfiles.
     */
    cursor?: WorkforceProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkforceProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkforceProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkforceProfiles.
     */
    distinct?: WorkforceProfileScalarFieldEnum | WorkforceProfileScalarFieldEnum[]
  }

  /**
   * WorkforceProfile findFirstOrThrow
   */
  export type WorkforceProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceProfile
     */
    select?: WorkforceProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceProfile
     */
    omit?: WorkforceProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceProfileInclude<ExtArgs> | null
    /**
     * Filter, which WorkforceProfile to fetch.
     */
    where?: WorkforceProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkforceProfiles to fetch.
     */
    orderBy?: WorkforceProfileOrderByWithRelationInput | WorkforceProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkforceProfiles.
     */
    cursor?: WorkforceProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkforceProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkforceProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkforceProfiles.
     */
    distinct?: WorkforceProfileScalarFieldEnum | WorkforceProfileScalarFieldEnum[]
  }

  /**
   * WorkforceProfile findMany
   */
  export type WorkforceProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceProfile
     */
    select?: WorkforceProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceProfile
     */
    omit?: WorkforceProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceProfileInclude<ExtArgs> | null
    /**
     * Filter, which WorkforceProfiles to fetch.
     */
    where?: WorkforceProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkforceProfiles to fetch.
     */
    orderBy?: WorkforceProfileOrderByWithRelationInput | WorkforceProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkforceProfiles.
     */
    cursor?: WorkforceProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkforceProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkforceProfiles.
     */
    skip?: number
    distinct?: WorkforceProfileScalarFieldEnum | WorkforceProfileScalarFieldEnum[]
  }

  /**
   * WorkforceProfile create
   */
  export type WorkforceProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceProfile
     */
    select?: WorkforceProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceProfile
     */
    omit?: WorkforceProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkforceProfile.
     */
    data: XOR<WorkforceProfileCreateInput, WorkforceProfileUncheckedCreateInput>
  }

  /**
   * WorkforceProfile createMany
   */
  export type WorkforceProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkforceProfiles.
     */
    data: WorkforceProfileCreateManyInput | WorkforceProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkforceProfile createManyAndReturn
   */
  export type WorkforceProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceProfile
     */
    select?: WorkforceProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceProfile
     */
    omit?: WorkforceProfileOmit<ExtArgs> | null
    /**
     * The data used to create many WorkforceProfiles.
     */
    data: WorkforceProfileCreateManyInput | WorkforceProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkforceProfile update
   */
  export type WorkforceProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceProfile
     */
    select?: WorkforceProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceProfile
     */
    omit?: WorkforceProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkforceProfile.
     */
    data: XOR<WorkforceProfileUpdateInput, WorkforceProfileUncheckedUpdateInput>
    /**
     * Choose, which WorkforceProfile to update.
     */
    where: WorkforceProfileWhereUniqueInput
  }

  /**
   * WorkforceProfile updateMany
   */
  export type WorkforceProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkforceProfiles.
     */
    data: XOR<WorkforceProfileUpdateManyMutationInput, WorkforceProfileUncheckedUpdateManyInput>
    /**
     * Filter which WorkforceProfiles to update
     */
    where?: WorkforceProfileWhereInput
    /**
     * Limit how many WorkforceProfiles to update.
     */
    limit?: number
  }

  /**
   * WorkforceProfile updateManyAndReturn
   */
  export type WorkforceProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceProfile
     */
    select?: WorkforceProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceProfile
     */
    omit?: WorkforceProfileOmit<ExtArgs> | null
    /**
     * The data used to update WorkforceProfiles.
     */
    data: XOR<WorkforceProfileUpdateManyMutationInput, WorkforceProfileUncheckedUpdateManyInput>
    /**
     * Filter which WorkforceProfiles to update
     */
    where?: WorkforceProfileWhereInput
    /**
     * Limit how many WorkforceProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkforceProfile upsert
   */
  export type WorkforceProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceProfile
     */
    select?: WorkforceProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceProfile
     */
    omit?: WorkforceProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkforceProfile to update in case it exists.
     */
    where: WorkforceProfileWhereUniqueInput
    /**
     * In case the WorkforceProfile found by the `where` argument doesn't exist, create a new WorkforceProfile with this data.
     */
    create: XOR<WorkforceProfileCreateInput, WorkforceProfileUncheckedCreateInput>
    /**
     * In case the WorkforceProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkforceProfileUpdateInput, WorkforceProfileUncheckedUpdateInput>
  }

  /**
   * WorkforceProfile delete
   */
  export type WorkforceProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceProfile
     */
    select?: WorkforceProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceProfile
     */
    omit?: WorkforceProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceProfileInclude<ExtArgs> | null
    /**
     * Filter which WorkforceProfile to delete.
     */
    where: WorkforceProfileWhereUniqueInput
  }

  /**
   * WorkforceProfile deleteMany
   */
  export type WorkforceProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkforceProfiles to delete
     */
    where?: WorkforceProfileWhereInput
    /**
     * Limit how many WorkforceProfiles to delete.
     */
    limit?: number
  }

  /**
   * WorkforceProfile.user
   */
  export type WorkforceProfile$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceUser
     */
    select?: WorkforceUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceUser
     */
    omit?: WorkforceUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceUserInclude<ExtArgs> | null
    where?: WorkforceUserWhereInput
  }

  /**
   * WorkforceProfile.team
   */
  export type WorkforceProfile$teamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceTeam
     */
    select?: WorkforceTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceTeam
     */
    omit?: WorkforceTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceTeamInclude<ExtArgs> | null
    where?: WorkforceTeamWhereInput
  }

  /**
   * WorkforceProfile.employees
   */
  export type WorkforceProfile$employeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceEmployee
     */
    select?: WorkforceEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceEmployee
     */
    omit?: WorkforceEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceEmployeeInclude<ExtArgs> | null
    where?: WorkforceEmployeeWhereInput
    orderBy?: WorkforceEmployeeOrderByWithRelationInput | WorkforceEmployeeOrderByWithRelationInput[]
    cursor?: WorkforceEmployeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkforceEmployeeScalarFieldEnum | WorkforceEmployeeScalarFieldEnum[]
  }

  /**
   * WorkforceProfile.assignedTasks
   */
  export type WorkforceProfile$assignedTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceTask
     */
    select?: WorkforceTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceTask
     */
    omit?: WorkforceTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceTaskInclude<ExtArgs> | null
    where?: WorkforceTaskWhereInput
    orderBy?: WorkforceTaskOrderByWithRelationInput | WorkforceTaskOrderByWithRelationInput[]
    cursor?: WorkforceTaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkforceTaskScalarFieldEnum | WorkforceTaskScalarFieldEnum[]
  }

  /**
   * WorkforceProfile.createdTasks
   */
  export type WorkforceProfile$createdTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceTask
     */
    select?: WorkforceTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceTask
     */
    omit?: WorkforceTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceTaskInclude<ExtArgs> | null
    where?: WorkforceTaskWhereInput
    orderBy?: WorkforceTaskOrderByWithRelationInput | WorkforceTaskOrderByWithRelationInput[]
    cursor?: WorkforceTaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkforceTaskScalarFieldEnum | WorkforceTaskScalarFieldEnum[]
  }

  /**
   * WorkforceProfile.notifications
   */
  export type WorkforceProfile$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceNotification
     */
    select?: WorkforceNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceNotification
     */
    omit?: WorkforceNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceNotificationInclude<ExtArgs> | null
    where?: WorkforceNotificationWhereInput
    orderBy?: WorkforceNotificationOrderByWithRelationInput | WorkforceNotificationOrderByWithRelationInput[]
    cursor?: WorkforceNotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkforceNotificationScalarFieldEnum | WorkforceNotificationScalarFieldEnum[]
  }

  /**
   * WorkforceProfile.managedDepartments
   */
  export type WorkforceProfile$managedDepartmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceDepartment
     */
    select?: WorkforceDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceDepartment
     */
    omit?: WorkforceDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceDepartmentInclude<ExtArgs> | null
    where?: WorkforceDepartmentWhereInput
    orderBy?: WorkforceDepartmentOrderByWithRelationInput | WorkforceDepartmentOrderByWithRelationInput[]
    cursor?: WorkforceDepartmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkforceDepartmentScalarFieldEnum | WorkforceDepartmentScalarFieldEnum[]
  }

  /**
   * WorkforceProfile.managedEmployees
   */
  export type WorkforceProfile$managedEmployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceEmployee
     */
    select?: WorkforceEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceEmployee
     */
    omit?: WorkforceEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceEmployeeInclude<ExtArgs> | null
    where?: WorkforceEmployeeWhereInput
    orderBy?: WorkforceEmployeeOrderByWithRelationInput | WorkforceEmployeeOrderByWithRelationInput[]
    cursor?: WorkforceEmployeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkforceEmployeeScalarFieldEnum | WorkforceEmployeeScalarFieldEnum[]
  }

  /**
   * WorkforceProfile.sentInvitations
   */
  export type WorkforceProfile$sentInvitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceInvitation
     */
    select?: WorkforceInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceInvitation
     */
    omit?: WorkforceInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceInvitationInclude<ExtArgs> | null
    where?: WorkforceInvitationWhereInput
    orderBy?: WorkforceInvitationOrderByWithRelationInput | WorkforceInvitationOrderByWithRelationInput[]
    cursor?: WorkforceInvitationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkforceInvitationScalarFieldEnum | WorkforceInvitationScalarFieldEnum[]
  }

  /**
   * WorkforceProfile without action
   */
  export type WorkforceProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceProfile
     */
    select?: WorkforceProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceProfile
     */
    omit?: WorkforceProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceProfileInclude<ExtArgs> | null
  }


  /**
   * Model WorkforceTeamMember
   */

  export type AggregateWorkforceTeamMember = {
    _count: WorkforceTeamMemberCountAggregateOutputType | null
    _min: WorkforceTeamMemberMinAggregateOutputType | null
    _max: WorkforceTeamMemberMaxAggregateOutputType | null
  }

  export type WorkforceTeamMemberMinAggregateOutputType = {
    id: string | null
    userId: string | null
    teamId: string | null
    role: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkforceTeamMemberMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    teamId: string | null
    role: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkforceTeamMemberCountAggregateOutputType = {
    id: number
    userId: number
    teamId: number
    role: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkforceTeamMemberMinAggregateInputType = {
    id?: true
    userId?: true
    teamId?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkforceTeamMemberMaxAggregateInputType = {
    id?: true
    userId?: true
    teamId?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkforceTeamMemberCountAggregateInputType = {
    id?: true
    userId?: true
    teamId?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkforceTeamMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkforceTeamMember to aggregate.
     */
    where?: WorkforceTeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkforceTeamMembers to fetch.
     */
    orderBy?: WorkforceTeamMemberOrderByWithRelationInput | WorkforceTeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkforceTeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkforceTeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkforceTeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkforceTeamMembers
    **/
    _count?: true | WorkforceTeamMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkforceTeamMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkforceTeamMemberMaxAggregateInputType
  }

  export type GetWorkforceTeamMemberAggregateType<T extends WorkforceTeamMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkforceTeamMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkforceTeamMember[P]>
      : GetScalarType<T[P], AggregateWorkforceTeamMember[P]>
  }




  export type WorkforceTeamMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkforceTeamMemberWhereInput
    orderBy?: WorkforceTeamMemberOrderByWithAggregationInput | WorkforceTeamMemberOrderByWithAggregationInput[]
    by: WorkforceTeamMemberScalarFieldEnum[] | WorkforceTeamMemberScalarFieldEnum
    having?: WorkforceTeamMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkforceTeamMemberCountAggregateInputType | true
    _min?: WorkforceTeamMemberMinAggregateInputType
    _max?: WorkforceTeamMemberMaxAggregateInputType
  }

  export type WorkforceTeamMemberGroupByOutputType = {
    id: string
    userId: string
    teamId: string
    role: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: WorkforceTeamMemberCountAggregateOutputType | null
    _min: WorkforceTeamMemberMinAggregateOutputType | null
    _max: WorkforceTeamMemberMaxAggregateOutputType | null
  }

  type GetWorkforceTeamMemberGroupByPayload<T extends WorkforceTeamMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkforceTeamMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkforceTeamMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkforceTeamMemberGroupByOutputType[P]>
            : GetScalarType<T[P], WorkforceTeamMemberGroupByOutputType[P]>
        }
      >
    >


  export type WorkforceTeamMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    teamId?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | WorkforceUserDefaultArgs<ExtArgs>
    team?: boolean | WorkforceTeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workforceTeamMember"]>

  export type WorkforceTeamMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    teamId?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | WorkforceUserDefaultArgs<ExtArgs>
    team?: boolean | WorkforceTeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workforceTeamMember"]>

  export type WorkforceTeamMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    teamId?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | WorkforceUserDefaultArgs<ExtArgs>
    team?: boolean | WorkforceTeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workforceTeamMember"]>

  export type WorkforceTeamMemberSelectScalar = {
    id?: boolean
    userId?: boolean
    teamId?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkforceTeamMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "teamId" | "role" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["workforceTeamMember"]>
  export type WorkforceTeamMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | WorkforceUserDefaultArgs<ExtArgs>
    team?: boolean | WorkforceTeamDefaultArgs<ExtArgs>
  }
  export type WorkforceTeamMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | WorkforceUserDefaultArgs<ExtArgs>
    team?: boolean | WorkforceTeamDefaultArgs<ExtArgs>
  }
  export type WorkforceTeamMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | WorkforceUserDefaultArgs<ExtArgs>
    team?: boolean | WorkforceTeamDefaultArgs<ExtArgs>
  }

  export type $WorkforceTeamMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkforceTeamMember"
    objects: {
      user: Prisma.$WorkforceUserPayload<ExtArgs>
      team: Prisma.$WorkforceTeamPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      teamId: string
      role: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workforceTeamMember"]>
    composites: {}
  }

  type WorkforceTeamMemberGetPayload<S extends boolean | null | undefined | WorkforceTeamMemberDefaultArgs> = $Result.GetResult<Prisma.$WorkforceTeamMemberPayload, S>

  type WorkforceTeamMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkforceTeamMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkforceTeamMemberCountAggregateInputType | true
    }

  export interface WorkforceTeamMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkforceTeamMember'], meta: { name: 'WorkforceTeamMember' } }
    /**
     * Find zero or one WorkforceTeamMember that matches the filter.
     * @param {WorkforceTeamMemberFindUniqueArgs} args - Arguments to find a WorkforceTeamMember
     * @example
     * // Get one WorkforceTeamMember
     * const workforceTeamMember = await prisma.workforceTeamMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkforceTeamMemberFindUniqueArgs>(args: SelectSubset<T, WorkforceTeamMemberFindUniqueArgs<ExtArgs>>): Prisma__WorkforceTeamMemberClient<$Result.GetResult<Prisma.$WorkforceTeamMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkforceTeamMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkforceTeamMemberFindUniqueOrThrowArgs} args - Arguments to find a WorkforceTeamMember
     * @example
     * // Get one WorkforceTeamMember
     * const workforceTeamMember = await prisma.workforceTeamMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkforceTeamMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkforceTeamMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkforceTeamMemberClient<$Result.GetResult<Prisma.$WorkforceTeamMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkforceTeamMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceTeamMemberFindFirstArgs} args - Arguments to find a WorkforceTeamMember
     * @example
     * // Get one WorkforceTeamMember
     * const workforceTeamMember = await prisma.workforceTeamMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkforceTeamMemberFindFirstArgs>(args?: SelectSubset<T, WorkforceTeamMemberFindFirstArgs<ExtArgs>>): Prisma__WorkforceTeamMemberClient<$Result.GetResult<Prisma.$WorkforceTeamMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkforceTeamMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceTeamMemberFindFirstOrThrowArgs} args - Arguments to find a WorkforceTeamMember
     * @example
     * // Get one WorkforceTeamMember
     * const workforceTeamMember = await prisma.workforceTeamMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkforceTeamMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkforceTeamMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkforceTeamMemberClient<$Result.GetResult<Prisma.$WorkforceTeamMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkforceTeamMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceTeamMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkforceTeamMembers
     * const workforceTeamMembers = await prisma.workforceTeamMember.findMany()
     * 
     * // Get first 10 WorkforceTeamMembers
     * const workforceTeamMembers = await prisma.workforceTeamMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workforceTeamMemberWithIdOnly = await prisma.workforceTeamMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkforceTeamMemberFindManyArgs>(args?: SelectSubset<T, WorkforceTeamMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkforceTeamMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkforceTeamMember.
     * @param {WorkforceTeamMemberCreateArgs} args - Arguments to create a WorkforceTeamMember.
     * @example
     * // Create one WorkforceTeamMember
     * const WorkforceTeamMember = await prisma.workforceTeamMember.create({
     *   data: {
     *     // ... data to create a WorkforceTeamMember
     *   }
     * })
     * 
     */
    create<T extends WorkforceTeamMemberCreateArgs>(args: SelectSubset<T, WorkforceTeamMemberCreateArgs<ExtArgs>>): Prisma__WorkforceTeamMemberClient<$Result.GetResult<Prisma.$WorkforceTeamMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkforceTeamMembers.
     * @param {WorkforceTeamMemberCreateManyArgs} args - Arguments to create many WorkforceTeamMembers.
     * @example
     * // Create many WorkforceTeamMembers
     * const workforceTeamMember = await prisma.workforceTeamMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkforceTeamMemberCreateManyArgs>(args?: SelectSubset<T, WorkforceTeamMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkforceTeamMembers and returns the data saved in the database.
     * @param {WorkforceTeamMemberCreateManyAndReturnArgs} args - Arguments to create many WorkforceTeamMembers.
     * @example
     * // Create many WorkforceTeamMembers
     * const workforceTeamMember = await prisma.workforceTeamMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkforceTeamMembers and only return the `id`
     * const workforceTeamMemberWithIdOnly = await prisma.workforceTeamMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkforceTeamMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkforceTeamMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkforceTeamMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkforceTeamMember.
     * @param {WorkforceTeamMemberDeleteArgs} args - Arguments to delete one WorkforceTeamMember.
     * @example
     * // Delete one WorkforceTeamMember
     * const WorkforceTeamMember = await prisma.workforceTeamMember.delete({
     *   where: {
     *     // ... filter to delete one WorkforceTeamMember
     *   }
     * })
     * 
     */
    delete<T extends WorkforceTeamMemberDeleteArgs>(args: SelectSubset<T, WorkforceTeamMemberDeleteArgs<ExtArgs>>): Prisma__WorkforceTeamMemberClient<$Result.GetResult<Prisma.$WorkforceTeamMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkforceTeamMember.
     * @param {WorkforceTeamMemberUpdateArgs} args - Arguments to update one WorkforceTeamMember.
     * @example
     * // Update one WorkforceTeamMember
     * const workforceTeamMember = await prisma.workforceTeamMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkforceTeamMemberUpdateArgs>(args: SelectSubset<T, WorkforceTeamMemberUpdateArgs<ExtArgs>>): Prisma__WorkforceTeamMemberClient<$Result.GetResult<Prisma.$WorkforceTeamMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkforceTeamMembers.
     * @param {WorkforceTeamMemberDeleteManyArgs} args - Arguments to filter WorkforceTeamMembers to delete.
     * @example
     * // Delete a few WorkforceTeamMembers
     * const { count } = await prisma.workforceTeamMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkforceTeamMemberDeleteManyArgs>(args?: SelectSubset<T, WorkforceTeamMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkforceTeamMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceTeamMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkforceTeamMembers
     * const workforceTeamMember = await prisma.workforceTeamMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkforceTeamMemberUpdateManyArgs>(args: SelectSubset<T, WorkforceTeamMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkforceTeamMembers and returns the data updated in the database.
     * @param {WorkforceTeamMemberUpdateManyAndReturnArgs} args - Arguments to update many WorkforceTeamMembers.
     * @example
     * // Update many WorkforceTeamMembers
     * const workforceTeamMember = await prisma.workforceTeamMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkforceTeamMembers and only return the `id`
     * const workforceTeamMemberWithIdOnly = await prisma.workforceTeamMember.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkforceTeamMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkforceTeamMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkforceTeamMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkforceTeamMember.
     * @param {WorkforceTeamMemberUpsertArgs} args - Arguments to update or create a WorkforceTeamMember.
     * @example
     * // Update or create a WorkforceTeamMember
     * const workforceTeamMember = await prisma.workforceTeamMember.upsert({
     *   create: {
     *     // ... data to create a WorkforceTeamMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkforceTeamMember we want to update
     *   }
     * })
     */
    upsert<T extends WorkforceTeamMemberUpsertArgs>(args: SelectSubset<T, WorkforceTeamMemberUpsertArgs<ExtArgs>>): Prisma__WorkforceTeamMemberClient<$Result.GetResult<Prisma.$WorkforceTeamMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkforceTeamMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceTeamMemberCountArgs} args - Arguments to filter WorkforceTeamMembers to count.
     * @example
     * // Count the number of WorkforceTeamMembers
     * const count = await prisma.workforceTeamMember.count({
     *   where: {
     *     // ... the filter for the WorkforceTeamMembers we want to count
     *   }
     * })
    **/
    count<T extends WorkforceTeamMemberCountArgs>(
      args?: Subset<T, WorkforceTeamMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkforceTeamMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkforceTeamMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceTeamMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkforceTeamMemberAggregateArgs>(args: Subset<T, WorkforceTeamMemberAggregateArgs>): Prisma.PrismaPromise<GetWorkforceTeamMemberAggregateType<T>>

    /**
     * Group by WorkforceTeamMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceTeamMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkforceTeamMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkforceTeamMemberGroupByArgs['orderBy'] }
        : { orderBy?: WorkforceTeamMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkforceTeamMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkforceTeamMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkforceTeamMember model
   */
  readonly fields: WorkforceTeamMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkforceTeamMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkforceTeamMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends WorkforceUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkforceUserDefaultArgs<ExtArgs>>): Prisma__WorkforceUserClient<$Result.GetResult<Prisma.$WorkforceUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    team<T extends WorkforceTeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkforceTeamDefaultArgs<ExtArgs>>): Prisma__WorkforceTeamClient<$Result.GetResult<Prisma.$WorkforceTeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkforceTeamMember model
   */
  interface WorkforceTeamMemberFieldRefs {
    readonly id: FieldRef<"WorkforceTeamMember", 'String'>
    readonly userId: FieldRef<"WorkforceTeamMember", 'String'>
    readonly teamId: FieldRef<"WorkforceTeamMember", 'String'>
    readonly role: FieldRef<"WorkforceTeamMember", 'String'>
    readonly isActive: FieldRef<"WorkforceTeamMember", 'Boolean'>
    readonly createdAt: FieldRef<"WorkforceTeamMember", 'DateTime'>
    readonly updatedAt: FieldRef<"WorkforceTeamMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkforceTeamMember findUnique
   */
  export type WorkforceTeamMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceTeamMember
     */
    select?: WorkforceTeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceTeamMember
     */
    omit?: WorkforceTeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceTeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which WorkforceTeamMember to fetch.
     */
    where: WorkforceTeamMemberWhereUniqueInput
  }

  /**
   * WorkforceTeamMember findUniqueOrThrow
   */
  export type WorkforceTeamMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceTeamMember
     */
    select?: WorkforceTeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceTeamMember
     */
    omit?: WorkforceTeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceTeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which WorkforceTeamMember to fetch.
     */
    where: WorkforceTeamMemberWhereUniqueInput
  }

  /**
   * WorkforceTeamMember findFirst
   */
  export type WorkforceTeamMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceTeamMember
     */
    select?: WorkforceTeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceTeamMember
     */
    omit?: WorkforceTeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceTeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which WorkforceTeamMember to fetch.
     */
    where?: WorkforceTeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkforceTeamMembers to fetch.
     */
    orderBy?: WorkforceTeamMemberOrderByWithRelationInput | WorkforceTeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkforceTeamMembers.
     */
    cursor?: WorkforceTeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkforceTeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkforceTeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkforceTeamMembers.
     */
    distinct?: WorkforceTeamMemberScalarFieldEnum | WorkforceTeamMemberScalarFieldEnum[]
  }

  /**
   * WorkforceTeamMember findFirstOrThrow
   */
  export type WorkforceTeamMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceTeamMember
     */
    select?: WorkforceTeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceTeamMember
     */
    omit?: WorkforceTeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceTeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which WorkforceTeamMember to fetch.
     */
    where?: WorkforceTeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkforceTeamMembers to fetch.
     */
    orderBy?: WorkforceTeamMemberOrderByWithRelationInput | WorkforceTeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkforceTeamMembers.
     */
    cursor?: WorkforceTeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkforceTeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkforceTeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkforceTeamMembers.
     */
    distinct?: WorkforceTeamMemberScalarFieldEnum | WorkforceTeamMemberScalarFieldEnum[]
  }

  /**
   * WorkforceTeamMember findMany
   */
  export type WorkforceTeamMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceTeamMember
     */
    select?: WorkforceTeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceTeamMember
     */
    omit?: WorkforceTeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceTeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which WorkforceTeamMembers to fetch.
     */
    where?: WorkforceTeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkforceTeamMembers to fetch.
     */
    orderBy?: WorkforceTeamMemberOrderByWithRelationInput | WorkforceTeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkforceTeamMembers.
     */
    cursor?: WorkforceTeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkforceTeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkforceTeamMembers.
     */
    skip?: number
    distinct?: WorkforceTeamMemberScalarFieldEnum | WorkforceTeamMemberScalarFieldEnum[]
  }

  /**
   * WorkforceTeamMember create
   */
  export type WorkforceTeamMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceTeamMember
     */
    select?: WorkforceTeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceTeamMember
     */
    omit?: WorkforceTeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceTeamMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkforceTeamMember.
     */
    data: XOR<WorkforceTeamMemberCreateInput, WorkforceTeamMemberUncheckedCreateInput>
  }

  /**
   * WorkforceTeamMember createMany
   */
  export type WorkforceTeamMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkforceTeamMembers.
     */
    data: WorkforceTeamMemberCreateManyInput | WorkforceTeamMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkforceTeamMember createManyAndReturn
   */
  export type WorkforceTeamMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceTeamMember
     */
    select?: WorkforceTeamMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceTeamMember
     */
    omit?: WorkforceTeamMemberOmit<ExtArgs> | null
    /**
     * The data used to create many WorkforceTeamMembers.
     */
    data: WorkforceTeamMemberCreateManyInput | WorkforceTeamMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceTeamMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkforceTeamMember update
   */
  export type WorkforceTeamMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceTeamMember
     */
    select?: WorkforceTeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceTeamMember
     */
    omit?: WorkforceTeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceTeamMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkforceTeamMember.
     */
    data: XOR<WorkforceTeamMemberUpdateInput, WorkforceTeamMemberUncheckedUpdateInput>
    /**
     * Choose, which WorkforceTeamMember to update.
     */
    where: WorkforceTeamMemberWhereUniqueInput
  }

  /**
   * WorkforceTeamMember updateMany
   */
  export type WorkforceTeamMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkforceTeamMembers.
     */
    data: XOR<WorkforceTeamMemberUpdateManyMutationInput, WorkforceTeamMemberUncheckedUpdateManyInput>
    /**
     * Filter which WorkforceTeamMembers to update
     */
    where?: WorkforceTeamMemberWhereInput
    /**
     * Limit how many WorkforceTeamMembers to update.
     */
    limit?: number
  }

  /**
   * WorkforceTeamMember updateManyAndReturn
   */
  export type WorkforceTeamMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceTeamMember
     */
    select?: WorkforceTeamMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceTeamMember
     */
    omit?: WorkforceTeamMemberOmit<ExtArgs> | null
    /**
     * The data used to update WorkforceTeamMembers.
     */
    data: XOR<WorkforceTeamMemberUpdateManyMutationInput, WorkforceTeamMemberUncheckedUpdateManyInput>
    /**
     * Filter which WorkforceTeamMembers to update
     */
    where?: WorkforceTeamMemberWhereInput
    /**
     * Limit how many WorkforceTeamMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceTeamMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkforceTeamMember upsert
   */
  export type WorkforceTeamMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceTeamMember
     */
    select?: WorkforceTeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceTeamMember
     */
    omit?: WorkforceTeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceTeamMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkforceTeamMember to update in case it exists.
     */
    where: WorkforceTeamMemberWhereUniqueInput
    /**
     * In case the WorkforceTeamMember found by the `where` argument doesn't exist, create a new WorkforceTeamMember with this data.
     */
    create: XOR<WorkforceTeamMemberCreateInput, WorkforceTeamMemberUncheckedCreateInput>
    /**
     * In case the WorkforceTeamMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkforceTeamMemberUpdateInput, WorkforceTeamMemberUncheckedUpdateInput>
  }

  /**
   * WorkforceTeamMember delete
   */
  export type WorkforceTeamMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceTeamMember
     */
    select?: WorkforceTeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceTeamMember
     */
    omit?: WorkforceTeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceTeamMemberInclude<ExtArgs> | null
    /**
     * Filter which WorkforceTeamMember to delete.
     */
    where: WorkforceTeamMemberWhereUniqueInput
  }

  /**
   * WorkforceTeamMember deleteMany
   */
  export type WorkforceTeamMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkforceTeamMembers to delete
     */
    where?: WorkforceTeamMemberWhereInput
    /**
     * Limit how many WorkforceTeamMembers to delete.
     */
    limit?: number
  }

  /**
   * WorkforceTeamMember without action
   */
  export type WorkforceTeamMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceTeamMember
     */
    select?: WorkforceTeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceTeamMember
     */
    omit?: WorkforceTeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceTeamMemberInclude<ExtArgs> | null
  }


  /**
   * Model WorkforceDepartment
   */

  export type AggregateWorkforceDepartment = {
    _count: WorkforceDepartmentCountAggregateOutputType | null
    _min: WorkforceDepartmentMinAggregateOutputType | null
    _max: WorkforceDepartmentMaxAggregateOutputType | null
  }

  export type WorkforceDepartmentMinAggregateOutputType = {
    id: string | null
    teamId: string | null
    name: string | null
    icon: string | null
    managerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkforceDepartmentMaxAggregateOutputType = {
    id: string | null
    teamId: string | null
    name: string | null
    icon: string | null
    managerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkforceDepartmentCountAggregateOutputType = {
    id: number
    teamId: number
    name: number
    icon: number
    managerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkforceDepartmentMinAggregateInputType = {
    id?: true
    teamId?: true
    name?: true
    icon?: true
    managerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkforceDepartmentMaxAggregateInputType = {
    id?: true
    teamId?: true
    name?: true
    icon?: true
    managerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkforceDepartmentCountAggregateInputType = {
    id?: true
    teamId?: true
    name?: true
    icon?: true
    managerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkforceDepartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkforceDepartment to aggregate.
     */
    where?: WorkforceDepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkforceDepartments to fetch.
     */
    orderBy?: WorkforceDepartmentOrderByWithRelationInput | WorkforceDepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkforceDepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkforceDepartments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkforceDepartments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkforceDepartments
    **/
    _count?: true | WorkforceDepartmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkforceDepartmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkforceDepartmentMaxAggregateInputType
  }

  export type GetWorkforceDepartmentAggregateType<T extends WorkforceDepartmentAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkforceDepartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkforceDepartment[P]>
      : GetScalarType<T[P], AggregateWorkforceDepartment[P]>
  }




  export type WorkforceDepartmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkforceDepartmentWhereInput
    orderBy?: WorkforceDepartmentOrderByWithAggregationInput | WorkforceDepartmentOrderByWithAggregationInput[]
    by: WorkforceDepartmentScalarFieldEnum[] | WorkforceDepartmentScalarFieldEnum
    having?: WorkforceDepartmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkforceDepartmentCountAggregateInputType | true
    _min?: WorkforceDepartmentMinAggregateInputType
    _max?: WorkforceDepartmentMaxAggregateInputType
  }

  export type WorkforceDepartmentGroupByOutputType = {
    id: string
    teamId: string
    name: string
    icon: string | null
    managerId: string | null
    createdAt: Date
    updatedAt: Date
    _count: WorkforceDepartmentCountAggregateOutputType | null
    _min: WorkforceDepartmentMinAggregateOutputType | null
    _max: WorkforceDepartmentMaxAggregateOutputType | null
  }

  type GetWorkforceDepartmentGroupByPayload<T extends WorkforceDepartmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkforceDepartmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkforceDepartmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkforceDepartmentGroupByOutputType[P]>
            : GetScalarType<T[P], WorkforceDepartmentGroupByOutputType[P]>
        }
      >
    >


  export type WorkforceDepartmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    name?: boolean
    icon?: boolean
    managerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    team?: boolean | WorkforceTeamDefaultArgs<ExtArgs>
    manager?: boolean | WorkforceDepartment$managerArgs<ExtArgs>
    employees?: boolean | WorkforceDepartment$employeesArgs<ExtArgs>
    tasks?: boolean | WorkforceDepartment$tasksArgs<ExtArgs>
    _count?: boolean | WorkforceDepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workforceDepartment"]>

  export type WorkforceDepartmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    name?: boolean
    icon?: boolean
    managerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    team?: boolean | WorkforceTeamDefaultArgs<ExtArgs>
    manager?: boolean | WorkforceDepartment$managerArgs<ExtArgs>
  }, ExtArgs["result"]["workforceDepartment"]>

  export type WorkforceDepartmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    name?: boolean
    icon?: boolean
    managerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    team?: boolean | WorkforceTeamDefaultArgs<ExtArgs>
    manager?: boolean | WorkforceDepartment$managerArgs<ExtArgs>
  }, ExtArgs["result"]["workforceDepartment"]>

  export type WorkforceDepartmentSelectScalar = {
    id?: boolean
    teamId?: boolean
    name?: boolean
    icon?: boolean
    managerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkforceDepartmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "teamId" | "name" | "icon" | "managerId" | "createdAt" | "updatedAt", ExtArgs["result"]["workforceDepartment"]>
  export type WorkforceDepartmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | WorkforceTeamDefaultArgs<ExtArgs>
    manager?: boolean | WorkforceDepartment$managerArgs<ExtArgs>
    employees?: boolean | WorkforceDepartment$employeesArgs<ExtArgs>
    tasks?: boolean | WorkforceDepartment$tasksArgs<ExtArgs>
    _count?: boolean | WorkforceDepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkforceDepartmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | WorkforceTeamDefaultArgs<ExtArgs>
    manager?: boolean | WorkforceDepartment$managerArgs<ExtArgs>
  }
  export type WorkforceDepartmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | WorkforceTeamDefaultArgs<ExtArgs>
    manager?: boolean | WorkforceDepartment$managerArgs<ExtArgs>
  }

  export type $WorkforceDepartmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkforceDepartment"
    objects: {
      team: Prisma.$WorkforceTeamPayload<ExtArgs>
      manager: Prisma.$WorkforceProfilePayload<ExtArgs> | null
      employees: Prisma.$WorkforceEmployeePayload<ExtArgs>[]
      tasks: Prisma.$WorkforceTaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      teamId: string
      name: string
      icon: string | null
      managerId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workforceDepartment"]>
    composites: {}
  }

  type WorkforceDepartmentGetPayload<S extends boolean | null | undefined | WorkforceDepartmentDefaultArgs> = $Result.GetResult<Prisma.$WorkforceDepartmentPayload, S>

  type WorkforceDepartmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkforceDepartmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkforceDepartmentCountAggregateInputType | true
    }

  export interface WorkforceDepartmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkforceDepartment'], meta: { name: 'WorkforceDepartment' } }
    /**
     * Find zero or one WorkforceDepartment that matches the filter.
     * @param {WorkforceDepartmentFindUniqueArgs} args - Arguments to find a WorkforceDepartment
     * @example
     * // Get one WorkforceDepartment
     * const workforceDepartment = await prisma.workforceDepartment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkforceDepartmentFindUniqueArgs>(args: SelectSubset<T, WorkforceDepartmentFindUniqueArgs<ExtArgs>>): Prisma__WorkforceDepartmentClient<$Result.GetResult<Prisma.$WorkforceDepartmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkforceDepartment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkforceDepartmentFindUniqueOrThrowArgs} args - Arguments to find a WorkforceDepartment
     * @example
     * // Get one WorkforceDepartment
     * const workforceDepartment = await prisma.workforceDepartment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkforceDepartmentFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkforceDepartmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkforceDepartmentClient<$Result.GetResult<Prisma.$WorkforceDepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkforceDepartment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceDepartmentFindFirstArgs} args - Arguments to find a WorkforceDepartment
     * @example
     * // Get one WorkforceDepartment
     * const workforceDepartment = await prisma.workforceDepartment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkforceDepartmentFindFirstArgs>(args?: SelectSubset<T, WorkforceDepartmentFindFirstArgs<ExtArgs>>): Prisma__WorkforceDepartmentClient<$Result.GetResult<Prisma.$WorkforceDepartmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkforceDepartment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceDepartmentFindFirstOrThrowArgs} args - Arguments to find a WorkforceDepartment
     * @example
     * // Get one WorkforceDepartment
     * const workforceDepartment = await prisma.workforceDepartment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkforceDepartmentFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkforceDepartmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkforceDepartmentClient<$Result.GetResult<Prisma.$WorkforceDepartmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkforceDepartments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceDepartmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkforceDepartments
     * const workforceDepartments = await prisma.workforceDepartment.findMany()
     * 
     * // Get first 10 WorkforceDepartments
     * const workforceDepartments = await prisma.workforceDepartment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workforceDepartmentWithIdOnly = await prisma.workforceDepartment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkforceDepartmentFindManyArgs>(args?: SelectSubset<T, WorkforceDepartmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkforceDepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkforceDepartment.
     * @param {WorkforceDepartmentCreateArgs} args - Arguments to create a WorkforceDepartment.
     * @example
     * // Create one WorkforceDepartment
     * const WorkforceDepartment = await prisma.workforceDepartment.create({
     *   data: {
     *     // ... data to create a WorkforceDepartment
     *   }
     * })
     * 
     */
    create<T extends WorkforceDepartmentCreateArgs>(args: SelectSubset<T, WorkforceDepartmentCreateArgs<ExtArgs>>): Prisma__WorkforceDepartmentClient<$Result.GetResult<Prisma.$WorkforceDepartmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkforceDepartments.
     * @param {WorkforceDepartmentCreateManyArgs} args - Arguments to create many WorkforceDepartments.
     * @example
     * // Create many WorkforceDepartments
     * const workforceDepartment = await prisma.workforceDepartment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkforceDepartmentCreateManyArgs>(args?: SelectSubset<T, WorkforceDepartmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkforceDepartments and returns the data saved in the database.
     * @param {WorkforceDepartmentCreateManyAndReturnArgs} args - Arguments to create many WorkforceDepartments.
     * @example
     * // Create many WorkforceDepartments
     * const workforceDepartment = await prisma.workforceDepartment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkforceDepartments and only return the `id`
     * const workforceDepartmentWithIdOnly = await prisma.workforceDepartment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkforceDepartmentCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkforceDepartmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkforceDepartmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkforceDepartment.
     * @param {WorkforceDepartmentDeleteArgs} args - Arguments to delete one WorkforceDepartment.
     * @example
     * // Delete one WorkforceDepartment
     * const WorkforceDepartment = await prisma.workforceDepartment.delete({
     *   where: {
     *     // ... filter to delete one WorkforceDepartment
     *   }
     * })
     * 
     */
    delete<T extends WorkforceDepartmentDeleteArgs>(args: SelectSubset<T, WorkforceDepartmentDeleteArgs<ExtArgs>>): Prisma__WorkforceDepartmentClient<$Result.GetResult<Prisma.$WorkforceDepartmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkforceDepartment.
     * @param {WorkforceDepartmentUpdateArgs} args - Arguments to update one WorkforceDepartment.
     * @example
     * // Update one WorkforceDepartment
     * const workforceDepartment = await prisma.workforceDepartment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkforceDepartmentUpdateArgs>(args: SelectSubset<T, WorkforceDepartmentUpdateArgs<ExtArgs>>): Prisma__WorkforceDepartmentClient<$Result.GetResult<Prisma.$WorkforceDepartmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkforceDepartments.
     * @param {WorkforceDepartmentDeleteManyArgs} args - Arguments to filter WorkforceDepartments to delete.
     * @example
     * // Delete a few WorkforceDepartments
     * const { count } = await prisma.workforceDepartment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkforceDepartmentDeleteManyArgs>(args?: SelectSubset<T, WorkforceDepartmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkforceDepartments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceDepartmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkforceDepartments
     * const workforceDepartment = await prisma.workforceDepartment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkforceDepartmentUpdateManyArgs>(args: SelectSubset<T, WorkforceDepartmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkforceDepartments and returns the data updated in the database.
     * @param {WorkforceDepartmentUpdateManyAndReturnArgs} args - Arguments to update many WorkforceDepartments.
     * @example
     * // Update many WorkforceDepartments
     * const workforceDepartment = await prisma.workforceDepartment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkforceDepartments and only return the `id`
     * const workforceDepartmentWithIdOnly = await prisma.workforceDepartment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkforceDepartmentUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkforceDepartmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkforceDepartmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkforceDepartment.
     * @param {WorkforceDepartmentUpsertArgs} args - Arguments to update or create a WorkforceDepartment.
     * @example
     * // Update or create a WorkforceDepartment
     * const workforceDepartment = await prisma.workforceDepartment.upsert({
     *   create: {
     *     // ... data to create a WorkforceDepartment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkforceDepartment we want to update
     *   }
     * })
     */
    upsert<T extends WorkforceDepartmentUpsertArgs>(args: SelectSubset<T, WorkforceDepartmentUpsertArgs<ExtArgs>>): Prisma__WorkforceDepartmentClient<$Result.GetResult<Prisma.$WorkforceDepartmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkforceDepartments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceDepartmentCountArgs} args - Arguments to filter WorkforceDepartments to count.
     * @example
     * // Count the number of WorkforceDepartments
     * const count = await prisma.workforceDepartment.count({
     *   where: {
     *     // ... the filter for the WorkforceDepartments we want to count
     *   }
     * })
    **/
    count<T extends WorkforceDepartmentCountArgs>(
      args?: Subset<T, WorkforceDepartmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkforceDepartmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkforceDepartment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceDepartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkforceDepartmentAggregateArgs>(args: Subset<T, WorkforceDepartmentAggregateArgs>): Prisma.PrismaPromise<GetWorkforceDepartmentAggregateType<T>>

    /**
     * Group by WorkforceDepartment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceDepartmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkforceDepartmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkforceDepartmentGroupByArgs['orderBy'] }
        : { orderBy?: WorkforceDepartmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkforceDepartmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkforceDepartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkforceDepartment model
   */
  readonly fields: WorkforceDepartmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkforceDepartment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkforceDepartmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends WorkforceTeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkforceTeamDefaultArgs<ExtArgs>>): Prisma__WorkforceTeamClient<$Result.GetResult<Prisma.$WorkforceTeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    manager<T extends WorkforceDepartment$managerArgs<ExtArgs> = {}>(args?: Subset<T, WorkforceDepartment$managerArgs<ExtArgs>>): Prisma__WorkforceProfileClient<$Result.GetResult<Prisma.$WorkforceProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    employees<T extends WorkforceDepartment$employeesArgs<ExtArgs> = {}>(args?: Subset<T, WorkforceDepartment$employeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkforceEmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tasks<T extends WorkforceDepartment$tasksArgs<ExtArgs> = {}>(args?: Subset<T, WorkforceDepartment$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkforceTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkforceDepartment model
   */
  interface WorkforceDepartmentFieldRefs {
    readonly id: FieldRef<"WorkforceDepartment", 'String'>
    readonly teamId: FieldRef<"WorkforceDepartment", 'String'>
    readonly name: FieldRef<"WorkforceDepartment", 'String'>
    readonly icon: FieldRef<"WorkforceDepartment", 'String'>
    readonly managerId: FieldRef<"WorkforceDepartment", 'String'>
    readonly createdAt: FieldRef<"WorkforceDepartment", 'DateTime'>
    readonly updatedAt: FieldRef<"WorkforceDepartment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkforceDepartment findUnique
   */
  export type WorkforceDepartmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceDepartment
     */
    select?: WorkforceDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceDepartment
     */
    omit?: WorkforceDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceDepartmentInclude<ExtArgs> | null
    /**
     * Filter, which WorkforceDepartment to fetch.
     */
    where: WorkforceDepartmentWhereUniqueInput
  }

  /**
   * WorkforceDepartment findUniqueOrThrow
   */
  export type WorkforceDepartmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceDepartment
     */
    select?: WorkforceDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceDepartment
     */
    omit?: WorkforceDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceDepartmentInclude<ExtArgs> | null
    /**
     * Filter, which WorkforceDepartment to fetch.
     */
    where: WorkforceDepartmentWhereUniqueInput
  }

  /**
   * WorkforceDepartment findFirst
   */
  export type WorkforceDepartmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceDepartment
     */
    select?: WorkforceDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceDepartment
     */
    omit?: WorkforceDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceDepartmentInclude<ExtArgs> | null
    /**
     * Filter, which WorkforceDepartment to fetch.
     */
    where?: WorkforceDepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkforceDepartments to fetch.
     */
    orderBy?: WorkforceDepartmentOrderByWithRelationInput | WorkforceDepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkforceDepartments.
     */
    cursor?: WorkforceDepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkforceDepartments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkforceDepartments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkforceDepartments.
     */
    distinct?: WorkforceDepartmentScalarFieldEnum | WorkforceDepartmentScalarFieldEnum[]
  }

  /**
   * WorkforceDepartment findFirstOrThrow
   */
  export type WorkforceDepartmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceDepartment
     */
    select?: WorkforceDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceDepartment
     */
    omit?: WorkforceDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceDepartmentInclude<ExtArgs> | null
    /**
     * Filter, which WorkforceDepartment to fetch.
     */
    where?: WorkforceDepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkforceDepartments to fetch.
     */
    orderBy?: WorkforceDepartmentOrderByWithRelationInput | WorkforceDepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkforceDepartments.
     */
    cursor?: WorkforceDepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkforceDepartments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkforceDepartments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkforceDepartments.
     */
    distinct?: WorkforceDepartmentScalarFieldEnum | WorkforceDepartmentScalarFieldEnum[]
  }

  /**
   * WorkforceDepartment findMany
   */
  export type WorkforceDepartmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceDepartment
     */
    select?: WorkforceDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceDepartment
     */
    omit?: WorkforceDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceDepartmentInclude<ExtArgs> | null
    /**
     * Filter, which WorkforceDepartments to fetch.
     */
    where?: WorkforceDepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkforceDepartments to fetch.
     */
    orderBy?: WorkforceDepartmentOrderByWithRelationInput | WorkforceDepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkforceDepartments.
     */
    cursor?: WorkforceDepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkforceDepartments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkforceDepartments.
     */
    skip?: number
    distinct?: WorkforceDepartmentScalarFieldEnum | WorkforceDepartmentScalarFieldEnum[]
  }

  /**
   * WorkforceDepartment create
   */
  export type WorkforceDepartmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceDepartment
     */
    select?: WorkforceDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceDepartment
     */
    omit?: WorkforceDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceDepartmentInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkforceDepartment.
     */
    data: XOR<WorkforceDepartmentCreateInput, WorkforceDepartmentUncheckedCreateInput>
  }

  /**
   * WorkforceDepartment createMany
   */
  export type WorkforceDepartmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkforceDepartments.
     */
    data: WorkforceDepartmentCreateManyInput | WorkforceDepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkforceDepartment createManyAndReturn
   */
  export type WorkforceDepartmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceDepartment
     */
    select?: WorkforceDepartmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceDepartment
     */
    omit?: WorkforceDepartmentOmit<ExtArgs> | null
    /**
     * The data used to create many WorkforceDepartments.
     */
    data: WorkforceDepartmentCreateManyInput | WorkforceDepartmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceDepartmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkforceDepartment update
   */
  export type WorkforceDepartmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceDepartment
     */
    select?: WorkforceDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceDepartment
     */
    omit?: WorkforceDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceDepartmentInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkforceDepartment.
     */
    data: XOR<WorkforceDepartmentUpdateInput, WorkforceDepartmentUncheckedUpdateInput>
    /**
     * Choose, which WorkforceDepartment to update.
     */
    where: WorkforceDepartmentWhereUniqueInput
  }

  /**
   * WorkforceDepartment updateMany
   */
  export type WorkforceDepartmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkforceDepartments.
     */
    data: XOR<WorkforceDepartmentUpdateManyMutationInput, WorkforceDepartmentUncheckedUpdateManyInput>
    /**
     * Filter which WorkforceDepartments to update
     */
    where?: WorkforceDepartmentWhereInput
    /**
     * Limit how many WorkforceDepartments to update.
     */
    limit?: number
  }

  /**
   * WorkforceDepartment updateManyAndReturn
   */
  export type WorkforceDepartmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceDepartment
     */
    select?: WorkforceDepartmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceDepartment
     */
    omit?: WorkforceDepartmentOmit<ExtArgs> | null
    /**
     * The data used to update WorkforceDepartments.
     */
    data: XOR<WorkforceDepartmentUpdateManyMutationInput, WorkforceDepartmentUncheckedUpdateManyInput>
    /**
     * Filter which WorkforceDepartments to update
     */
    where?: WorkforceDepartmentWhereInput
    /**
     * Limit how many WorkforceDepartments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceDepartmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkforceDepartment upsert
   */
  export type WorkforceDepartmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceDepartment
     */
    select?: WorkforceDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceDepartment
     */
    omit?: WorkforceDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceDepartmentInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkforceDepartment to update in case it exists.
     */
    where: WorkforceDepartmentWhereUniqueInput
    /**
     * In case the WorkforceDepartment found by the `where` argument doesn't exist, create a new WorkforceDepartment with this data.
     */
    create: XOR<WorkforceDepartmentCreateInput, WorkforceDepartmentUncheckedCreateInput>
    /**
     * In case the WorkforceDepartment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkforceDepartmentUpdateInput, WorkforceDepartmentUncheckedUpdateInput>
  }

  /**
   * WorkforceDepartment delete
   */
  export type WorkforceDepartmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceDepartment
     */
    select?: WorkforceDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceDepartment
     */
    omit?: WorkforceDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceDepartmentInclude<ExtArgs> | null
    /**
     * Filter which WorkforceDepartment to delete.
     */
    where: WorkforceDepartmentWhereUniqueInput
  }

  /**
   * WorkforceDepartment deleteMany
   */
  export type WorkforceDepartmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkforceDepartments to delete
     */
    where?: WorkforceDepartmentWhereInput
    /**
     * Limit how many WorkforceDepartments to delete.
     */
    limit?: number
  }

  /**
   * WorkforceDepartment.manager
   */
  export type WorkforceDepartment$managerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceProfile
     */
    select?: WorkforceProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceProfile
     */
    omit?: WorkforceProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceProfileInclude<ExtArgs> | null
    where?: WorkforceProfileWhereInput
  }

  /**
   * WorkforceDepartment.employees
   */
  export type WorkforceDepartment$employeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceEmployee
     */
    select?: WorkforceEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceEmployee
     */
    omit?: WorkforceEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceEmployeeInclude<ExtArgs> | null
    where?: WorkforceEmployeeWhereInput
    orderBy?: WorkforceEmployeeOrderByWithRelationInput | WorkforceEmployeeOrderByWithRelationInput[]
    cursor?: WorkforceEmployeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkforceEmployeeScalarFieldEnum | WorkforceEmployeeScalarFieldEnum[]
  }

  /**
   * WorkforceDepartment.tasks
   */
  export type WorkforceDepartment$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceTask
     */
    select?: WorkforceTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceTask
     */
    omit?: WorkforceTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceTaskInclude<ExtArgs> | null
    where?: WorkforceTaskWhereInput
    orderBy?: WorkforceTaskOrderByWithRelationInput | WorkforceTaskOrderByWithRelationInput[]
    cursor?: WorkforceTaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkforceTaskScalarFieldEnum | WorkforceTaskScalarFieldEnum[]
  }

  /**
   * WorkforceDepartment without action
   */
  export type WorkforceDepartmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceDepartment
     */
    select?: WorkforceDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceDepartment
     */
    omit?: WorkforceDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceDepartmentInclude<ExtArgs> | null
  }


  /**
   * Model WorkforceEmployee
   */

  export type AggregateWorkforceEmployee = {
    _count: WorkforceEmployeeCountAggregateOutputType | null
    _avg: WorkforceEmployeeAvgAggregateOutputType | null
    _sum: WorkforceEmployeeSumAggregateOutputType | null
    _min: WorkforceEmployeeMinAggregateOutputType | null
    _max: WorkforceEmployeeMaxAggregateOutputType | null
  }

  export type WorkforceEmployeeAvgAggregateOutputType = {
    salary: Decimal | null
  }

  export type WorkforceEmployeeSumAggregateOutputType = {
    salary: Decimal | null
  }

  export type WorkforceEmployeeMinAggregateOutputType = {
    id: string | null
    teamId: string | null
    profileId: string | null
    departmentId: string | null
    position: string | null
    joinDate: Date | null
    salary: Decimal | null
    status: $Enums.WorkforceEmployeeStatus | null
    managerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkforceEmployeeMaxAggregateOutputType = {
    id: string | null
    teamId: string | null
    profileId: string | null
    departmentId: string | null
    position: string | null
    joinDate: Date | null
    salary: Decimal | null
    status: $Enums.WorkforceEmployeeStatus | null
    managerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkforceEmployeeCountAggregateOutputType = {
    id: number
    teamId: number
    profileId: number
    departmentId: number
    position: number
    joinDate: number
    salary: number
    status: number
    managerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkforceEmployeeAvgAggregateInputType = {
    salary?: true
  }

  export type WorkforceEmployeeSumAggregateInputType = {
    salary?: true
  }

  export type WorkforceEmployeeMinAggregateInputType = {
    id?: true
    teamId?: true
    profileId?: true
    departmentId?: true
    position?: true
    joinDate?: true
    salary?: true
    status?: true
    managerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkforceEmployeeMaxAggregateInputType = {
    id?: true
    teamId?: true
    profileId?: true
    departmentId?: true
    position?: true
    joinDate?: true
    salary?: true
    status?: true
    managerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkforceEmployeeCountAggregateInputType = {
    id?: true
    teamId?: true
    profileId?: true
    departmentId?: true
    position?: true
    joinDate?: true
    salary?: true
    status?: true
    managerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkforceEmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkforceEmployee to aggregate.
     */
    where?: WorkforceEmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkforceEmployees to fetch.
     */
    orderBy?: WorkforceEmployeeOrderByWithRelationInput | WorkforceEmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkforceEmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkforceEmployees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkforceEmployees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkforceEmployees
    **/
    _count?: true | WorkforceEmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkforceEmployeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkforceEmployeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkforceEmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkforceEmployeeMaxAggregateInputType
  }

  export type GetWorkforceEmployeeAggregateType<T extends WorkforceEmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkforceEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkforceEmployee[P]>
      : GetScalarType<T[P], AggregateWorkforceEmployee[P]>
  }




  export type WorkforceEmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkforceEmployeeWhereInput
    orderBy?: WorkforceEmployeeOrderByWithAggregationInput | WorkforceEmployeeOrderByWithAggregationInput[]
    by: WorkforceEmployeeScalarFieldEnum[] | WorkforceEmployeeScalarFieldEnum
    having?: WorkforceEmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkforceEmployeeCountAggregateInputType | true
    _avg?: WorkforceEmployeeAvgAggregateInputType
    _sum?: WorkforceEmployeeSumAggregateInputType
    _min?: WorkforceEmployeeMinAggregateInputType
    _max?: WorkforceEmployeeMaxAggregateInputType
  }

  export type WorkforceEmployeeGroupByOutputType = {
    id: string
    teamId: string
    profileId: string
    departmentId: string | null
    position: string | null
    joinDate: Date | null
    salary: Decimal | null
    status: $Enums.WorkforceEmployeeStatus
    managerId: string | null
    createdAt: Date
    updatedAt: Date
    _count: WorkforceEmployeeCountAggregateOutputType | null
    _avg: WorkforceEmployeeAvgAggregateOutputType | null
    _sum: WorkforceEmployeeSumAggregateOutputType | null
    _min: WorkforceEmployeeMinAggregateOutputType | null
    _max: WorkforceEmployeeMaxAggregateOutputType | null
  }

  type GetWorkforceEmployeeGroupByPayload<T extends WorkforceEmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkforceEmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkforceEmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkforceEmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], WorkforceEmployeeGroupByOutputType[P]>
        }
      >
    >


  export type WorkforceEmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    profileId?: boolean
    departmentId?: boolean
    position?: boolean
    joinDate?: boolean
    salary?: boolean
    status?: boolean
    managerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    team?: boolean | WorkforceTeamDefaultArgs<ExtArgs>
    profile?: boolean | WorkforceProfileDefaultArgs<ExtArgs>
    department?: boolean | WorkforceEmployee$departmentArgs<ExtArgs>
    manager?: boolean | WorkforceEmployee$managerArgs<ExtArgs>
  }, ExtArgs["result"]["workforceEmployee"]>

  export type WorkforceEmployeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    profileId?: boolean
    departmentId?: boolean
    position?: boolean
    joinDate?: boolean
    salary?: boolean
    status?: boolean
    managerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    team?: boolean | WorkforceTeamDefaultArgs<ExtArgs>
    profile?: boolean | WorkforceProfileDefaultArgs<ExtArgs>
    department?: boolean | WorkforceEmployee$departmentArgs<ExtArgs>
    manager?: boolean | WorkforceEmployee$managerArgs<ExtArgs>
  }, ExtArgs["result"]["workforceEmployee"]>

  export type WorkforceEmployeeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    profileId?: boolean
    departmentId?: boolean
    position?: boolean
    joinDate?: boolean
    salary?: boolean
    status?: boolean
    managerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    team?: boolean | WorkforceTeamDefaultArgs<ExtArgs>
    profile?: boolean | WorkforceProfileDefaultArgs<ExtArgs>
    department?: boolean | WorkforceEmployee$departmentArgs<ExtArgs>
    manager?: boolean | WorkforceEmployee$managerArgs<ExtArgs>
  }, ExtArgs["result"]["workforceEmployee"]>

  export type WorkforceEmployeeSelectScalar = {
    id?: boolean
    teamId?: boolean
    profileId?: boolean
    departmentId?: boolean
    position?: boolean
    joinDate?: boolean
    salary?: boolean
    status?: boolean
    managerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkforceEmployeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "teamId" | "profileId" | "departmentId" | "position" | "joinDate" | "salary" | "status" | "managerId" | "createdAt" | "updatedAt", ExtArgs["result"]["workforceEmployee"]>
  export type WorkforceEmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | WorkforceTeamDefaultArgs<ExtArgs>
    profile?: boolean | WorkforceProfileDefaultArgs<ExtArgs>
    department?: boolean | WorkforceEmployee$departmentArgs<ExtArgs>
    manager?: boolean | WorkforceEmployee$managerArgs<ExtArgs>
  }
  export type WorkforceEmployeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | WorkforceTeamDefaultArgs<ExtArgs>
    profile?: boolean | WorkforceProfileDefaultArgs<ExtArgs>
    department?: boolean | WorkforceEmployee$departmentArgs<ExtArgs>
    manager?: boolean | WorkforceEmployee$managerArgs<ExtArgs>
  }
  export type WorkforceEmployeeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | WorkforceTeamDefaultArgs<ExtArgs>
    profile?: boolean | WorkforceProfileDefaultArgs<ExtArgs>
    department?: boolean | WorkforceEmployee$departmentArgs<ExtArgs>
    manager?: boolean | WorkforceEmployee$managerArgs<ExtArgs>
  }

  export type $WorkforceEmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkforceEmployee"
    objects: {
      team: Prisma.$WorkforceTeamPayload<ExtArgs>
      profile: Prisma.$WorkforceProfilePayload<ExtArgs>
      department: Prisma.$WorkforceDepartmentPayload<ExtArgs> | null
      manager: Prisma.$WorkforceProfilePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      teamId: string
      profileId: string
      departmentId: string | null
      position: string | null
      joinDate: Date | null
      salary: Prisma.Decimal | null
      status: $Enums.WorkforceEmployeeStatus
      managerId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workforceEmployee"]>
    composites: {}
  }

  type WorkforceEmployeeGetPayload<S extends boolean | null | undefined | WorkforceEmployeeDefaultArgs> = $Result.GetResult<Prisma.$WorkforceEmployeePayload, S>

  type WorkforceEmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkforceEmployeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkforceEmployeeCountAggregateInputType | true
    }

  export interface WorkforceEmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkforceEmployee'], meta: { name: 'WorkforceEmployee' } }
    /**
     * Find zero or one WorkforceEmployee that matches the filter.
     * @param {WorkforceEmployeeFindUniqueArgs} args - Arguments to find a WorkforceEmployee
     * @example
     * // Get one WorkforceEmployee
     * const workforceEmployee = await prisma.workforceEmployee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkforceEmployeeFindUniqueArgs>(args: SelectSubset<T, WorkforceEmployeeFindUniqueArgs<ExtArgs>>): Prisma__WorkforceEmployeeClient<$Result.GetResult<Prisma.$WorkforceEmployeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkforceEmployee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkforceEmployeeFindUniqueOrThrowArgs} args - Arguments to find a WorkforceEmployee
     * @example
     * // Get one WorkforceEmployee
     * const workforceEmployee = await prisma.workforceEmployee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkforceEmployeeFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkforceEmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkforceEmployeeClient<$Result.GetResult<Prisma.$WorkforceEmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkforceEmployee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceEmployeeFindFirstArgs} args - Arguments to find a WorkforceEmployee
     * @example
     * // Get one WorkforceEmployee
     * const workforceEmployee = await prisma.workforceEmployee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkforceEmployeeFindFirstArgs>(args?: SelectSubset<T, WorkforceEmployeeFindFirstArgs<ExtArgs>>): Prisma__WorkforceEmployeeClient<$Result.GetResult<Prisma.$WorkforceEmployeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkforceEmployee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceEmployeeFindFirstOrThrowArgs} args - Arguments to find a WorkforceEmployee
     * @example
     * // Get one WorkforceEmployee
     * const workforceEmployee = await prisma.workforceEmployee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkforceEmployeeFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkforceEmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkforceEmployeeClient<$Result.GetResult<Prisma.$WorkforceEmployeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkforceEmployees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceEmployeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkforceEmployees
     * const workforceEmployees = await prisma.workforceEmployee.findMany()
     * 
     * // Get first 10 WorkforceEmployees
     * const workforceEmployees = await prisma.workforceEmployee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workforceEmployeeWithIdOnly = await prisma.workforceEmployee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkforceEmployeeFindManyArgs>(args?: SelectSubset<T, WorkforceEmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkforceEmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkforceEmployee.
     * @param {WorkforceEmployeeCreateArgs} args - Arguments to create a WorkforceEmployee.
     * @example
     * // Create one WorkforceEmployee
     * const WorkforceEmployee = await prisma.workforceEmployee.create({
     *   data: {
     *     // ... data to create a WorkforceEmployee
     *   }
     * })
     * 
     */
    create<T extends WorkforceEmployeeCreateArgs>(args: SelectSubset<T, WorkforceEmployeeCreateArgs<ExtArgs>>): Prisma__WorkforceEmployeeClient<$Result.GetResult<Prisma.$WorkforceEmployeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkforceEmployees.
     * @param {WorkforceEmployeeCreateManyArgs} args - Arguments to create many WorkforceEmployees.
     * @example
     * // Create many WorkforceEmployees
     * const workforceEmployee = await prisma.workforceEmployee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkforceEmployeeCreateManyArgs>(args?: SelectSubset<T, WorkforceEmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkforceEmployees and returns the data saved in the database.
     * @param {WorkforceEmployeeCreateManyAndReturnArgs} args - Arguments to create many WorkforceEmployees.
     * @example
     * // Create many WorkforceEmployees
     * const workforceEmployee = await prisma.workforceEmployee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkforceEmployees and only return the `id`
     * const workforceEmployeeWithIdOnly = await prisma.workforceEmployee.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkforceEmployeeCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkforceEmployeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkforceEmployeePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkforceEmployee.
     * @param {WorkforceEmployeeDeleteArgs} args - Arguments to delete one WorkforceEmployee.
     * @example
     * // Delete one WorkforceEmployee
     * const WorkforceEmployee = await prisma.workforceEmployee.delete({
     *   where: {
     *     // ... filter to delete one WorkforceEmployee
     *   }
     * })
     * 
     */
    delete<T extends WorkforceEmployeeDeleteArgs>(args: SelectSubset<T, WorkforceEmployeeDeleteArgs<ExtArgs>>): Prisma__WorkforceEmployeeClient<$Result.GetResult<Prisma.$WorkforceEmployeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkforceEmployee.
     * @param {WorkforceEmployeeUpdateArgs} args - Arguments to update one WorkforceEmployee.
     * @example
     * // Update one WorkforceEmployee
     * const workforceEmployee = await prisma.workforceEmployee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkforceEmployeeUpdateArgs>(args: SelectSubset<T, WorkforceEmployeeUpdateArgs<ExtArgs>>): Prisma__WorkforceEmployeeClient<$Result.GetResult<Prisma.$WorkforceEmployeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkforceEmployees.
     * @param {WorkforceEmployeeDeleteManyArgs} args - Arguments to filter WorkforceEmployees to delete.
     * @example
     * // Delete a few WorkforceEmployees
     * const { count } = await prisma.workforceEmployee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkforceEmployeeDeleteManyArgs>(args?: SelectSubset<T, WorkforceEmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkforceEmployees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceEmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkforceEmployees
     * const workforceEmployee = await prisma.workforceEmployee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkforceEmployeeUpdateManyArgs>(args: SelectSubset<T, WorkforceEmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkforceEmployees and returns the data updated in the database.
     * @param {WorkforceEmployeeUpdateManyAndReturnArgs} args - Arguments to update many WorkforceEmployees.
     * @example
     * // Update many WorkforceEmployees
     * const workforceEmployee = await prisma.workforceEmployee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkforceEmployees and only return the `id`
     * const workforceEmployeeWithIdOnly = await prisma.workforceEmployee.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkforceEmployeeUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkforceEmployeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkforceEmployeePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkforceEmployee.
     * @param {WorkforceEmployeeUpsertArgs} args - Arguments to update or create a WorkforceEmployee.
     * @example
     * // Update or create a WorkforceEmployee
     * const workforceEmployee = await prisma.workforceEmployee.upsert({
     *   create: {
     *     // ... data to create a WorkforceEmployee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkforceEmployee we want to update
     *   }
     * })
     */
    upsert<T extends WorkforceEmployeeUpsertArgs>(args: SelectSubset<T, WorkforceEmployeeUpsertArgs<ExtArgs>>): Prisma__WorkforceEmployeeClient<$Result.GetResult<Prisma.$WorkforceEmployeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkforceEmployees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceEmployeeCountArgs} args - Arguments to filter WorkforceEmployees to count.
     * @example
     * // Count the number of WorkforceEmployees
     * const count = await prisma.workforceEmployee.count({
     *   where: {
     *     // ... the filter for the WorkforceEmployees we want to count
     *   }
     * })
    **/
    count<T extends WorkforceEmployeeCountArgs>(
      args?: Subset<T, WorkforceEmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkforceEmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkforceEmployee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceEmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkforceEmployeeAggregateArgs>(args: Subset<T, WorkforceEmployeeAggregateArgs>): Prisma.PrismaPromise<GetWorkforceEmployeeAggregateType<T>>

    /**
     * Group by WorkforceEmployee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceEmployeeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkforceEmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkforceEmployeeGroupByArgs['orderBy'] }
        : { orderBy?: WorkforceEmployeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkforceEmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkforceEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkforceEmployee model
   */
  readonly fields: WorkforceEmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkforceEmployee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkforceEmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends WorkforceTeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkforceTeamDefaultArgs<ExtArgs>>): Prisma__WorkforceTeamClient<$Result.GetResult<Prisma.$WorkforceTeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    profile<T extends WorkforceProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkforceProfileDefaultArgs<ExtArgs>>): Prisma__WorkforceProfileClient<$Result.GetResult<Prisma.$WorkforceProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    department<T extends WorkforceEmployee$departmentArgs<ExtArgs> = {}>(args?: Subset<T, WorkforceEmployee$departmentArgs<ExtArgs>>): Prisma__WorkforceDepartmentClient<$Result.GetResult<Prisma.$WorkforceDepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    manager<T extends WorkforceEmployee$managerArgs<ExtArgs> = {}>(args?: Subset<T, WorkforceEmployee$managerArgs<ExtArgs>>): Prisma__WorkforceProfileClient<$Result.GetResult<Prisma.$WorkforceProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkforceEmployee model
   */
  interface WorkforceEmployeeFieldRefs {
    readonly id: FieldRef<"WorkforceEmployee", 'String'>
    readonly teamId: FieldRef<"WorkforceEmployee", 'String'>
    readonly profileId: FieldRef<"WorkforceEmployee", 'String'>
    readonly departmentId: FieldRef<"WorkforceEmployee", 'String'>
    readonly position: FieldRef<"WorkforceEmployee", 'String'>
    readonly joinDate: FieldRef<"WorkforceEmployee", 'DateTime'>
    readonly salary: FieldRef<"WorkforceEmployee", 'Decimal'>
    readonly status: FieldRef<"WorkforceEmployee", 'WorkforceEmployeeStatus'>
    readonly managerId: FieldRef<"WorkforceEmployee", 'String'>
    readonly createdAt: FieldRef<"WorkforceEmployee", 'DateTime'>
    readonly updatedAt: FieldRef<"WorkforceEmployee", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkforceEmployee findUnique
   */
  export type WorkforceEmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceEmployee
     */
    select?: WorkforceEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceEmployee
     */
    omit?: WorkforceEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceEmployeeInclude<ExtArgs> | null
    /**
     * Filter, which WorkforceEmployee to fetch.
     */
    where: WorkforceEmployeeWhereUniqueInput
  }

  /**
   * WorkforceEmployee findUniqueOrThrow
   */
  export type WorkforceEmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceEmployee
     */
    select?: WorkforceEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceEmployee
     */
    omit?: WorkforceEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceEmployeeInclude<ExtArgs> | null
    /**
     * Filter, which WorkforceEmployee to fetch.
     */
    where: WorkforceEmployeeWhereUniqueInput
  }

  /**
   * WorkforceEmployee findFirst
   */
  export type WorkforceEmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceEmployee
     */
    select?: WorkforceEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceEmployee
     */
    omit?: WorkforceEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceEmployeeInclude<ExtArgs> | null
    /**
     * Filter, which WorkforceEmployee to fetch.
     */
    where?: WorkforceEmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkforceEmployees to fetch.
     */
    orderBy?: WorkforceEmployeeOrderByWithRelationInput | WorkforceEmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkforceEmployees.
     */
    cursor?: WorkforceEmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkforceEmployees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkforceEmployees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkforceEmployees.
     */
    distinct?: WorkforceEmployeeScalarFieldEnum | WorkforceEmployeeScalarFieldEnum[]
  }

  /**
   * WorkforceEmployee findFirstOrThrow
   */
  export type WorkforceEmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceEmployee
     */
    select?: WorkforceEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceEmployee
     */
    omit?: WorkforceEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceEmployeeInclude<ExtArgs> | null
    /**
     * Filter, which WorkforceEmployee to fetch.
     */
    where?: WorkforceEmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkforceEmployees to fetch.
     */
    orderBy?: WorkforceEmployeeOrderByWithRelationInput | WorkforceEmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkforceEmployees.
     */
    cursor?: WorkforceEmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkforceEmployees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkforceEmployees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkforceEmployees.
     */
    distinct?: WorkforceEmployeeScalarFieldEnum | WorkforceEmployeeScalarFieldEnum[]
  }

  /**
   * WorkforceEmployee findMany
   */
  export type WorkforceEmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceEmployee
     */
    select?: WorkforceEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceEmployee
     */
    omit?: WorkforceEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceEmployeeInclude<ExtArgs> | null
    /**
     * Filter, which WorkforceEmployees to fetch.
     */
    where?: WorkforceEmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkforceEmployees to fetch.
     */
    orderBy?: WorkforceEmployeeOrderByWithRelationInput | WorkforceEmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkforceEmployees.
     */
    cursor?: WorkforceEmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkforceEmployees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkforceEmployees.
     */
    skip?: number
    distinct?: WorkforceEmployeeScalarFieldEnum | WorkforceEmployeeScalarFieldEnum[]
  }

  /**
   * WorkforceEmployee create
   */
  export type WorkforceEmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceEmployee
     */
    select?: WorkforceEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceEmployee
     */
    omit?: WorkforceEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceEmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkforceEmployee.
     */
    data: XOR<WorkforceEmployeeCreateInput, WorkforceEmployeeUncheckedCreateInput>
  }

  /**
   * WorkforceEmployee createMany
   */
  export type WorkforceEmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkforceEmployees.
     */
    data: WorkforceEmployeeCreateManyInput | WorkforceEmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkforceEmployee createManyAndReturn
   */
  export type WorkforceEmployeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceEmployee
     */
    select?: WorkforceEmployeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceEmployee
     */
    omit?: WorkforceEmployeeOmit<ExtArgs> | null
    /**
     * The data used to create many WorkforceEmployees.
     */
    data: WorkforceEmployeeCreateManyInput | WorkforceEmployeeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceEmployeeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkforceEmployee update
   */
  export type WorkforceEmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceEmployee
     */
    select?: WorkforceEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceEmployee
     */
    omit?: WorkforceEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceEmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkforceEmployee.
     */
    data: XOR<WorkforceEmployeeUpdateInput, WorkforceEmployeeUncheckedUpdateInput>
    /**
     * Choose, which WorkforceEmployee to update.
     */
    where: WorkforceEmployeeWhereUniqueInput
  }

  /**
   * WorkforceEmployee updateMany
   */
  export type WorkforceEmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkforceEmployees.
     */
    data: XOR<WorkforceEmployeeUpdateManyMutationInput, WorkforceEmployeeUncheckedUpdateManyInput>
    /**
     * Filter which WorkforceEmployees to update
     */
    where?: WorkforceEmployeeWhereInput
    /**
     * Limit how many WorkforceEmployees to update.
     */
    limit?: number
  }

  /**
   * WorkforceEmployee updateManyAndReturn
   */
  export type WorkforceEmployeeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceEmployee
     */
    select?: WorkforceEmployeeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceEmployee
     */
    omit?: WorkforceEmployeeOmit<ExtArgs> | null
    /**
     * The data used to update WorkforceEmployees.
     */
    data: XOR<WorkforceEmployeeUpdateManyMutationInput, WorkforceEmployeeUncheckedUpdateManyInput>
    /**
     * Filter which WorkforceEmployees to update
     */
    where?: WorkforceEmployeeWhereInput
    /**
     * Limit how many WorkforceEmployees to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceEmployeeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkforceEmployee upsert
   */
  export type WorkforceEmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceEmployee
     */
    select?: WorkforceEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceEmployee
     */
    omit?: WorkforceEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceEmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkforceEmployee to update in case it exists.
     */
    where: WorkforceEmployeeWhereUniqueInput
    /**
     * In case the WorkforceEmployee found by the `where` argument doesn't exist, create a new WorkforceEmployee with this data.
     */
    create: XOR<WorkforceEmployeeCreateInput, WorkforceEmployeeUncheckedCreateInput>
    /**
     * In case the WorkforceEmployee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkforceEmployeeUpdateInput, WorkforceEmployeeUncheckedUpdateInput>
  }

  /**
   * WorkforceEmployee delete
   */
  export type WorkforceEmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceEmployee
     */
    select?: WorkforceEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceEmployee
     */
    omit?: WorkforceEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceEmployeeInclude<ExtArgs> | null
    /**
     * Filter which WorkforceEmployee to delete.
     */
    where: WorkforceEmployeeWhereUniqueInput
  }

  /**
   * WorkforceEmployee deleteMany
   */
  export type WorkforceEmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkforceEmployees to delete
     */
    where?: WorkforceEmployeeWhereInput
    /**
     * Limit how many WorkforceEmployees to delete.
     */
    limit?: number
  }

  /**
   * WorkforceEmployee.department
   */
  export type WorkforceEmployee$departmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceDepartment
     */
    select?: WorkforceDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceDepartment
     */
    omit?: WorkforceDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceDepartmentInclude<ExtArgs> | null
    where?: WorkforceDepartmentWhereInput
  }

  /**
   * WorkforceEmployee.manager
   */
  export type WorkforceEmployee$managerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceProfile
     */
    select?: WorkforceProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceProfile
     */
    omit?: WorkforceProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceProfileInclude<ExtArgs> | null
    where?: WorkforceProfileWhereInput
  }

  /**
   * WorkforceEmployee without action
   */
  export type WorkforceEmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceEmployee
     */
    select?: WorkforceEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceEmployee
     */
    omit?: WorkforceEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceEmployeeInclude<ExtArgs> | null
  }


  /**
   * Model WorkforceTask
   */

  export type AggregateWorkforceTask = {
    _count: WorkforceTaskCountAggregateOutputType | null
    _min: WorkforceTaskMinAggregateOutputType | null
    _max: WorkforceTaskMaxAggregateOutputType | null
  }

  export type WorkforceTaskMinAggregateOutputType = {
    id: string | null
    teamId: string | null
    title: string | null
    description: string | null
    priority: $Enums.WorkforceTaskPriority | null
    status: $Enums.WorkforceTaskStatus | null
    departmentId: string | null
    assigneeId: string | null
    createdById: string | null
    dueDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkforceTaskMaxAggregateOutputType = {
    id: string | null
    teamId: string | null
    title: string | null
    description: string | null
    priority: $Enums.WorkforceTaskPriority | null
    status: $Enums.WorkforceTaskStatus | null
    departmentId: string | null
    assigneeId: string | null
    createdById: string | null
    dueDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkforceTaskCountAggregateOutputType = {
    id: number
    teamId: number
    title: number
    description: number
    priority: number
    status: number
    departmentId: number
    assigneeId: number
    createdById: number
    dueDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkforceTaskMinAggregateInputType = {
    id?: true
    teamId?: true
    title?: true
    description?: true
    priority?: true
    status?: true
    departmentId?: true
    assigneeId?: true
    createdById?: true
    dueDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkforceTaskMaxAggregateInputType = {
    id?: true
    teamId?: true
    title?: true
    description?: true
    priority?: true
    status?: true
    departmentId?: true
    assigneeId?: true
    createdById?: true
    dueDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkforceTaskCountAggregateInputType = {
    id?: true
    teamId?: true
    title?: true
    description?: true
    priority?: true
    status?: true
    departmentId?: true
    assigneeId?: true
    createdById?: true
    dueDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkforceTaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkforceTask to aggregate.
     */
    where?: WorkforceTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkforceTasks to fetch.
     */
    orderBy?: WorkforceTaskOrderByWithRelationInput | WorkforceTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkforceTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkforceTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkforceTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkforceTasks
    **/
    _count?: true | WorkforceTaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkforceTaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkforceTaskMaxAggregateInputType
  }

  export type GetWorkforceTaskAggregateType<T extends WorkforceTaskAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkforceTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkforceTask[P]>
      : GetScalarType<T[P], AggregateWorkforceTask[P]>
  }




  export type WorkforceTaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkforceTaskWhereInput
    orderBy?: WorkforceTaskOrderByWithAggregationInput | WorkforceTaskOrderByWithAggregationInput[]
    by: WorkforceTaskScalarFieldEnum[] | WorkforceTaskScalarFieldEnum
    having?: WorkforceTaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkforceTaskCountAggregateInputType | true
    _min?: WorkforceTaskMinAggregateInputType
    _max?: WorkforceTaskMaxAggregateInputType
  }

  export type WorkforceTaskGroupByOutputType = {
    id: string
    teamId: string
    title: string
    description: string | null
    priority: $Enums.WorkforceTaskPriority
    status: $Enums.WorkforceTaskStatus
    departmentId: string | null
    assigneeId: string | null
    createdById: string | null
    dueDate: Date | null
    createdAt: Date
    updatedAt: Date
    _count: WorkforceTaskCountAggregateOutputType | null
    _min: WorkforceTaskMinAggregateOutputType | null
    _max: WorkforceTaskMaxAggregateOutputType | null
  }

  type GetWorkforceTaskGroupByPayload<T extends WorkforceTaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkforceTaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkforceTaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkforceTaskGroupByOutputType[P]>
            : GetScalarType<T[P], WorkforceTaskGroupByOutputType[P]>
        }
      >
    >


  export type WorkforceTaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    title?: boolean
    description?: boolean
    priority?: boolean
    status?: boolean
    departmentId?: boolean
    assigneeId?: boolean
    createdById?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    team?: boolean | WorkforceTeamDefaultArgs<ExtArgs>
    department?: boolean | WorkforceTask$departmentArgs<ExtArgs>
    assignee?: boolean | WorkforceTask$assigneeArgs<ExtArgs>
    creator?: boolean | WorkforceTask$creatorArgs<ExtArgs>
  }, ExtArgs["result"]["workforceTask"]>

  export type WorkforceTaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    title?: boolean
    description?: boolean
    priority?: boolean
    status?: boolean
    departmentId?: boolean
    assigneeId?: boolean
    createdById?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    team?: boolean | WorkforceTeamDefaultArgs<ExtArgs>
    department?: boolean | WorkforceTask$departmentArgs<ExtArgs>
    assignee?: boolean | WorkforceTask$assigneeArgs<ExtArgs>
    creator?: boolean | WorkforceTask$creatorArgs<ExtArgs>
  }, ExtArgs["result"]["workforceTask"]>

  export type WorkforceTaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    title?: boolean
    description?: boolean
    priority?: boolean
    status?: boolean
    departmentId?: boolean
    assigneeId?: boolean
    createdById?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    team?: boolean | WorkforceTeamDefaultArgs<ExtArgs>
    department?: boolean | WorkforceTask$departmentArgs<ExtArgs>
    assignee?: boolean | WorkforceTask$assigneeArgs<ExtArgs>
    creator?: boolean | WorkforceTask$creatorArgs<ExtArgs>
  }, ExtArgs["result"]["workforceTask"]>

  export type WorkforceTaskSelectScalar = {
    id?: boolean
    teamId?: boolean
    title?: boolean
    description?: boolean
    priority?: boolean
    status?: boolean
    departmentId?: boolean
    assigneeId?: boolean
    createdById?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkforceTaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "teamId" | "title" | "description" | "priority" | "status" | "departmentId" | "assigneeId" | "createdById" | "dueDate" | "createdAt" | "updatedAt", ExtArgs["result"]["workforceTask"]>
  export type WorkforceTaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | WorkforceTeamDefaultArgs<ExtArgs>
    department?: boolean | WorkforceTask$departmentArgs<ExtArgs>
    assignee?: boolean | WorkforceTask$assigneeArgs<ExtArgs>
    creator?: boolean | WorkforceTask$creatorArgs<ExtArgs>
  }
  export type WorkforceTaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | WorkforceTeamDefaultArgs<ExtArgs>
    department?: boolean | WorkforceTask$departmentArgs<ExtArgs>
    assignee?: boolean | WorkforceTask$assigneeArgs<ExtArgs>
    creator?: boolean | WorkforceTask$creatorArgs<ExtArgs>
  }
  export type WorkforceTaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | WorkforceTeamDefaultArgs<ExtArgs>
    department?: boolean | WorkforceTask$departmentArgs<ExtArgs>
    assignee?: boolean | WorkforceTask$assigneeArgs<ExtArgs>
    creator?: boolean | WorkforceTask$creatorArgs<ExtArgs>
  }

  export type $WorkforceTaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkforceTask"
    objects: {
      team: Prisma.$WorkforceTeamPayload<ExtArgs>
      department: Prisma.$WorkforceDepartmentPayload<ExtArgs> | null
      assignee: Prisma.$WorkforceProfilePayload<ExtArgs> | null
      creator: Prisma.$WorkforceProfilePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      teamId: string
      title: string
      description: string | null
      priority: $Enums.WorkforceTaskPriority
      status: $Enums.WorkforceTaskStatus
      departmentId: string | null
      assigneeId: string | null
      createdById: string | null
      dueDate: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workforceTask"]>
    composites: {}
  }

  type WorkforceTaskGetPayload<S extends boolean | null | undefined | WorkforceTaskDefaultArgs> = $Result.GetResult<Prisma.$WorkforceTaskPayload, S>

  type WorkforceTaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkforceTaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkforceTaskCountAggregateInputType | true
    }

  export interface WorkforceTaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkforceTask'], meta: { name: 'WorkforceTask' } }
    /**
     * Find zero or one WorkforceTask that matches the filter.
     * @param {WorkforceTaskFindUniqueArgs} args - Arguments to find a WorkforceTask
     * @example
     * // Get one WorkforceTask
     * const workforceTask = await prisma.workforceTask.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkforceTaskFindUniqueArgs>(args: SelectSubset<T, WorkforceTaskFindUniqueArgs<ExtArgs>>): Prisma__WorkforceTaskClient<$Result.GetResult<Prisma.$WorkforceTaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkforceTask that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkforceTaskFindUniqueOrThrowArgs} args - Arguments to find a WorkforceTask
     * @example
     * // Get one WorkforceTask
     * const workforceTask = await prisma.workforceTask.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkforceTaskFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkforceTaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkforceTaskClient<$Result.GetResult<Prisma.$WorkforceTaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkforceTask that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceTaskFindFirstArgs} args - Arguments to find a WorkforceTask
     * @example
     * // Get one WorkforceTask
     * const workforceTask = await prisma.workforceTask.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkforceTaskFindFirstArgs>(args?: SelectSubset<T, WorkforceTaskFindFirstArgs<ExtArgs>>): Prisma__WorkforceTaskClient<$Result.GetResult<Prisma.$WorkforceTaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkforceTask that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceTaskFindFirstOrThrowArgs} args - Arguments to find a WorkforceTask
     * @example
     * // Get one WorkforceTask
     * const workforceTask = await prisma.workforceTask.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkforceTaskFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkforceTaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkforceTaskClient<$Result.GetResult<Prisma.$WorkforceTaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkforceTasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceTaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkforceTasks
     * const workforceTasks = await prisma.workforceTask.findMany()
     * 
     * // Get first 10 WorkforceTasks
     * const workforceTasks = await prisma.workforceTask.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workforceTaskWithIdOnly = await prisma.workforceTask.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkforceTaskFindManyArgs>(args?: SelectSubset<T, WorkforceTaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkforceTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkforceTask.
     * @param {WorkforceTaskCreateArgs} args - Arguments to create a WorkforceTask.
     * @example
     * // Create one WorkforceTask
     * const WorkforceTask = await prisma.workforceTask.create({
     *   data: {
     *     // ... data to create a WorkforceTask
     *   }
     * })
     * 
     */
    create<T extends WorkforceTaskCreateArgs>(args: SelectSubset<T, WorkforceTaskCreateArgs<ExtArgs>>): Prisma__WorkforceTaskClient<$Result.GetResult<Prisma.$WorkforceTaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkforceTasks.
     * @param {WorkforceTaskCreateManyArgs} args - Arguments to create many WorkforceTasks.
     * @example
     * // Create many WorkforceTasks
     * const workforceTask = await prisma.workforceTask.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkforceTaskCreateManyArgs>(args?: SelectSubset<T, WorkforceTaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkforceTasks and returns the data saved in the database.
     * @param {WorkforceTaskCreateManyAndReturnArgs} args - Arguments to create many WorkforceTasks.
     * @example
     * // Create many WorkforceTasks
     * const workforceTask = await prisma.workforceTask.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkforceTasks and only return the `id`
     * const workforceTaskWithIdOnly = await prisma.workforceTask.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkforceTaskCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkforceTaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkforceTaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkforceTask.
     * @param {WorkforceTaskDeleteArgs} args - Arguments to delete one WorkforceTask.
     * @example
     * // Delete one WorkforceTask
     * const WorkforceTask = await prisma.workforceTask.delete({
     *   where: {
     *     // ... filter to delete one WorkforceTask
     *   }
     * })
     * 
     */
    delete<T extends WorkforceTaskDeleteArgs>(args: SelectSubset<T, WorkforceTaskDeleteArgs<ExtArgs>>): Prisma__WorkforceTaskClient<$Result.GetResult<Prisma.$WorkforceTaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkforceTask.
     * @param {WorkforceTaskUpdateArgs} args - Arguments to update one WorkforceTask.
     * @example
     * // Update one WorkforceTask
     * const workforceTask = await prisma.workforceTask.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkforceTaskUpdateArgs>(args: SelectSubset<T, WorkforceTaskUpdateArgs<ExtArgs>>): Prisma__WorkforceTaskClient<$Result.GetResult<Prisma.$WorkforceTaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkforceTasks.
     * @param {WorkforceTaskDeleteManyArgs} args - Arguments to filter WorkforceTasks to delete.
     * @example
     * // Delete a few WorkforceTasks
     * const { count } = await prisma.workforceTask.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkforceTaskDeleteManyArgs>(args?: SelectSubset<T, WorkforceTaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkforceTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceTaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkforceTasks
     * const workforceTask = await prisma.workforceTask.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkforceTaskUpdateManyArgs>(args: SelectSubset<T, WorkforceTaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkforceTasks and returns the data updated in the database.
     * @param {WorkforceTaskUpdateManyAndReturnArgs} args - Arguments to update many WorkforceTasks.
     * @example
     * // Update many WorkforceTasks
     * const workforceTask = await prisma.workforceTask.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkforceTasks and only return the `id`
     * const workforceTaskWithIdOnly = await prisma.workforceTask.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkforceTaskUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkforceTaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkforceTaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkforceTask.
     * @param {WorkforceTaskUpsertArgs} args - Arguments to update or create a WorkforceTask.
     * @example
     * // Update or create a WorkforceTask
     * const workforceTask = await prisma.workforceTask.upsert({
     *   create: {
     *     // ... data to create a WorkforceTask
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkforceTask we want to update
     *   }
     * })
     */
    upsert<T extends WorkforceTaskUpsertArgs>(args: SelectSubset<T, WorkforceTaskUpsertArgs<ExtArgs>>): Prisma__WorkforceTaskClient<$Result.GetResult<Prisma.$WorkforceTaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkforceTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceTaskCountArgs} args - Arguments to filter WorkforceTasks to count.
     * @example
     * // Count the number of WorkforceTasks
     * const count = await prisma.workforceTask.count({
     *   where: {
     *     // ... the filter for the WorkforceTasks we want to count
     *   }
     * })
    **/
    count<T extends WorkforceTaskCountArgs>(
      args?: Subset<T, WorkforceTaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkforceTaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkforceTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceTaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkforceTaskAggregateArgs>(args: Subset<T, WorkforceTaskAggregateArgs>): Prisma.PrismaPromise<GetWorkforceTaskAggregateType<T>>

    /**
     * Group by WorkforceTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceTaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkforceTaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkforceTaskGroupByArgs['orderBy'] }
        : { orderBy?: WorkforceTaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkforceTaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkforceTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkforceTask model
   */
  readonly fields: WorkforceTaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkforceTask.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkforceTaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends WorkforceTeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkforceTeamDefaultArgs<ExtArgs>>): Prisma__WorkforceTeamClient<$Result.GetResult<Prisma.$WorkforceTeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    department<T extends WorkforceTask$departmentArgs<ExtArgs> = {}>(args?: Subset<T, WorkforceTask$departmentArgs<ExtArgs>>): Prisma__WorkforceDepartmentClient<$Result.GetResult<Prisma.$WorkforceDepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    assignee<T extends WorkforceTask$assigneeArgs<ExtArgs> = {}>(args?: Subset<T, WorkforceTask$assigneeArgs<ExtArgs>>): Prisma__WorkforceProfileClient<$Result.GetResult<Prisma.$WorkforceProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    creator<T extends WorkforceTask$creatorArgs<ExtArgs> = {}>(args?: Subset<T, WorkforceTask$creatorArgs<ExtArgs>>): Prisma__WorkforceProfileClient<$Result.GetResult<Prisma.$WorkforceProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkforceTask model
   */
  interface WorkforceTaskFieldRefs {
    readonly id: FieldRef<"WorkforceTask", 'String'>
    readonly teamId: FieldRef<"WorkforceTask", 'String'>
    readonly title: FieldRef<"WorkforceTask", 'String'>
    readonly description: FieldRef<"WorkforceTask", 'String'>
    readonly priority: FieldRef<"WorkforceTask", 'WorkforceTaskPriority'>
    readonly status: FieldRef<"WorkforceTask", 'WorkforceTaskStatus'>
    readonly departmentId: FieldRef<"WorkforceTask", 'String'>
    readonly assigneeId: FieldRef<"WorkforceTask", 'String'>
    readonly createdById: FieldRef<"WorkforceTask", 'String'>
    readonly dueDate: FieldRef<"WorkforceTask", 'DateTime'>
    readonly createdAt: FieldRef<"WorkforceTask", 'DateTime'>
    readonly updatedAt: FieldRef<"WorkforceTask", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkforceTask findUnique
   */
  export type WorkforceTaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceTask
     */
    select?: WorkforceTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceTask
     */
    omit?: WorkforceTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceTaskInclude<ExtArgs> | null
    /**
     * Filter, which WorkforceTask to fetch.
     */
    where: WorkforceTaskWhereUniqueInput
  }

  /**
   * WorkforceTask findUniqueOrThrow
   */
  export type WorkforceTaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceTask
     */
    select?: WorkforceTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceTask
     */
    omit?: WorkforceTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceTaskInclude<ExtArgs> | null
    /**
     * Filter, which WorkforceTask to fetch.
     */
    where: WorkforceTaskWhereUniqueInput
  }

  /**
   * WorkforceTask findFirst
   */
  export type WorkforceTaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceTask
     */
    select?: WorkforceTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceTask
     */
    omit?: WorkforceTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceTaskInclude<ExtArgs> | null
    /**
     * Filter, which WorkforceTask to fetch.
     */
    where?: WorkforceTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkforceTasks to fetch.
     */
    orderBy?: WorkforceTaskOrderByWithRelationInput | WorkforceTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkforceTasks.
     */
    cursor?: WorkforceTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkforceTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkforceTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkforceTasks.
     */
    distinct?: WorkforceTaskScalarFieldEnum | WorkforceTaskScalarFieldEnum[]
  }

  /**
   * WorkforceTask findFirstOrThrow
   */
  export type WorkforceTaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceTask
     */
    select?: WorkforceTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceTask
     */
    omit?: WorkforceTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceTaskInclude<ExtArgs> | null
    /**
     * Filter, which WorkforceTask to fetch.
     */
    where?: WorkforceTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkforceTasks to fetch.
     */
    orderBy?: WorkforceTaskOrderByWithRelationInput | WorkforceTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkforceTasks.
     */
    cursor?: WorkforceTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkforceTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkforceTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkforceTasks.
     */
    distinct?: WorkforceTaskScalarFieldEnum | WorkforceTaskScalarFieldEnum[]
  }

  /**
   * WorkforceTask findMany
   */
  export type WorkforceTaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceTask
     */
    select?: WorkforceTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceTask
     */
    omit?: WorkforceTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceTaskInclude<ExtArgs> | null
    /**
     * Filter, which WorkforceTasks to fetch.
     */
    where?: WorkforceTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkforceTasks to fetch.
     */
    orderBy?: WorkforceTaskOrderByWithRelationInput | WorkforceTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkforceTasks.
     */
    cursor?: WorkforceTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkforceTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkforceTasks.
     */
    skip?: number
    distinct?: WorkforceTaskScalarFieldEnum | WorkforceTaskScalarFieldEnum[]
  }

  /**
   * WorkforceTask create
   */
  export type WorkforceTaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceTask
     */
    select?: WorkforceTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceTask
     */
    omit?: WorkforceTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceTaskInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkforceTask.
     */
    data: XOR<WorkforceTaskCreateInput, WorkforceTaskUncheckedCreateInput>
  }

  /**
   * WorkforceTask createMany
   */
  export type WorkforceTaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkforceTasks.
     */
    data: WorkforceTaskCreateManyInput | WorkforceTaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkforceTask createManyAndReturn
   */
  export type WorkforceTaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceTask
     */
    select?: WorkforceTaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceTask
     */
    omit?: WorkforceTaskOmit<ExtArgs> | null
    /**
     * The data used to create many WorkforceTasks.
     */
    data: WorkforceTaskCreateManyInput | WorkforceTaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceTaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkforceTask update
   */
  export type WorkforceTaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceTask
     */
    select?: WorkforceTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceTask
     */
    omit?: WorkforceTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceTaskInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkforceTask.
     */
    data: XOR<WorkforceTaskUpdateInput, WorkforceTaskUncheckedUpdateInput>
    /**
     * Choose, which WorkforceTask to update.
     */
    where: WorkforceTaskWhereUniqueInput
  }

  /**
   * WorkforceTask updateMany
   */
  export type WorkforceTaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkforceTasks.
     */
    data: XOR<WorkforceTaskUpdateManyMutationInput, WorkforceTaskUncheckedUpdateManyInput>
    /**
     * Filter which WorkforceTasks to update
     */
    where?: WorkforceTaskWhereInput
    /**
     * Limit how many WorkforceTasks to update.
     */
    limit?: number
  }

  /**
   * WorkforceTask updateManyAndReturn
   */
  export type WorkforceTaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceTask
     */
    select?: WorkforceTaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceTask
     */
    omit?: WorkforceTaskOmit<ExtArgs> | null
    /**
     * The data used to update WorkforceTasks.
     */
    data: XOR<WorkforceTaskUpdateManyMutationInput, WorkforceTaskUncheckedUpdateManyInput>
    /**
     * Filter which WorkforceTasks to update
     */
    where?: WorkforceTaskWhereInput
    /**
     * Limit how many WorkforceTasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceTaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkforceTask upsert
   */
  export type WorkforceTaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceTask
     */
    select?: WorkforceTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceTask
     */
    omit?: WorkforceTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceTaskInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkforceTask to update in case it exists.
     */
    where: WorkforceTaskWhereUniqueInput
    /**
     * In case the WorkforceTask found by the `where` argument doesn't exist, create a new WorkforceTask with this data.
     */
    create: XOR<WorkforceTaskCreateInput, WorkforceTaskUncheckedCreateInput>
    /**
     * In case the WorkforceTask was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkforceTaskUpdateInput, WorkforceTaskUncheckedUpdateInput>
  }

  /**
   * WorkforceTask delete
   */
  export type WorkforceTaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceTask
     */
    select?: WorkforceTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceTask
     */
    omit?: WorkforceTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceTaskInclude<ExtArgs> | null
    /**
     * Filter which WorkforceTask to delete.
     */
    where: WorkforceTaskWhereUniqueInput
  }

  /**
   * WorkforceTask deleteMany
   */
  export type WorkforceTaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkforceTasks to delete
     */
    where?: WorkforceTaskWhereInput
    /**
     * Limit how many WorkforceTasks to delete.
     */
    limit?: number
  }

  /**
   * WorkforceTask.department
   */
  export type WorkforceTask$departmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceDepartment
     */
    select?: WorkforceDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceDepartment
     */
    omit?: WorkforceDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceDepartmentInclude<ExtArgs> | null
    where?: WorkforceDepartmentWhereInput
  }

  /**
   * WorkforceTask.assignee
   */
  export type WorkforceTask$assigneeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceProfile
     */
    select?: WorkforceProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceProfile
     */
    omit?: WorkforceProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceProfileInclude<ExtArgs> | null
    where?: WorkforceProfileWhereInput
  }

  /**
   * WorkforceTask.creator
   */
  export type WorkforceTask$creatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceProfile
     */
    select?: WorkforceProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceProfile
     */
    omit?: WorkforceProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceProfileInclude<ExtArgs> | null
    where?: WorkforceProfileWhereInput
  }

  /**
   * WorkforceTask without action
   */
  export type WorkforceTaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceTask
     */
    select?: WorkforceTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceTask
     */
    omit?: WorkforceTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceTaskInclude<ExtArgs> | null
  }


  /**
   * Model WorkforceInvitation
   */

  export type AggregateWorkforceInvitation = {
    _count: WorkforceInvitationCountAggregateOutputType | null
    _min: WorkforceInvitationMinAggregateOutputType | null
    _max: WorkforceInvitationMaxAggregateOutputType | null
  }

  export type WorkforceInvitationMinAggregateOutputType = {
    id: string | null
    teamId: string | null
    email: string | null
    role: string | null
    token: string | null
    expiresAt: Date | null
    invitedById: string | null
    acceptedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkforceInvitationMaxAggregateOutputType = {
    id: string | null
    teamId: string | null
    email: string | null
    role: string | null
    token: string | null
    expiresAt: Date | null
    invitedById: string | null
    acceptedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkforceInvitationCountAggregateOutputType = {
    id: number
    teamId: number
    email: number
    role: number
    token: number
    expiresAt: number
    invitedById: number
    acceptedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkforceInvitationMinAggregateInputType = {
    id?: true
    teamId?: true
    email?: true
    role?: true
    token?: true
    expiresAt?: true
    invitedById?: true
    acceptedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkforceInvitationMaxAggregateInputType = {
    id?: true
    teamId?: true
    email?: true
    role?: true
    token?: true
    expiresAt?: true
    invitedById?: true
    acceptedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkforceInvitationCountAggregateInputType = {
    id?: true
    teamId?: true
    email?: true
    role?: true
    token?: true
    expiresAt?: true
    invitedById?: true
    acceptedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkforceInvitationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkforceInvitation to aggregate.
     */
    where?: WorkforceInvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkforceInvitations to fetch.
     */
    orderBy?: WorkforceInvitationOrderByWithRelationInput | WorkforceInvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkforceInvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkforceInvitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkforceInvitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkforceInvitations
    **/
    _count?: true | WorkforceInvitationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkforceInvitationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkforceInvitationMaxAggregateInputType
  }

  export type GetWorkforceInvitationAggregateType<T extends WorkforceInvitationAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkforceInvitation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkforceInvitation[P]>
      : GetScalarType<T[P], AggregateWorkforceInvitation[P]>
  }




  export type WorkforceInvitationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkforceInvitationWhereInput
    orderBy?: WorkforceInvitationOrderByWithAggregationInput | WorkforceInvitationOrderByWithAggregationInput[]
    by: WorkforceInvitationScalarFieldEnum[] | WorkforceInvitationScalarFieldEnum
    having?: WorkforceInvitationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkforceInvitationCountAggregateInputType | true
    _min?: WorkforceInvitationMinAggregateInputType
    _max?: WorkforceInvitationMaxAggregateInputType
  }

  export type WorkforceInvitationGroupByOutputType = {
    id: string
    teamId: string
    email: string
    role: string
    token: string
    expiresAt: Date | null
    invitedById: string
    acceptedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: WorkforceInvitationCountAggregateOutputType | null
    _min: WorkforceInvitationMinAggregateOutputType | null
    _max: WorkforceInvitationMaxAggregateOutputType | null
  }

  type GetWorkforceInvitationGroupByPayload<T extends WorkforceInvitationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkforceInvitationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkforceInvitationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkforceInvitationGroupByOutputType[P]>
            : GetScalarType<T[P], WorkforceInvitationGroupByOutputType[P]>
        }
      >
    >


  export type WorkforceInvitationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    email?: boolean
    role?: boolean
    token?: boolean
    expiresAt?: boolean
    invitedById?: boolean
    acceptedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    team?: boolean | WorkforceTeamDefaultArgs<ExtArgs>
    invitedBy?: boolean | WorkforceProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workforceInvitation"]>

  export type WorkforceInvitationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    email?: boolean
    role?: boolean
    token?: boolean
    expiresAt?: boolean
    invitedById?: boolean
    acceptedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    team?: boolean | WorkforceTeamDefaultArgs<ExtArgs>
    invitedBy?: boolean | WorkforceProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workforceInvitation"]>

  export type WorkforceInvitationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    email?: boolean
    role?: boolean
    token?: boolean
    expiresAt?: boolean
    invitedById?: boolean
    acceptedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    team?: boolean | WorkforceTeamDefaultArgs<ExtArgs>
    invitedBy?: boolean | WorkforceProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workforceInvitation"]>

  export type WorkforceInvitationSelectScalar = {
    id?: boolean
    teamId?: boolean
    email?: boolean
    role?: boolean
    token?: boolean
    expiresAt?: boolean
    invitedById?: boolean
    acceptedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkforceInvitationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "teamId" | "email" | "role" | "token" | "expiresAt" | "invitedById" | "acceptedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["workforceInvitation"]>
  export type WorkforceInvitationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | WorkforceTeamDefaultArgs<ExtArgs>
    invitedBy?: boolean | WorkforceProfileDefaultArgs<ExtArgs>
  }
  export type WorkforceInvitationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | WorkforceTeamDefaultArgs<ExtArgs>
    invitedBy?: boolean | WorkforceProfileDefaultArgs<ExtArgs>
  }
  export type WorkforceInvitationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | WorkforceTeamDefaultArgs<ExtArgs>
    invitedBy?: boolean | WorkforceProfileDefaultArgs<ExtArgs>
  }

  export type $WorkforceInvitationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkforceInvitation"
    objects: {
      team: Prisma.$WorkforceTeamPayload<ExtArgs>
      invitedBy: Prisma.$WorkforceProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      teamId: string
      email: string
      role: string
      token: string
      expiresAt: Date | null
      invitedById: string
      acceptedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workforceInvitation"]>
    composites: {}
  }

  type WorkforceInvitationGetPayload<S extends boolean | null | undefined | WorkforceInvitationDefaultArgs> = $Result.GetResult<Prisma.$WorkforceInvitationPayload, S>

  type WorkforceInvitationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkforceInvitationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkforceInvitationCountAggregateInputType | true
    }

  export interface WorkforceInvitationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkforceInvitation'], meta: { name: 'WorkforceInvitation' } }
    /**
     * Find zero or one WorkforceInvitation that matches the filter.
     * @param {WorkforceInvitationFindUniqueArgs} args - Arguments to find a WorkforceInvitation
     * @example
     * // Get one WorkforceInvitation
     * const workforceInvitation = await prisma.workforceInvitation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkforceInvitationFindUniqueArgs>(args: SelectSubset<T, WorkforceInvitationFindUniqueArgs<ExtArgs>>): Prisma__WorkforceInvitationClient<$Result.GetResult<Prisma.$WorkforceInvitationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkforceInvitation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkforceInvitationFindUniqueOrThrowArgs} args - Arguments to find a WorkforceInvitation
     * @example
     * // Get one WorkforceInvitation
     * const workforceInvitation = await prisma.workforceInvitation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkforceInvitationFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkforceInvitationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkforceInvitationClient<$Result.GetResult<Prisma.$WorkforceInvitationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkforceInvitation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceInvitationFindFirstArgs} args - Arguments to find a WorkforceInvitation
     * @example
     * // Get one WorkforceInvitation
     * const workforceInvitation = await prisma.workforceInvitation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkforceInvitationFindFirstArgs>(args?: SelectSubset<T, WorkforceInvitationFindFirstArgs<ExtArgs>>): Prisma__WorkforceInvitationClient<$Result.GetResult<Prisma.$WorkforceInvitationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkforceInvitation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceInvitationFindFirstOrThrowArgs} args - Arguments to find a WorkforceInvitation
     * @example
     * // Get one WorkforceInvitation
     * const workforceInvitation = await prisma.workforceInvitation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkforceInvitationFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkforceInvitationFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkforceInvitationClient<$Result.GetResult<Prisma.$WorkforceInvitationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkforceInvitations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceInvitationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkforceInvitations
     * const workforceInvitations = await prisma.workforceInvitation.findMany()
     * 
     * // Get first 10 WorkforceInvitations
     * const workforceInvitations = await prisma.workforceInvitation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workforceInvitationWithIdOnly = await prisma.workforceInvitation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkforceInvitationFindManyArgs>(args?: SelectSubset<T, WorkforceInvitationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkforceInvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkforceInvitation.
     * @param {WorkforceInvitationCreateArgs} args - Arguments to create a WorkforceInvitation.
     * @example
     * // Create one WorkforceInvitation
     * const WorkforceInvitation = await prisma.workforceInvitation.create({
     *   data: {
     *     // ... data to create a WorkforceInvitation
     *   }
     * })
     * 
     */
    create<T extends WorkforceInvitationCreateArgs>(args: SelectSubset<T, WorkforceInvitationCreateArgs<ExtArgs>>): Prisma__WorkforceInvitationClient<$Result.GetResult<Prisma.$WorkforceInvitationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkforceInvitations.
     * @param {WorkforceInvitationCreateManyArgs} args - Arguments to create many WorkforceInvitations.
     * @example
     * // Create many WorkforceInvitations
     * const workforceInvitation = await prisma.workforceInvitation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkforceInvitationCreateManyArgs>(args?: SelectSubset<T, WorkforceInvitationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkforceInvitations and returns the data saved in the database.
     * @param {WorkforceInvitationCreateManyAndReturnArgs} args - Arguments to create many WorkforceInvitations.
     * @example
     * // Create many WorkforceInvitations
     * const workforceInvitation = await prisma.workforceInvitation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkforceInvitations and only return the `id`
     * const workforceInvitationWithIdOnly = await prisma.workforceInvitation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkforceInvitationCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkforceInvitationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkforceInvitationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkforceInvitation.
     * @param {WorkforceInvitationDeleteArgs} args - Arguments to delete one WorkforceInvitation.
     * @example
     * // Delete one WorkforceInvitation
     * const WorkforceInvitation = await prisma.workforceInvitation.delete({
     *   where: {
     *     // ... filter to delete one WorkforceInvitation
     *   }
     * })
     * 
     */
    delete<T extends WorkforceInvitationDeleteArgs>(args: SelectSubset<T, WorkforceInvitationDeleteArgs<ExtArgs>>): Prisma__WorkforceInvitationClient<$Result.GetResult<Prisma.$WorkforceInvitationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkforceInvitation.
     * @param {WorkforceInvitationUpdateArgs} args - Arguments to update one WorkforceInvitation.
     * @example
     * // Update one WorkforceInvitation
     * const workforceInvitation = await prisma.workforceInvitation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkforceInvitationUpdateArgs>(args: SelectSubset<T, WorkforceInvitationUpdateArgs<ExtArgs>>): Prisma__WorkforceInvitationClient<$Result.GetResult<Prisma.$WorkforceInvitationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkforceInvitations.
     * @param {WorkforceInvitationDeleteManyArgs} args - Arguments to filter WorkforceInvitations to delete.
     * @example
     * // Delete a few WorkforceInvitations
     * const { count } = await prisma.workforceInvitation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkforceInvitationDeleteManyArgs>(args?: SelectSubset<T, WorkforceInvitationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkforceInvitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceInvitationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkforceInvitations
     * const workforceInvitation = await prisma.workforceInvitation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkforceInvitationUpdateManyArgs>(args: SelectSubset<T, WorkforceInvitationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkforceInvitations and returns the data updated in the database.
     * @param {WorkforceInvitationUpdateManyAndReturnArgs} args - Arguments to update many WorkforceInvitations.
     * @example
     * // Update many WorkforceInvitations
     * const workforceInvitation = await prisma.workforceInvitation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkforceInvitations and only return the `id`
     * const workforceInvitationWithIdOnly = await prisma.workforceInvitation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkforceInvitationUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkforceInvitationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkforceInvitationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkforceInvitation.
     * @param {WorkforceInvitationUpsertArgs} args - Arguments to update or create a WorkforceInvitation.
     * @example
     * // Update or create a WorkforceInvitation
     * const workforceInvitation = await prisma.workforceInvitation.upsert({
     *   create: {
     *     // ... data to create a WorkforceInvitation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkforceInvitation we want to update
     *   }
     * })
     */
    upsert<T extends WorkforceInvitationUpsertArgs>(args: SelectSubset<T, WorkforceInvitationUpsertArgs<ExtArgs>>): Prisma__WorkforceInvitationClient<$Result.GetResult<Prisma.$WorkforceInvitationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkforceInvitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceInvitationCountArgs} args - Arguments to filter WorkforceInvitations to count.
     * @example
     * // Count the number of WorkforceInvitations
     * const count = await prisma.workforceInvitation.count({
     *   where: {
     *     // ... the filter for the WorkforceInvitations we want to count
     *   }
     * })
    **/
    count<T extends WorkforceInvitationCountArgs>(
      args?: Subset<T, WorkforceInvitationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkforceInvitationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkforceInvitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceInvitationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkforceInvitationAggregateArgs>(args: Subset<T, WorkforceInvitationAggregateArgs>): Prisma.PrismaPromise<GetWorkforceInvitationAggregateType<T>>

    /**
     * Group by WorkforceInvitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceInvitationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkforceInvitationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkforceInvitationGroupByArgs['orderBy'] }
        : { orderBy?: WorkforceInvitationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkforceInvitationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkforceInvitationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkforceInvitation model
   */
  readonly fields: WorkforceInvitationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkforceInvitation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkforceInvitationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends WorkforceTeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkforceTeamDefaultArgs<ExtArgs>>): Prisma__WorkforceTeamClient<$Result.GetResult<Prisma.$WorkforceTeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    invitedBy<T extends WorkforceProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkforceProfileDefaultArgs<ExtArgs>>): Prisma__WorkforceProfileClient<$Result.GetResult<Prisma.$WorkforceProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkforceInvitation model
   */
  interface WorkforceInvitationFieldRefs {
    readonly id: FieldRef<"WorkforceInvitation", 'String'>
    readonly teamId: FieldRef<"WorkforceInvitation", 'String'>
    readonly email: FieldRef<"WorkforceInvitation", 'String'>
    readonly role: FieldRef<"WorkforceInvitation", 'String'>
    readonly token: FieldRef<"WorkforceInvitation", 'String'>
    readonly expiresAt: FieldRef<"WorkforceInvitation", 'DateTime'>
    readonly invitedById: FieldRef<"WorkforceInvitation", 'String'>
    readonly acceptedAt: FieldRef<"WorkforceInvitation", 'DateTime'>
    readonly createdAt: FieldRef<"WorkforceInvitation", 'DateTime'>
    readonly updatedAt: FieldRef<"WorkforceInvitation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkforceInvitation findUnique
   */
  export type WorkforceInvitationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceInvitation
     */
    select?: WorkforceInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceInvitation
     */
    omit?: WorkforceInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceInvitationInclude<ExtArgs> | null
    /**
     * Filter, which WorkforceInvitation to fetch.
     */
    where: WorkforceInvitationWhereUniqueInput
  }

  /**
   * WorkforceInvitation findUniqueOrThrow
   */
  export type WorkforceInvitationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceInvitation
     */
    select?: WorkforceInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceInvitation
     */
    omit?: WorkforceInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceInvitationInclude<ExtArgs> | null
    /**
     * Filter, which WorkforceInvitation to fetch.
     */
    where: WorkforceInvitationWhereUniqueInput
  }

  /**
   * WorkforceInvitation findFirst
   */
  export type WorkforceInvitationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceInvitation
     */
    select?: WorkforceInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceInvitation
     */
    omit?: WorkforceInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceInvitationInclude<ExtArgs> | null
    /**
     * Filter, which WorkforceInvitation to fetch.
     */
    where?: WorkforceInvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkforceInvitations to fetch.
     */
    orderBy?: WorkforceInvitationOrderByWithRelationInput | WorkforceInvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkforceInvitations.
     */
    cursor?: WorkforceInvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkforceInvitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkforceInvitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkforceInvitations.
     */
    distinct?: WorkforceInvitationScalarFieldEnum | WorkforceInvitationScalarFieldEnum[]
  }

  /**
   * WorkforceInvitation findFirstOrThrow
   */
  export type WorkforceInvitationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceInvitation
     */
    select?: WorkforceInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceInvitation
     */
    omit?: WorkforceInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceInvitationInclude<ExtArgs> | null
    /**
     * Filter, which WorkforceInvitation to fetch.
     */
    where?: WorkforceInvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkforceInvitations to fetch.
     */
    orderBy?: WorkforceInvitationOrderByWithRelationInput | WorkforceInvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkforceInvitations.
     */
    cursor?: WorkforceInvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkforceInvitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkforceInvitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkforceInvitations.
     */
    distinct?: WorkforceInvitationScalarFieldEnum | WorkforceInvitationScalarFieldEnum[]
  }

  /**
   * WorkforceInvitation findMany
   */
  export type WorkforceInvitationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceInvitation
     */
    select?: WorkforceInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceInvitation
     */
    omit?: WorkforceInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceInvitationInclude<ExtArgs> | null
    /**
     * Filter, which WorkforceInvitations to fetch.
     */
    where?: WorkforceInvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkforceInvitations to fetch.
     */
    orderBy?: WorkforceInvitationOrderByWithRelationInput | WorkforceInvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkforceInvitations.
     */
    cursor?: WorkforceInvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkforceInvitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkforceInvitations.
     */
    skip?: number
    distinct?: WorkforceInvitationScalarFieldEnum | WorkforceInvitationScalarFieldEnum[]
  }

  /**
   * WorkforceInvitation create
   */
  export type WorkforceInvitationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceInvitation
     */
    select?: WorkforceInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceInvitation
     */
    omit?: WorkforceInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceInvitationInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkforceInvitation.
     */
    data: XOR<WorkforceInvitationCreateInput, WorkforceInvitationUncheckedCreateInput>
  }

  /**
   * WorkforceInvitation createMany
   */
  export type WorkforceInvitationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkforceInvitations.
     */
    data: WorkforceInvitationCreateManyInput | WorkforceInvitationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkforceInvitation createManyAndReturn
   */
  export type WorkforceInvitationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceInvitation
     */
    select?: WorkforceInvitationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceInvitation
     */
    omit?: WorkforceInvitationOmit<ExtArgs> | null
    /**
     * The data used to create many WorkforceInvitations.
     */
    data: WorkforceInvitationCreateManyInput | WorkforceInvitationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceInvitationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkforceInvitation update
   */
  export type WorkforceInvitationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceInvitation
     */
    select?: WorkforceInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceInvitation
     */
    omit?: WorkforceInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceInvitationInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkforceInvitation.
     */
    data: XOR<WorkforceInvitationUpdateInput, WorkforceInvitationUncheckedUpdateInput>
    /**
     * Choose, which WorkforceInvitation to update.
     */
    where: WorkforceInvitationWhereUniqueInput
  }

  /**
   * WorkforceInvitation updateMany
   */
  export type WorkforceInvitationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkforceInvitations.
     */
    data: XOR<WorkforceInvitationUpdateManyMutationInput, WorkforceInvitationUncheckedUpdateManyInput>
    /**
     * Filter which WorkforceInvitations to update
     */
    where?: WorkforceInvitationWhereInput
    /**
     * Limit how many WorkforceInvitations to update.
     */
    limit?: number
  }

  /**
   * WorkforceInvitation updateManyAndReturn
   */
  export type WorkforceInvitationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceInvitation
     */
    select?: WorkforceInvitationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceInvitation
     */
    omit?: WorkforceInvitationOmit<ExtArgs> | null
    /**
     * The data used to update WorkforceInvitations.
     */
    data: XOR<WorkforceInvitationUpdateManyMutationInput, WorkforceInvitationUncheckedUpdateManyInput>
    /**
     * Filter which WorkforceInvitations to update
     */
    where?: WorkforceInvitationWhereInput
    /**
     * Limit how many WorkforceInvitations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceInvitationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkforceInvitation upsert
   */
  export type WorkforceInvitationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceInvitation
     */
    select?: WorkforceInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceInvitation
     */
    omit?: WorkforceInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceInvitationInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkforceInvitation to update in case it exists.
     */
    where: WorkforceInvitationWhereUniqueInput
    /**
     * In case the WorkforceInvitation found by the `where` argument doesn't exist, create a new WorkforceInvitation with this data.
     */
    create: XOR<WorkforceInvitationCreateInput, WorkforceInvitationUncheckedCreateInput>
    /**
     * In case the WorkforceInvitation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkforceInvitationUpdateInput, WorkforceInvitationUncheckedUpdateInput>
  }

  /**
   * WorkforceInvitation delete
   */
  export type WorkforceInvitationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceInvitation
     */
    select?: WorkforceInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceInvitation
     */
    omit?: WorkforceInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceInvitationInclude<ExtArgs> | null
    /**
     * Filter which WorkforceInvitation to delete.
     */
    where: WorkforceInvitationWhereUniqueInput
  }

  /**
   * WorkforceInvitation deleteMany
   */
  export type WorkforceInvitationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkforceInvitations to delete
     */
    where?: WorkforceInvitationWhereInput
    /**
     * Limit how many WorkforceInvitations to delete.
     */
    limit?: number
  }

  /**
   * WorkforceInvitation without action
   */
  export type WorkforceInvitationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceInvitation
     */
    select?: WorkforceInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceInvitation
     */
    omit?: WorkforceInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceInvitationInclude<ExtArgs> | null
  }


  /**
   * Model WorkforceNotification
   */

  export type AggregateWorkforceNotification = {
    _count: WorkforceNotificationCountAggregateOutputType | null
    _min: WorkforceNotificationMinAggregateOutputType | null
    _max: WorkforceNotificationMaxAggregateOutputType | null
  }

  export type WorkforceNotificationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    title: string | null
    message: string | null
    read: boolean | null
    teamId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkforceNotificationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    title: string | null
    message: string | null
    read: boolean | null
    teamId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkforceNotificationCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    title: number
    message: number
    data: number
    read: number
    teamId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkforceNotificationMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    title?: true
    message?: true
    read?: true
    teamId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkforceNotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    title?: true
    message?: true
    read?: true
    teamId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkforceNotificationCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    title?: true
    message?: true
    data?: true
    read?: true
    teamId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkforceNotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkforceNotification to aggregate.
     */
    where?: WorkforceNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkforceNotifications to fetch.
     */
    orderBy?: WorkforceNotificationOrderByWithRelationInput | WorkforceNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkforceNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkforceNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkforceNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkforceNotifications
    **/
    _count?: true | WorkforceNotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkforceNotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkforceNotificationMaxAggregateInputType
  }

  export type GetWorkforceNotificationAggregateType<T extends WorkforceNotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkforceNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkforceNotification[P]>
      : GetScalarType<T[P], AggregateWorkforceNotification[P]>
  }




  export type WorkforceNotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkforceNotificationWhereInput
    orderBy?: WorkforceNotificationOrderByWithAggregationInput | WorkforceNotificationOrderByWithAggregationInput[]
    by: WorkforceNotificationScalarFieldEnum[] | WorkforceNotificationScalarFieldEnum
    having?: WorkforceNotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkforceNotificationCountAggregateInputType | true
    _min?: WorkforceNotificationMinAggregateInputType
    _max?: WorkforceNotificationMaxAggregateInputType
  }

  export type WorkforceNotificationGroupByOutputType = {
    id: string
    userId: string
    type: string
    title: string
    message: string
    data: JsonValue | null
    read: boolean
    teamId: string | null
    createdAt: Date
    updatedAt: Date
    _count: WorkforceNotificationCountAggregateOutputType | null
    _min: WorkforceNotificationMinAggregateOutputType | null
    _max: WorkforceNotificationMaxAggregateOutputType | null
  }

  type GetWorkforceNotificationGroupByPayload<T extends WorkforceNotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkforceNotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkforceNotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkforceNotificationGroupByOutputType[P]>
            : GetScalarType<T[P], WorkforceNotificationGroupByOutputType[P]>
        }
      >
    >


  export type WorkforceNotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    data?: boolean
    read?: boolean
    teamId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | WorkforceProfileDefaultArgs<ExtArgs>
    team?: boolean | WorkforceNotification$teamArgs<ExtArgs>
  }, ExtArgs["result"]["workforceNotification"]>

  export type WorkforceNotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    data?: boolean
    read?: boolean
    teamId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | WorkforceProfileDefaultArgs<ExtArgs>
    team?: boolean | WorkforceNotification$teamArgs<ExtArgs>
  }, ExtArgs["result"]["workforceNotification"]>

  export type WorkforceNotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    data?: boolean
    read?: boolean
    teamId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | WorkforceProfileDefaultArgs<ExtArgs>
    team?: boolean | WorkforceNotification$teamArgs<ExtArgs>
  }, ExtArgs["result"]["workforceNotification"]>

  export type WorkforceNotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    data?: boolean
    read?: boolean
    teamId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkforceNotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "title" | "message" | "data" | "read" | "teamId" | "createdAt" | "updatedAt", ExtArgs["result"]["workforceNotification"]>
  export type WorkforceNotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | WorkforceProfileDefaultArgs<ExtArgs>
    team?: boolean | WorkforceNotification$teamArgs<ExtArgs>
  }
  export type WorkforceNotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | WorkforceProfileDefaultArgs<ExtArgs>
    team?: boolean | WorkforceNotification$teamArgs<ExtArgs>
  }
  export type WorkforceNotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | WorkforceProfileDefaultArgs<ExtArgs>
    team?: boolean | WorkforceNotification$teamArgs<ExtArgs>
  }

  export type $WorkforceNotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkforceNotification"
    objects: {
      user: Prisma.$WorkforceProfilePayload<ExtArgs>
      team: Prisma.$WorkforceTeamPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      title: string
      message: string
      data: Prisma.JsonValue | null
      read: boolean
      teamId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workforceNotification"]>
    composites: {}
  }

  type WorkforceNotificationGetPayload<S extends boolean | null | undefined | WorkforceNotificationDefaultArgs> = $Result.GetResult<Prisma.$WorkforceNotificationPayload, S>

  type WorkforceNotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkforceNotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkforceNotificationCountAggregateInputType | true
    }

  export interface WorkforceNotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkforceNotification'], meta: { name: 'WorkforceNotification' } }
    /**
     * Find zero or one WorkforceNotification that matches the filter.
     * @param {WorkforceNotificationFindUniqueArgs} args - Arguments to find a WorkforceNotification
     * @example
     * // Get one WorkforceNotification
     * const workforceNotification = await prisma.workforceNotification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkforceNotificationFindUniqueArgs>(args: SelectSubset<T, WorkforceNotificationFindUniqueArgs<ExtArgs>>): Prisma__WorkforceNotificationClient<$Result.GetResult<Prisma.$WorkforceNotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkforceNotification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkforceNotificationFindUniqueOrThrowArgs} args - Arguments to find a WorkforceNotification
     * @example
     * // Get one WorkforceNotification
     * const workforceNotification = await prisma.workforceNotification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkforceNotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkforceNotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkforceNotificationClient<$Result.GetResult<Prisma.$WorkforceNotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkforceNotification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceNotificationFindFirstArgs} args - Arguments to find a WorkforceNotification
     * @example
     * // Get one WorkforceNotification
     * const workforceNotification = await prisma.workforceNotification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkforceNotificationFindFirstArgs>(args?: SelectSubset<T, WorkforceNotificationFindFirstArgs<ExtArgs>>): Prisma__WorkforceNotificationClient<$Result.GetResult<Prisma.$WorkforceNotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkforceNotification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceNotificationFindFirstOrThrowArgs} args - Arguments to find a WorkforceNotification
     * @example
     * // Get one WorkforceNotification
     * const workforceNotification = await prisma.workforceNotification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkforceNotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkforceNotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkforceNotificationClient<$Result.GetResult<Prisma.$WorkforceNotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkforceNotifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceNotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkforceNotifications
     * const workforceNotifications = await prisma.workforceNotification.findMany()
     * 
     * // Get first 10 WorkforceNotifications
     * const workforceNotifications = await prisma.workforceNotification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workforceNotificationWithIdOnly = await prisma.workforceNotification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkforceNotificationFindManyArgs>(args?: SelectSubset<T, WorkforceNotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkforceNotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkforceNotification.
     * @param {WorkforceNotificationCreateArgs} args - Arguments to create a WorkforceNotification.
     * @example
     * // Create one WorkforceNotification
     * const WorkforceNotification = await prisma.workforceNotification.create({
     *   data: {
     *     // ... data to create a WorkforceNotification
     *   }
     * })
     * 
     */
    create<T extends WorkforceNotificationCreateArgs>(args: SelectSubset<T, WorkforceNotificationCreateArgs<ExtArgs>>): Prisma__WorkforceNotificationClient<$Result.GetResult<Prisma.$WorkforceNotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkforceNotifications.
     * @param {WorkforceNotificationCreateManyArgs} args - Arguments to create many WorkforceNotifications.
     * @example
     * // Create many WorkforceNotifications
     * const workforceNotification = await prisma.workforceNotification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkforceNotificationCreateManyArgs>(args?: SelectSubset<T, WorkforceNotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkforceNotifications and returns the data saved in the database.
     * @param {WorkforceNotificationCreateManyAndReturnArgs} args - Arguments to create many WorkforceNotifications.
     * @example
     * // Create many WorkforceNotifications
     * const workforceNotification = await prisma.workforceNotification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkforceNotifications and only return the `id`
     * const workforceNotificationWithIdOnly = await prisma.workforceNotification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkforceNotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkforceNotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkforceNotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkforceNotification.
     * @param {WorkforceNotificationDeleteArgs} args - Arguments to delete one WorkforceNotification.
     * @example
     * // Delete one WorkforceNotification
     * const WorkforceNotification = await prisma.workforceNotification.delete({
     *   where: {
     *     // ... filter to delete one WorkforceNotification
     *   }
     * })
     * 
     */
    delete<T extends WorkforceNotificationDeleteArgs>(args: SelectSubset<T, WorkforceNotificationDeleteArgs<ExtArgs>>): Prisma__WorkforceNotificationClient<$Result.GetResult<Prisma.$WorkforceNotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkforceNotification.
     * @param {WorkforceNotificationUpdateArgs} args - Arguments to update one WorkforceNotification.
     * @example
     * // Update one WorkforceNotification
     * const workforceNotification = await prisma.workforceNotification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkforceNotificationUpdateArgs>(args: SelectSubset<T, WorkforceNotificationUpdateArgs<ExtArgs>>): Prisma__WorkforceNotificationClient<$Result.GetResult<Prisma.$WorkforceNotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkforceNotifications.
     * @param {WorkforceNotificationDeleteManyArgs} args - Arguments to filter WorkforceNotifications to delete.
     * @example
     * // Delete a few WorkforceNotifications
     * const { count } = await prisma.workforceNotification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkforceNotificationDeleteManyArgs>(args?: SelectSubset<T, WorkforceNotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkforceNotifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceNotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkforceNotifications
     * const workforceNotification = await prisma.workforceNotification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkforceNotificationUpdateManyArgs>(args: SelectSubset<T, WorkforceNotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkforceNotifications and returns the data updated in the database.
     * @param {WorkforceNotificationUpdateManyAndReturnArgs} args - Arguments to update many WorkforceNotifications.
     * @example
     * // Update many WorkforceNotifications
     * const workforceNotification = await prisma.workforceNotification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkforceNotifications and only return the `id`
     * const workforceNotificationWithIdOnly = await prisma.workforceNotification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkforceNotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkforceNotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkforceNotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkforceNotification.
     * @param {WorkforceNotificationUpsertArgs} args - Arguments to update or create a WorkforceNotification.
     * @example
     * // Update or create a WorkforceNotification
     * const workforceNotification = await prisma.workforceNotification.upsert({
     *   create: {
     *     // ... data to create a WorkforceNotification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkforceNotification we want to update
     *   }
     * })
     */
    upsert<T extends WorkforceNotificationUpsertArgs>(args: SelectSubset<T, WorkforceNotificationUpsertArgs<ExtArgs>>): Prisma__WorkforceNotificationClient<$Result.GetResult<Prisma.$WorkforceNotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkforceNotifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceNotificationCountArgs} args - Arguments to filter WorkforceNotifications to count.
     * @example
     * // Count the number of WorkforceNotifications
     * const count = await prisma.workforceNotification.count({
     *   where: {
     *     // ... the filter for the WorkforceNotifications we want to count
     *   }
     * })
    **/
    count<T extends WorkforceNotificationCountArgs>(
      args?: Subset<T, WorkforceNotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkforceNotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkforceNotification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceNotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkforceNotificationAggregateArgs>(args: Subset<T, WorkforceNotificationAggregateArgs>): Prisma.PrismaPromise<GetWorkforceNotificationAggregateType<T>>

    /**
     * Group by WorkforceNotification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceNotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkforceNotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkforceNotificationGroupByArgs['orderBy'] }
        : { orderBy?: WorkforceNotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkforceNotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkforceNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkforceNotification model
   */
  readonly fields: WorkforceNotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkforceNotification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkforceNotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends WorkforceProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkforceProfileDefaultArgs<ExtArgs>>): Prisma__WorkforceProfileClient<$Result.GetResult<Prisma.$WorkforceProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    team<T extends WorkforceNotification$teamArgs<ExtArgs> = {}>(args?: Subset<T, WorkforceNotification$teamArgs<ExtArgs>>): Prisma__WorkforceTeamClient<$Result.GetResult<Prisma.$WorkforceTeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkforceNotification model
   */
  interface WorkforceNotificationFieldRefs {
    readonly id: FieldRef<"WorkforceNotification", 'String'>
    readonly userId: FieldRef<"WorkforceNotification", 'String'>
    readonly type: FieldRef<"WorkforceNotification", 'String'>
    readonly title: FieldRef<"WorkforceNotification", 'String'>
    readonly message: FieldRef<"WorkforceNotification", 'String'>
    readonly data: FieldRef<"WorkforceNotification", 'Json'>
    readonly read: FieldRef<"WorkforceNotification", 'Boolean'>
    readonly teamId: FieldRef<"WorkforceNotification", 'String'>
    readonly createdAt: FieldRef<"WorkforceNotification", 'DateTime'>
    readonly updatedAt: FieldRef<"WorkforceNotification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkforceNotification findUnique
   */
  export type WorkforceNotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceNotification
     */
    select?: WorkforceNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceNotification
     */
    omit?: WorkforceNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceNotificationInclude<ExtArgs> | null
    /**
     * Filter, which WorkforceNotification to fetch.
     */
    where: WorkforceNotificationWhereUniqueInput
  }

  /**
   * WorkforceNotification findUniqueOrThrow
   */
  export type WorkforceNotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceNotification
     */
    select?: WorkforceNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceNotification
     */
    omit?: WorkforceNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceNotificationInclude<ExtArgs> | null
    /**
     * Filter, which WorkforceNotification to fetch.
     */
    where: WorkforceNotificationWhereUniqueInput
  }

  /**
   * WorkforceNotification findFirst
   */
  export type WorkforceNotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceNotification
     */
    select?: WorkforceNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceNotification
     */
    omit?: WorkforceNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceNotificationInclude<ExtArgs> | null
    /**
     * Filter, which WorkforceNotification to fetch.
     */
    where?: WorkforceNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkforceNotifications to fetch.
     */
    orderBy?: WorkforceNotificationOrderByWithRelationInput | WorkforceNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkforceNotifications.
     */
    cursor?: WorkforceNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkforceNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkforceNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkforceNotifications.
     */
    distinct?: WorkforceNotificationScalarFieldEnum | WorkforceNotificationScalarFieldEnum[]
  }

  /**
   * WorkforceNotification findFirstOrThrow
   */
  export type WorkforceNotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceNotification
     */
    select?: WorkforceNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceNotification
     */
    omit?: WorkforceNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceNotificationInclude<ExtArgs> | null
    /**
     * Filter, which WorkforceNotification to fetch.
     */
    where?: WorkforceNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkforceNotifications to fetch.
     */
    orderBy?: WorkforceNotificationOrderByWithRelationInput | WorkforceNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkforceNotifications.
     */
    cursor?: WorkforceNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkforceNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkforceNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkforceNotifications.
     */
    distinct?: WorkforceNotificationScalarFieldEnum | WorkforceNotificationScalarFieldEnum[]
  }

  /**
   * WorkforceNotification findMany
   */
  export type WorkforceNotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceNotification
     */
    select?: WorkforceNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceNotification
     */
    omit?: WorkforceNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceNotificationInclude<ExtArgs> | null
    /**
     * Filter, which WorkforceNotifications to fetch.
     */
    where?: WorkforceNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkforceNotifications to fetch.
     */
    orderBy?: WorkforceNotificationOrderByWithRelationInput | WorkforceNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkforceNotifications.
     */
    cursor?: WorkforceNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkforceNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkforceNotifications.
     */
    skip?: number
    distinct?: WorkforceNotificationScalarFieldEnum | WorkforceNotificationScalarFieldEnum[]
  }

  /**
   * WorkforceNotification create
   */
  export type WorkforceNotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceNotification
     */
    select?: WorkforceNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceNotification
     */
    omit?: WorkforceNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceNotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkforceNotification.
     */
    data: XOR<WorkforceNotificationCreateInput, WorkforceNotificationUncheckedCreateInput>
  }

  /**
   * WorkforceNotification createMany
   */
  export type WorkforceNotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkforceNotifications.
     */
    data: WorkforceNotificationCreateManyInput | WorkforceNotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkforceNotification createManyAndReturn
   */
  export type WorkforceNotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceNotification
     */
    select?: WorkforceNotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceNotification
     */
    omit?: WorkforceNotificationOmit<ExtArgs> | null
    /**
     * The data used to create many WorkforceNotifications.
     */
    data: WorkforceNotificationCreateManyInput | WorkforceNotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceNotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkforceNotification update
   */
  export type WorkforceNotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceNotification
     */
    select?: WorkforceNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceNotification
     */
    omit?: WorkforceNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceNotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkforceNotification.
     */
    data: XOR<WorkforceNotificationUpdateInput, WorkforceNotificationUncheckedUpdateInput>
    /**
     * Choose, which WorkforceNotification to update.
     */
    where: WorkforceNotificationWhereUniqueInput
  }

  /**
   * WorkforceNotification updateMany
   */
  export type WorkforceNotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkforceNotifications.
     */
    data: XOR<WorkforceNotificationUpdateManyMutationInput, WorkforceNotificationUncheckedUpdateManyInput>
    /**
     * Filter which WorkforceNotifications to update
     */
    where?: WorkforceNotificationWhereInput
    /**
     * Limit how many WorkforceNotifications to update.
     */
    limit?: number
  }

  /**
   * WorkforceNotification updateManyAndReturn
   */
  export type WorkforceNotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceNotification
     */
    select?: WorkforceNotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceNotification
     */
    omit?: WorkforceNotificationOmit<ExtArgs> | null
    /**
     * The data used to update WorkforceNotifications.
     */
    data: XOR<WorkforceNotificationUpdateManyMutationInput, WorkforceNotificationUncheckedUpdateManyInput>
    /**
     * Filter which WorkforceNotifications to update
     */
    where?: WorkforceNotificationWhereInput
    /**
     * Limit how many WorkforceNotifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceNotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkforceNotification upsert
   */
  export type WorkforceNotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceNotification
     */
    select?: WorkforceNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceNotification
     */
    omit?: WorkforceNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceNotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkforceNotification to update in case it exists.
     */
    where: WorkforceNotificationWhereUniqueInput
    /**
     * In case the WorkforceNotification found by the `where` argument doesn't exist, create a new WorkforceNotification with this data.
     */
    create: XOR<WorkforceNotificationCreateInput, WorkforceNotificationUncheckedCreateInput>
    /**
     * In case the WorkforceNotification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkforceNotificationUpdateInput, WorkforceNotificationUncheckedUpdateInput>
  }

  /**
   * WorkforceNotification delete
   */
  export type WorkforceNotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceNotification
     */
    select?: WorkforceNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceNotification
     */
    omit?: WorkforceNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceNotificationInclude<ExtArgs> | null
    /**
     * Filter which WorkforceNotification to delete.
     */
    where: WorkforceNotificationWhereUniqueInput
  }

  /**
   * WorkforceNotification deleteMany
   */
  export type WorkforceNotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkforceNotifications to delete
     */
    where?: WorkforceNotificationWhereInput
    /**
     * Limit how many WorkforceNotifications to delete.
     */
    limit?: number
  }

  /**
   * WorkforceNotification.team
   */
  export type WorkforceNotification$teamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceTeam
     */
    select?: WorkforceTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceTeam
     */
    omit?: WorkforceTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceTeamInclude<ExtArgs> | null
    where?: WorkforceTeamWhereInput
  }

  /**
   * WorkforceNotification without action
   */
  export type WorkforceNotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceNotification
     */
    select?: WorkforceNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceNotification
     */
    omit?: WorkforceNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceNotificationInclude<ExtArgs> | null
  }


  /**
   * Model WorkforceCustomRole
   */

  export type AggregateWorkforceCustomRole = {
    _count: WorkforceCustomRoleCountAggregateOutputType | null
    _min: WorkforceCustomRoleMinAggregateOutputType | null
    _max: WorkforceCustomRoleMaxAggregateOutputType | null
  }

  export type WorkforceCustomRoleMinAggregateOutputType = {
    id: string | null
    teamId: string | null
    name: string | null
    label: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkforceCustomRoleMaxAggregateOutputType = {
    id: string | null
    teamId: string | null
    name: string | null
    label: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkforceCustomRoleCountAggregateOutputType = {
    id: number
    teamId: number
    name: number
    label: number
    permissions: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkforceCustomRoleMinAggregateInputType = {
    id?: true
    teamId?: true
    name?: true
    label?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkforceCustomRoleMaxAggregateInputType = {
    id?: true
    teamId?: true
    name?: true
    label?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkforceCustomRoleCountAggregateInputType = {
    id?: true
    teamId?: true
    name?: true
    label?: true
    permissions?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkforceCustomRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkforceCustomRole to aggregate.
     */
    where?: WorkforceCustomRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkforceCustomRoles to fetch.
     */
    orderBy?: WorkforceCustomRoleOrderByWithRelationInput | WorkforceCustomRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkforceCustomRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkforceCustomRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkforceCustomRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkforceCustomRoles
    **/
    _count?: true | WorkforceCustomRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkforceCustomRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkforceCustomRoleMaxAggregateInputType
  }

  export type GetWorkforceCustomRoleAggregateType<T extends WorkforceCustomRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkforceCustomRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkforceCustomRole[P]>
      : GetScalarType<T[P], AggregateWorkforceCustomRole[P]>
  }




  export type WorkforceCustomRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkforceCustomRoleWhereInput
    orderBy?: WorkforceCustomRoleOrderByWithAggregationInput | WorkforceCustomRoleOrderByWithAggregationInput[]
    by: WorkforceCustomRoleScalarFieldEnum[] | WorkforceCustomRoleScalarFieldEnum
    having?: WorkforceCustomRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkforceCustomRoleCountAggregateInputType | true
    _min?: WorkforceCustomRoleMinAggregateInputType
    _max?: WorkforceCustomRoleMaxAggregateInputType
  }

  export type WorkforceCustomRoleGroupByOutputType = {
    id: string
    teamId: string
    name: string
    label: string
    permissions: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: WorkforceCustomRoleCountAggregateOutputType | null
    _min: WorkforceCustomRoleMinAggregateOutputType | null
    _max: WorkforceCustomRoleMaxAggregateOutputType | null
  }

  type GetWorkforceCustomRoleGroupByPayload<T extends WorkforceCustomRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkforceCustomRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkforceCustomRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkforceCustomRoleGroupByOutputType[P]>
            : GetScalarType<T[P], WorkforceCustomRoleGroupByOutputType[P]>
        }
      >
    >


  export type WorkforceCustomRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    name?: boolean
    label?: boolean
    permissions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    team?: boolean | WorkforceTeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workforceCustomRole"]>

  export type WorkforceCustomRoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    name?: boolean
    label?: boolean
    permissions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    team?: boolean | WorkforceTeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workforceCustomRole"]>

  export type WorkforceCustomRoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    name?: boolean
    label?: boolean
    permissions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    team?: boolean | WorkforceTeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workforceCustomRole"]>

  export type WorkforceCustomRoleSelectScalar = {
    id?: boolean
    teamId?: boolean
    name?: boolean
    label?: boolean
    permissions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkforceCustomRoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "teamId" | "name" | "label" | "permissions" | "createdAt" | "updatedAt", ExtArgs["result"]["workforceCustomRole"]>
  export type WorkforceCustomRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | WorkforceTeamDefaultArgs<ExtArgs>
  }
  export type WorkforceCustomRoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | WorkforceTeamDefaultArgs<ExtArgs>
  }
  export type WorkforceCustomRoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | WorkforceTeamDefaultArgs<ExtArgs>
  }

  export type $WorkforceCustomRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkforceCustomRole"
    objects: {
      team: Prisma.$WorkforceTeamPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      teamId: string
      name: string
      label: string
      permissions: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workforceCustomRole"]>
    composites: {}
  }

  type WorkforceCustomRoleGetPayload<S extends boolean | null | undefined | WorkforceCustomRoleDefaultArgs> = $Result.GetResult<Prisma.$WorkforceCustomRolePayload, S>

  type WorkforceCustomRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkforceCustomRoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkforceCustomRoleCountAggregateInputType | true
    }

  export interface WorkforceCustomRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkforceCustomRole'], meta: { name: 'WorkforceCustomRole' } }
    /**
     * Find zero or one WorkforceCustomRole that matches the filter.
     * @param {WorkforceCustomRoleFindUniqueArgs} args - Arguments to find a WorkforceCustomRole
     * @example
     * // Get one WorkforceCustomRole
     * const workforceCustomRole = await prisma.workforceCustomRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkforceCustomRoleFindUniqueArgs>(args: SelectSubset<T, WorkforceCustomRoleFindUniqueArgs<ExtArgs>>): Prisma__WorkforceCustomRoleClient<$Result.GetResult<Prisma.$WorkforceCustomRolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkforceCustomRole that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkforceCustomRoleFindUniqueOrThrowArgs} args - Arguments to find a WorkforceCustomRole
     * @example
     * // Get one WorkforceCustomRole
     * const workforceCustomRole = await prisma.workforceCustomRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkforceCustomRoleFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkforceCustomRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkforceCustomRoleClient<$Result.GetResult<Prisma.$WorkforceCustomRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkforceCustomRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceCustomRoleFindFirstArgs} args - Arguments to find a WorkforceCustomRole
     * @example
     * // Get one WorkforceCustomRole
     * const workforceCustomRole = await prisma.workforceCustomRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkforceCustomRoleFindFirstArgs>(args?: SelectSubset<T, WorkforceCustomRoleFindFirstArgs<ExtArgs>>): Prisma__WorkforceCustomRoleClient<$Result.GetResult<Prisma.$WorkforceCustomRolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkforceCustomRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceCustomRoleFindFirstOrThrowArgs} args - Arguments to find a WorkforceCustomRole
     * @example
     * // Get one WorkforceCustomRole
     * const workforceCustomRole = await prisma.workforceCustomRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkforceCustomRoleFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkforceCustomRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkforceCustomRoleClient<$Result.GetResult<Prisma.$WorkforceCustomRolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkforceCustomRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceCustomRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkforceCustomRoles
     * const workforceCustomRoles = await prisma.workforceCustomRole.findMany()
     * 
     * // Get first 10 WorkforceCustomRoles
     * const workforceCustomRoles = await prisma.workforceCustomRole.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workforceCustomRoleWithIdOnly = await prisma.workforceCustomRole.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkforceCustomRoleFindManyArgs>(args?: SelectSubset<T, WorkforceCustomRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkforceCustomRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkforceCustomRole.
     * @param {WorkforceCustomRoleCreateArgs} args - Arguments to create a WorkforceCustomRole.
     * @example
     * // Create one WorkforceCustomRole
     * const WorkforceCustomRole = await prisma.workforceCustomRole.create({
     *   data: {
     *     // ... data to create a WorkforceCustomRole
     *   }
     * })
     * 
     */
    create<T extends WorkforceCustomRoleCreateArgs>(args: SelectSubset<T, WorkforceCustomRoleCreateArgs<ExtArgs>>): Prisma__WorkforceCustomRoleClient<$Result.GetResult<Prisma.$WorkforceCustomRolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkforceCustomRoles.
     * @param {WorkforceCustomRoleCreateManyArgs} args - Arguments to create many WorkforceCustomRoles.
     * @example
     * // Create many WorkforceCustomRoles
     * const workforceCustomRole = await prisma.workforceCustomRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkforceCustomRoleCreateManyArgs>(args?: SelectSubset<T, WorkforceCustomRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkforceCustomRoles and returns the data saved in the database.
     * @param {WorkforceCustomRoleCreateManyAndReturnArgs} args - Arguments to create many WorkforceCustomRoles.
     * @example
     * // Create many WorkforceCustomRoles
     * const workforceCustomRole = await prisma.workforceCustomRole.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkforceCustomRoles and only return the `id`
     * const workforceCustomRoleWithIdOnly = await prisma.workforceCustomRole.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkforceCustomRoleCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkforceCustomRoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkforceCustomRolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkforceCustomRole.
     * @param {WorkforceCustomRoleDeleteArgs} args - Arguments to delete one WorkforceCustomRole.
     * @example
     * // Delete one WorkforceCustomRole
     * const WorkforceCustomRole = await prisma.workforceCustomRole.delete({
     *   where: {
     *     // ... filter to delete one WorkforceCustomRole
     *   }
     * })
     * 
     */
    delete<T extends WorkforceCustomRoleDeleteArgs>(args: SelectSubset<T, WorkforceCustomRoleDeleteArgs<ExtArgs>>): Prisma__WorkforceCustomRoleClient<$Result.GetResult<Prisma.$WorkforceCustomRolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkforceCustomRole.
     * @param {WorkforceCustomRoleUpdateArgs} args - Arguments to update one WorkforceCustomRole.
     * @example
     * // Update one WorkforceCustomRole
     * const workforceCustomRole = await prisma.workforceCustomRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkforceCustomRoleUpdateArgs>(args: SelectSubset<T, WorkforceCustomRoleUpdateArgs<ExtArgs>>): Prisma__WorkforceCustomRoleClient<$Result.GetResult<Prisma.$WorkforceCustomRolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkforceCustomRoles.
     * @param {WorkforceCustomRoleDeleteManyArgs} args - Arguments to filter WorkforceCustomRoles to delete.
     * @example
     * // Delete a few WorkforceCustomRoles
     * const { count } = await prisma.workforceCustomRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkforceCustomRoleDeleteManyArgs>(args?: SelectSubset<T, WorkforceCustomRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkforceCustomRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceCustomRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkforceCustomRoles
     * const workforceCustomRole = await prisma.workforceCustomRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkforceCustomRoleUpdateManyArgs>(args: SelectSubset<T, WorkforceCustomRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkforceCustomRoles and returns the data updated in the database.
     * @param {WorkforceCustomRoleUpdateManyAndReturnArgs} args - Arguments to update many WorkforceCustomRoles.
     * @example
     * // Update many WorkforceCustomRoles
     * const workforceCustomRole = await prisma.workforceCustomRole.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkforceCustomRoles and only return the `id`
     * const workforceCustomRoleWithIdOnly = await prisma.workforceCustomRole.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkforceCustomRoleUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkforceCustomRoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkforceCustomRolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkforceCustomRole.
     * @param {WorkforceCustomRoleUpsertArgs} args - Arguments to update or create a WorkforceCustomRole.
     * @example
     * // Update or create a WorkforceCustomRole
     * const workforceCustomRole = await prisma.workforceCustomRole.upsert({
     *   create: {
     *     // ... data to create a WorkforceCustomRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkforceCustomRole we want to update
     *   }
     * })
     */
    upsert<T extends WorkforceCustomRoleUpsertArgs>(args: SelectSubset<T, WorkforceCustomRoleUpsertArgs<ExtArgs>>): Prisma__WorkforceCustomRoleClient<$Result.GetResult<Prisma.$WorkforceCustomRolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkforceCustomRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceCustomRoleCountArgs} args - Arguments to filter WorkforceCustomRoles to count.
     * @example
     * // Count the number of WorkforceCustomRoles
     * const count = await prisma.workforceCustomRole.count({
     *   where: {
     *     // ... the filter for the WorkforceCustomRoles we want to count
     *   }
     * })
    **/
    count<T extends WorkforceCustomRoleCountArgs>(
      args?: Subset<T, WorkforceCustomRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkforceCustomRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkforceCustomRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceCustomRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkforceCustomRoleAggregateArgs>(args: Subset<T, WorkforceCustomRoleAggregateArgs>): Prisma.PrismaPromise<GetWorkforceCustomRoleAggregateType<T>>

    /**
     * Group by WorkforceCustomRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceCustomRoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkforceCustomRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkforceCustomRoleGroupByArgs['orderBy'] }
        : { orderBy?: WorkforceCustomRoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkforceCustomRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkforceCustomRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkforceCustomRole model
   */
  readonly fields: WorkforceCustomRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkforceCustomRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkforceCustomRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends WorkforceTeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkforceTeamDefaultArgs<ExtArgs>>): Prisma__WorkforceTeamClient<$Result.GetResult<Prisma.$WorkforceTeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkforceCustomRole model
   */
  interface WorkforceCustomRoleFieldRefs {
    readonly id: FieldRef<"WorkforceCustomRole", 'String'>
    readonly teamId: FieldRef<"WorkforceCustomRole", 'String'>
    readonly name: FieldRef<"WorkforceCustomRole", 'String'>
    readonly label: FieldRef<"WorkforceCustomRole", 'String'>
    readonly permissions: FieldRef<"WorkforceCustomRole", 'Json'>
    readonly createdAt: FieldRef<"WorkforceCustomRole", 'DateTime'>
    readonly updatedAt: FieldRef<"WorkforceCustomRole", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkforceCustomRole findUnique
   */
  export type WorkforceCustomRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceCustomRole
     */
    select?: WorkforceCustomRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceCustomRole
     */
    omit?: WorkforceCustomRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceCustomRoleInclude<ExtArgs> | null
    /**
     * Filter, which WorkforceCustomRole to fetch.
     */
    where: WorkforceCustomRoleWhereUniqueInput
  }

  /**
   * WorkforceCustomRole findUniqueOrThrow
   */
  export type WorkforceCustomRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceCustomRole
     */
    select?: WorkforceCustomRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceCustomRole
     */
    omit?: WorkforceCustomRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceCustomRoleInclude<ExtArgs> | null
    /**
     * Filter, which WorkforceCustomRole to fetch.
     */
    where: WorkforceCustomRoleWhereUniqueInput
  }

  /**
   * WorkforceCustomRole findFirst
   */
  export type WorkforceCustomRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceCustomRole
     */
    select?: WorkforceCustomRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceCustomRole
     */
    omit?: WorkforceCustomRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceCustomRoleInclude<ExtArgs> | null
    /**
     * Filter, which WorkforceCustomRole to fetch.
     */
    where?: WorkforceCustomRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkforceCustomRoles to fetch.
     */
    orderBy?: WorkforceCustomRoleOrderByWithRelationInput | WorkforceCustomRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkforceCustomRoles.
     */
    cursor?: WorkforceCustomRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkforceCustomRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkforceCustomRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkforceCustomRoles.
     */
    distinct?: WorkforceCustomRoleScalarFieldEnum | WorkforceCustomRoleScalarFieldEnum[]
  }

  /**
   * WorkforceCustomRole findFirstOrThrow
   */
  export type WorkforceCustomRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceCustomRole
     */
    select?: WorkforceCustomRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceCustomRole
     */
    omit?: WorkforceCustomRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceCustomRoleInclude<ExtArgs> | null
    /**
     * Filter, which WorkforceCustomRole to fetch.
     */
    where?: WorkforceCustomRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkforceCustomRoles to fetch.
     */
    orderBy?: WorkforceCustomRoleOrderByWithRelationInput | WorkforceCustomRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkforceCustomRoles.
     */
    cursor?: WorkforceCustomRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkforceCustomRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkforceCustomRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkforceCustomRoles.
     */
    distinct?: WorkforceCustomRoleScalarFieldEnum | WorkforceCustomRoleScalarFieldEnum[]
  }

  /**
   * WorkforceCustomRole findMany
   */
  export type WorkforceCustomRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceCustomRole
     */
    select?: WorkforceCustomRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceCustomRole
     */
    omit?: WorkforceCustomRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceCustomRoleInclude<ExtArgs> | null
    /**
     * Filter, which WorkforceCustomRoles to fetch.
     */
    where?: WorkforceCustomRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkforceCustomRoles to fetch.
     */
    orderBy?: WorkforceCustomRoleOrderByWithRelationInput | WorkforceCustomRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkforceCustomRoles.
     */
    cursor?: WorkforceCustomRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkforceCustomRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkforceCustomRoles.
     */
    skip?: number
    distinct?: WorkforceCustomRoleScalarFieldEnum | WorkforceCustomRoleScalarFieldEnum[]
  }

  /**
   * WorkforceCustomRole create
   */
  export type WorkforceCustomRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceCustomRole
     */
    select?: WorkforceCustomRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceCustomRole
     */
    omit?: WorkforceCustomRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceCustomRoleInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkforceCustomRole.
     */
    data: XOR<WorkforceCustomRoleCreateInput, WorkforceCustomRoleUncheckedCreateInput>
  }

  /**
   * WorkforceCustomRole createMany
   */
  export type WorkforceCustomRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkforceCustomRoles.
     */
    data: WorkforceCustomRoleCreateManyInput | WorkforceCustomRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkforceCustomRole createManyAndReturn
   */
  export type WorkforceCustomRoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceCustomRole
     */
    select?: WorkforceCustomRoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceCustomRole
     */
    omit?: WorkforceCustomRoleOmit<ExtArgs> | null
    /**
     * The data used to create many WorkforceCustomRoles.
     */
    data: WorkforceCustomRoleCreateManyInput | WorkforceCustomRoleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceCustomRoleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkforceCustomRole update
   */
  export type WorkforceCustomRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceCustomRole
     */
    select?: WorkforceCustomRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceCustomRole
     */
    omit?: WorkforceCustomRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceCustomRoleInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkforceCustomRole.
     */
    data: XOR<WorkforceCustomRoleUpdateInput, WorkforceCustomRoleUncheckedUpdateInput>
    /**
     * Choose, which WorkforceCustomRole to update.
     */
    where: WorkforceCustomRoleWhereUniqueInput
  }

  /**
   * WorkforceCustomRole updateMany
   */
  export type WorkforceCustomRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkforceCustomRoles.
     */
    data: XOR<WorkforceCustomRoleUpdateManyMutationInput, WorkforceCustomRoleUncheckedUpdateManyInput>
    /**
     * Filter which WorkforceCustomRoles to update
     */
    where?: WorkforceCustomRoleWhereInput
    /**
     * Limit how many WorkforceCustomRoles to update.
     */
    limit?: number
  }

  /**
   * WorkforceCustomRole updateManyAndReturn
   */
  export type WorkforceCustomRoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceCustomRole
     */
    select?: WorkforceCustomRoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceCustomRole
     */
    omit?: WorkforceCustomRoleOmit<ExtArgs> | null
    /**
     * The data used to update WorkforceCustomRoles.
     */
    data: XOR<WorkforceCustomRoleUpdateManyMutationInput, WorkforceCustomRoleUncheckedUpdateManyInput>
    /**
     * Filter which WorkforceCustomRoles to update
     */
    where?: WorkforceCustomRoleWhereInput
    /**
     * Limit how many WorkforceCustomRoles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceCustomRoleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkforceCustomRole upsert
   */
  export type WorkforceCustomRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceCustomRole
     */
    select?: WorkforceCustomRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceCustomRole
     */
    omit?: WorkforceCustomRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceCustomRoleInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkforceCustomRole to update in case it exists.
     */
    where: WorkforceCustomRoleWhereUniqueInput
    /**
     * In case the WorkforceCustomRole found by the `where` argument doesn't exist, create a new WorkforceCustomRole with this data.
     */
    create: XOR<WorkforceCustomRoleCreateInput, WorkforceCustomRoleUncheckedCreateInput>
    /**
     * In case the WorkforceCustomRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkforceCustomRoleUpdateInput, WorkforceCustomRoleUncheckedUpdateInput>
  }

  /**
   * WorkforceCustomRole delete
   */
  export type WorkforceCustomRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceCustomRole
     */
    select?: WorkforceCustomRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceCustomRole
     */
    omit?: WorkforceCustomRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceCustomRoleInclude<ExtArgs> | null
    /**
     * Filter which WorkforceCustomRole to delete.
     */
    where: WorkforceCustomRoleWhereUniqueInput
  }

  /**
   * WorkforceCustomRole deleteMany
   */
  export type WorkforceCustomRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkforceCustomRoles to delete
     */
    where?: WorkforceCustomRoleWhereInput
    /**
     * Limit how many WorkforceCustomRoles to delete.
     */
    limit?: number
  }

  /**
   * WorkforceCustomRole without action
   */
  export type WorkforceCustomRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceCustomRole
     */
    select?: WorkforceCustomRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceCustomRole
     */
    omit?: WorkforceCustomRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceCustomRoleInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const WorkforceUserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    profileId: 'profileId',
    createdAt: 'createdAt'
  };

  export type WorkforceUserScalarFieldEnum = (typeof WorkforceUserScalarFieldEnum)[keyof typeof WorkforceUserScalarFieldEnum]


  export const WorkforceTeamScalarFieldEnum: {
    id: 'id',
    name: 'name',
    ownerId: 'ownerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkforceTeamScalarFieldEnum = (typeof WorkforceTeamScalarFieldEnum)[keyof typeof WorkforceTeamScalarFieldEnum]


  export const WorkforceProfileScalarFieldEnum: {
    id: 'id',
    email: 'email',
    firstName: 'firstName',
    lastName: 'lastName',
    role: 'role',
    teamId: 'teamId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkforceProfileScalarFieldEnum = (typeof WorkforceProfileScalarFieldEnum)[keyof typeof WorkforceProfileScalarFieldEnum]


  export const WorkforceTeamMemberScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    teamId: 'teamId',
    role: 'role',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkforceTeamMemberScalarFieldEnum = (typeof WorkforceTeamMemberScalarFieldEnum)[keyof typeof WorkforceTeamMemberScalarFieldEnum]


  export const WorkforceDepartmentScalarFieldEnum: {
    id: 'id',
    teamId: 'teamId',
    name: 'name',
    icon: 'icon',
    managerId: 'managerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkforceDepartmentScalarFieldEnum = (typeof WorkforceDepartmentScalarFieldEnum)[keyof typeof WorkforceDepartmentScalarFieldEnum]


  export const WorkforceEmployeeScalarFieldEnum: {
    id: 'id',
    teamId: 'teamId',
    profileId: 'profileId',
    departmentId: 'departmentId',
    position: 'position',
    joinDate: 'joinDate',
    salary: 'salary',
    status: 'status',
    managerId: 'managerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkforceEmployeeScalarFieldEnum = (typeof WorkforceEmployeeScalarFieldEnum)[keyof typeof WorkforceEmployeeScalarFieldEnum]


  export const WorkforceTaskScalarFieldEnum: {
    id: 'id',
    teamId: 'teamId',
    title: 'title',
    description: 'description',
    priority: 'priority',
    status: 'status',
    departmentId: 'departmentId',
    assigneeId: 'assigneeId',
    createdById: 'createdById',
    dueDate: 'dueDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkforceTaskScalarFieldEnum = (typeof WorkforceTaskScalarFieldEnum)[keyof typeof WorkforceTaskScalarFieldEnum]


  export const WorkforceInvitationScalarFieldEnum: {
    id: 'id',
    teamId: 'teamId',
    email: 'email',
    role: 'role',
    token: 'token',
    expiresAt: 'expiresAt',
    invitedById: 'invitedById',
    acceptedAt: 'acceptedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkforceInvitationScalarFieldEnum = (typeof WorkforceInvitationScalarFieldEnum)[keyof typeof WorkforceInvitationScalarFieldEnum]


  export const WorkforceNotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    title: 'title',
    message: 'message',
    data: 'data',
    read: 'read',
    teamId: 'teamId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkforceNotificationScalarFieldEnum = (typeof WorkforceNotificationScalarFieldEnum)[keyof typeof WorkforceNotificationScalarFieldEnum]


  export const WorkforceCustomRoleScalarFieldEnum: {
    id: 'id',
    teamId: 'teamId',
    name: 'name',
    label: 'label',
    permissions: 'permissions',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkforceCustomRoleScalarFieldEnum = (typeof WorkforceCustomRoleScalarFieldEnum)[keyof typeof WorkforceCustomRoleScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'WorkforceEmployeeStatus'
   */
  export type EnumWorkforceEmployeeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WorkforceEmployeeStatus'>
    


  /**
   * Reference to a field of type 'WorkforceEmployeeStatus[]'
   */
  export type ListEnumWorkforceEmployeeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WorkforceEmployeeStatus[]'>
    


  /**
   * Reference to a field of type 'WorkforceTaskPriority'
   */
  export type EnumWorkforceTaskPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WorkforceTaskPriority'>
    


  /**
   * Reference to a field of type 'WorkforceTaskPriority[]'
   */
  export type ListEnumWorkforceTaskPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WorkforceTaskPriority[]'>
    


  /**
   * Reference to a field of type 'WorkforceTaskStatus'
   */
  export type EnumWorkforceTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WorkforceTaskStatus'>
    


  /**
   * Reference to a field of type 'WorkforceTaskStatus[]'
   */
  export type ListEnumWorkforceTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WorkforceTaskStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type WorkforceUserWhereInput = {
    AND?: WorkforceUserWhereInput | WorkforceUserWhereInput[]
    OR?: WorkforceUserWhereInput[]
    NOT?: WorkforceUserWhereInput | WorkforceUserWhereInput[]
    id?: StringFilter<"WorkforceUser"> | string
    email?: StringFilter<"WorkforceUser"> | string
    passwordHash?: StringFilter<"WorkforceUser"> | string
    profileId?: StringNullableFilter<"WorkforceUser"> | string | null
    createdAt?: DateTimeFilter<"WorkforceUser"> | Date | string
    profile?: XOR<WorkforceProfileNullableScalarRelationFilter, WorkforceProfileWhereInput> | null
    memberships?: WorkforceTeamMemberListRelationFilter
    ownedTeams?: WorkforceTeamListRelationFilter
  }

  export type WorkforceUserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    profileId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    profile?: WorkforceProfileOrderByWithRelationInput
    memberships?: WorkforceTeamMemberOrderByRelationAggregateInput
    ownedTeams?: WorkforceTeamOrderByRelationAggregateInput
  }

  export type WorkforceUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    profileId?: string
    AND?: WorkforceUserWhereInput | WorkforceUserWhereInput[]
    OR?: WorkforceUserWhereInput[]
    NOT?: WorkforceUserWhereInput | WorkforceUserWhereInput[]
    passwordHash?: StringFilter<"WorkforceUser"> | string
    createdAt?: DateTimeFilter<"WorkforceUser"> | Date | string
    profile?: XOR<WorkforceProfileNullableScalarRelationFilter, WorkforceProfileWhereInput> | null
    memberships?: WorkforceTeamMemberListRelationFilter
    ownedTeams?: WorkforceTeamListRelationFilter
  }, "id" | "email" | "profileId">

  export type WorkforceUserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    profileId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: WorkforceUserCountOrderByAggregateInput
    _max?: WorkforceUserMaxOrderByAggregateInput
    _min?: WorkforceUserMinOrderByAggregateInput
  }

  export type WorkforceUserScalarWhereWithAggregatesInput = {
    AND?: WorkforceUserScalarWhereWithAggregatesInput | WorkforceUserScalarWhereWithAggregatesInput[]
    OR?: WorkforceUserScalarWhereWithAggregatesInput[]
    NOT?: WorkforceUserScalarWhereWithAggregatesInput | WorkforceUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkforceUser"> | string
    email?: StringWithAggregatesFilter<"WorkforceUser"> | string
    passwordHash?: StringWithAggregatesFilter<"WorkforceUser"> | string
    profileId?: StringNullableWithAggregatesFilter<"WorkforceUser"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"WorkforceUser"> | Date | string
  }

  export type WorkforceTeamWhereInput = {
    AND?: WorkforceTeamWhereInput | WorkforceTeamWhereInput[]
    OR?: WorkforceTeamWhereInput[]
    NOT?: WorkforceTeamWhereInput | WorkforceTeamWhereInput[]
    id?: StringFilter<"WorkforceTeam"> | string
    name?: StringFilter<"WorkforceTeam"> | string
    ownerId?: StringFilter<"WorkforceTeam"> | string
    createdAt?: DateTimeFilter<"WorkforceTeam"> | Date | string
    updatedAt?: DateTimeFilter<"WorkforceTeam"> | Date | string
    owner?: XOR<WorkforceUserScalarRelationFilter, WorkforceUserWhereInput>
    members?: WorkforceTeamMemberListRelationFilter
    profiles?: WorkforceProfileListRelationFilter
    departments?: WorkforceDepartmentListRelationFilter
    employees?: WorkforceEmployeeListRelationFilter
    tasks?: WorkforceTaskListRelationFilter
    invitations?: WorkforceInvitationListRelationFilter
    notifications?: WorkforceNotificationListRelationFilter
    roles?: WorkforceCustomRoleListRelationFilter
  }

  export type WorkforceTeamOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    owner?: WorkforceUserOrderByWithRelationInput
    members?: WorkforceTeamMemberOrderByRelationAggregateInput
    profiles?: WorkforceProfileOrderByRelationAggregateInput
    departments?: WorkforceDepartmentOrderByRelationAggregateInput
    employees?: WorkforceEmployeeOrderByRelationAggregateInput
    tasks?: WorkforceTaskOrderByRelationAggregateInput
    invitations?: WorkforceInvitationOrderByRelationAggregateInput
    notifications?: WorkforceNotificationOrderByRelationAggregateInput
    roles?: WorkforceCustomRoleOrderByRelationAggregateInput
  }

  export type WorkforceTeamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkforceTeamWhereInput | WorkforceTeamWhereInput[]
    OR?: WorkforceTeamWhereInput[]
    NOT?: WorkforceTeamWhereInput | WorkforceTeamWhereInput[]
    name?: StringFilter<"WorkforceTeam"> | string
    ownerId?: StringFilter<"WorkforceTeam"> | string
    createdAt?: DateTimeFilter<"WorkforceTeam"> | Date | string
    updatedAt?: DateTimeFilter<"WorkforceTeam"> | Date | string
    owner?: XOR<WorkforceUserScalarRelationFilter, WorkforceUserWhereInput>
    members?: WorkforceTeamMemberListRelationFilter
    profiles?: WorkforceProfileListRelationFilter
    departments?: WorkforceDepartmentListRelationFilter
    employees?: WorkforceEmployeeListRelationFilter
    tasks?: WorkforceTaskListRelationFilter
    invitations?: WorkforceInvitationListRelationFilter
    notifications?: WorkforceNotificationListRelationFilter
    roles?: WorkforceCustomRoleListRelationFilter
  }, "id">

  export type WorkforceTeamOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkforceTeamCountOrderByAggregateInput
    _max?: WorkforceTeamMaxOrderByAggregateInput
    _min?: WorkforceTeamMinOrderByAggregateInput
  }

  export type WorkforceTeamScalarWhereWithAggregatesInput = {
    AND?: WorkforceTeamScalarWhereWithAggregatesInput | WorkforceTeamScalarWhereWithAggregatesInput[]
    OR?: WorkforceTeamScalarWhereWithAggregatesInput[]
    NOT?: WorkforceTeamScalarWhereWithAggregatesInput | WorkforceTeamScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkforceTeam"> | string
    name?: StringWithAggregatesFilter<"WorkforceTeam"> | string
    ownerId?: StringWithAggregatesFilter<"WorkforceTeam"> | string
    createdAt?: DateTimeWithAggregatesFilter<"WorkforceTeam"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WorkforceTeam"> | Date | string
  }

  export type WorkforceProfileWhereInput = {
    AND?: WorkforceProfileWhereInput | WorkforceProfileWhereInput[]
    OR?: WorkforceProfileWhereInput[]
    NOT?: WorkforceProfileWhereInput | WorkforceProfileWhereInput[]
    id?: StringFilter<"WorkforceProfile"> | string
    email?: StringFilter<"WorkforceProfile"> | string
    firstName?: StringNullableFilter<"WorkforceProfile"> | string | null
    lastName?: StringNullableFilter<"WorkforceProfile"> | string | null
    role?: StringFilter<"WorkforceProfile"> | string
    teamId?: StringNullableFilter<"WorkforceProfile"> | string | null
    createdAt?: DateTimeFilter<"WorkforceProfile"> | Date | string
    updatedAt?: DateTimeFilter<"WorkforceProfile"> | Date | string
    user?: XOR<WorkforceUserNullableScalarRelationFilter, WorkforceUserWhereInput> | null
    team?: XOR<WorkforceTeamNullableScalarRelationFilter, WorkforceTeamWhereInput> | null
    employees?: WorkforceEmployeeListRelationFilter
    assignedTasks?: WorkforceTaskListRelationFilter
    createdTasks?: WorkforceTaskListRelationFilter
    notifications?: WorkforceNotificationListRelationFilter
    managedDepartments?: WorkforceDepartmentListRelationFilter
    managedEmployees?: WorkforceEmployeeListRelationFilter
    sentInvitations?: WorkforceInvitationListRelationFilter
  }

  export type WorkforceProfileOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    role?: SortOrder
    teamId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: WorkforceUserOrderByWithRelationInput
    team?: WorkforceTeamOrderByWithRelationInput
    employees?: WorkforceEmployeeOrderByRelationAggregateInput
    assignedTasks?: WorkforceTaskOrderByRelationAggregateInput
    createdTasks?: WorkforceTaskOrderByRelationAggregateInput
    notifications?: WorkforceNotificationOrderByRelationAggregateInput
    managedDepartments?: WorkforceDepartmentOrderByRelationAggregateInput
    managedEmployees?: WorkforceEmployeeOrderByRelationAggregateInput
    sentInvitations?: WorkforceInvitationOrderByRelationAggregateInput
  }

  export type WorkforceProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: WorkforceProfileWhereInput | WorkforceProfileWhereInput[]
    OR?: WorkforceProfileWhereInput[]
    NOT?: WorkforceProfileWhereInput | WorkforceProfileWhereInput[]
    firstName?: StringNullableFilter<"WorkforceProfile"> | string | null
    lastName?: StringNullableFilter<"WorkforceProfile"> | string | null
    role?: StringFilter<"WorkforceProfile"> | string
    teamId?: StringNullableFilter<"WorkforceProfile"> | string | null
    createdAt?: DateTimeFilter<"WorkforceProfile"> | Date | string
    updatedAt?: DateTimeFilter<"WorkforceProfile"> | Date | string
    user?: XOR<WorkforceUserNullableScalarRelationFilter, WorkforceUserWhereInput> | null
    team?: XOR<WorkforceTeamNullableScalarRelationFilter, WorkforceTeamWhereInput> | null
    employees?: WorkforceEmployeeListRelationFilter
    assignedTasks?: WorkforceTaskListRelationFilter
    createdTasks?: WorkforceTaskListRelationFilter
    notifications?: WorkforceNotificationListRelationFilter
    managedDepartments?: WorkforceDepartmentListRelationFilter
    managedEmployees?: WorkforceEmployeeListRelationFilter
    sentInvitations?: WorkforceInvitationListRelationFilter
  }, "id" | "email">

  export type WorkforceProfileOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    role?: SortOrder
    teamId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkforceProfileCountOrderByAggregateInput
    _max?: WorkforceProfileMaxOrderByAggregateInput
    _min?: WorkforceProfileMinOrderByAggregateInput
  }

  export type WorkforceProfileScalarWhereWithAggregatesInput = {
    AND?: WorkforceProfileScalarWhereWithAggregatesInput | WorkforceProfileScalarWhereWithAggregatesInput[]
    OR?: WorkforceProfileScalarWhereWithAggregatesInput[]
    NOT?: WorkforceProfileScalarWhereWithAggregatesInput | WorkforceProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkforceProfile"> | string
    email?: StringWithAggregatesFilter<"WorkforceProfile"> | string
    firstName?: StringNullableWithAggregatesFilter<"WorkforceProfile"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"WorkforceProfile"> | string | null
    role?: StringWithAggregatesFilter<"WorkforceProfile"> | string
    teamId?: StringNullableWithAggregatesFilter<"WorkforceProfile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"WorkforceProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WorkforceProfile"> | Date | string
  }

  export type WorkforceTeamMemberWhereInput = {
    AND?: WorkforceTeamMemberWhereInput | WorkforceTeamMemberWhereInput[]
    OR?: WorkforceTeamMemberWhereInput[]
    NOT?: WorkforceTeamMemberWhereInput | WorkforceTeamMemberWhereInput[]
    id?: StringFilter<"WorkforceTeamMember"> | string
    userId?: StringFilter<"WorkforceTeamMember"> | string
    teamId?: StringFilter<"WorkforceTeamMember"> | string
    role?: StringFilter<"WorkforceTeamMember"> | string
    isActive?: BoolFilter<"WorkforceTeamMember"> | boolean
    createdAt?: DateTimeFilter<"WorkforceTeamMember"> | Date | string
    updatedAt?: DateTimeFilter<"WorkforceTeamMember"> | Date | string
    user?: XOR<WorkforceUserScalarRelationFilter, WorkforceUserWhereInput>
    team?: XOR<WorkforceTeamScalarRelationFilter, WorkforceTeamWhereInput>
  }

  export type WorkforceTeamMemberOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: WorkforceUserOrderByWithRelationInput
    team?: WorkforceTeamOrderByWithRelationInput
  }

  export type WorkforceTeamMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_teamId?: WorkforceTeamMemberUserIdTeamIdCompoundUniqueInput
    AND?: WorkforceTeamMemberWhereInput | WorkforceTeamMemberWhereInput[]
    OR?: WorkforceTeamMemberWhereInput[]
    NOT?: WorkforceTeamMemberWhereInput | WorkforceTeamMemberWhereInput[]
    userId?: StringFilter<"WorkforceTeamMember"> | string
    teamId?: StringFilter<"WorkforceTeamMember"> | string
    role?: StringFilter<"WorkforceTeamMember"> | string
    isActive?: BoolFilter<"WorkforceTeamMember"> | boolean
    createdAt?: DateTimeFilter<"WorkforceTeamMember"> | Date | string
    updatedAt?: DateTimeFilter<"WorkforceTeamMember"> | Date | string
    user?: XOR<WorkforceUserScalarRelationFilter, WorkforceUserWhereInput>
    team?: XOR<WorkforceTeamScalarRelationFilter, WorkforceTeamWhereInput>
  }, "id" | "userId_teamId">

  export type WorkforceTeamMemberOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkforceTeamMemberCountOrderByAggregateInput
    _max?: WorkforceTeamMemberMaxOrderByAggregateInput
    _min?: WorkforceTeamMemberMinOrderByAggregateInput
  }

  export type WorkforceTeamMemberScalarWhereWithAggregatesInput = {
    AND?: WorkforceTeamMemberScalarWhereWithAggregatesInput | WorkforceTeamMemberScalarWhereWithAggregatesInput[]
    OR?: WorkforceTeamMemberScalarWhereWithAggregatesInput[]
    NOT?: WorkforceTeamMemberScalarWhereWithAggregatesInput | WorkforceTeamMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkforceTeamMember"> | string
    userId?: StringWithAggregatesFilter<"WorkforceTeamMember"> | string
    teamId?: StringWithAggregatesFilter<"WorkforceTeamMember"> | string
    role?: StringWithAggregatesFilter<"WorkforceTeamMember"> | string
    isActive?: BoolWithAggregatesFilter<"WorkforceTeamMember"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"WorkforceTeamMember"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WorkforceTeamMember"> | Date | string
  }

  export type WorkforceDepartmentWhereInput = {
    AND?: WorkforceDepartmentWhereInput | WorkforceDepartmentWhereInput[]
    OR?: WorkforceDepartmentWhereInput[]
    NOT?: WorkforceDepartmentWhereInput | WorkforceDepartmentWhereInput[]
    id?: StringFilter<"WorkforceDepartment"> | string
    teamId?: StringFilter<"WorkforceDepartment"> | string
    name?: StringFilter<"WorkforceDepartment"> | string
    icon?: StringNullableFilter<"WorkforceDepartment"> | string | null
    managerId?: StringNullableFilter<"WorkforceDepartment"> | string | null
    createdAt?: DateTimeFilter<"WorkforceDepartment"> | Date | string
    updatedAt?: DateTimeFilter<"WorkforceDepartment"> | Date | string
    team?: XOR<WorkforceTeamScalarRelationFilter, WorkforceTeamWhereInput>
    manager?: XOR<WorkforceProfileNullableScalarRelationFilter, WorkforceProfileWhereInput> | null
    employees?: WorkforceEmployeeListRelationFilter
    tasks?: WorkforceTaskListRelationFilter
  }

  export type WorkforceDepartmentOrderByWithRelationInput = {
    id?: SortOrder
    teamId?: SortOrder
    name?: SortOrder
    icon?: SortOrderInput | SortOrder
    managerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    team?: WorkforceTeamOrderByWithRelationInput
    manager?: WorkforceProfileOrderByWithRelationInput
    employees?: WorkforceEmployeeOrderByRelationAggregateInput
    tasks?: WorkforceTaskOrderByRelationAggregateInput
  }

  export type WorkforceDepartmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkforceDepartmentWhereInput | WorkforceDepartmentWhereInput[]
    OR?: WorkforceDepartmentWhereInput[]
    NOT?: WorkforceDepartmentWhereInput | WorkforceDepartmentWhereInput[]
    teamId?: StringFilter<"WorkforceDepartment"> | string
    name?: StringFilter<"WorkforceDepartment"> | string
    icon?: StringNullableFilter<"WorkforceDepartment"> | string | null
    managerId?: StringNullableFilter<"WorkforceDepartment"> | string | null
    createdAt?: DateTimeFilter<"WorkforceDepartment"> | Date | string
    updatedAt?: DateTimeFilter<"WorkforceDepartment"> | Date | string
    team?: XOR<WorkforceTeamScalarRelationFilter, WorkforceTeamWhereInput>
    manager?: XOR<WorkforceProfileNullableScalarRelationFilter, WorkforceProfileWhereInput> | null
    employees?: WorkforceEmployeeListRelationFilter
    tasks?: WorkforceTaskListRelationFilter
  }, "id">

  export type WorkforceDepartmentOrderByWithAggregationInput = {
    id?: SortOrder
    teamId?: SortOrder
    name?: SortOrder
    icon?: SortOrderInput | SortOrder
    managerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkforceDepartmentCountOrderByAggregateInput
    _max?: WorkforceDepartmentMaxOrderByAggregateInput
    _min?: WorkforceDepartmentMinOrderByAggregateInput
  }

  export type WorkforceDepartmentScalarWhereWithAggregatesInput = {
    AND?: WorkforceDepartmentScalarWhereWithAggregatesInput | WorkforceDepartmentScalarWhereWithAggregatesInput[]
    OR?: WorkforceDepartmentScalarWhereWithAggregatesInput[]
    NOT?: WorkforceDepartmentScalarWhereWithAggregatesInput | WorkforceDepartmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkforceDepartment"> | string
    teamId?: StringWithAggregatesFilter<"WorkforceDepartment"> | string
    name?: StringWithAggregatesFilter<"WorkforceDepartment"> | string
    icon?: StringNullableWithAggregatesFilter<"WorkforceDepartment"> | string | null
    managerId?: StringNullableWithAggregatesFilter<"WorkforceDepartment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"WorkforceDepartment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WorkforceDepartment"> | Date | string
  }

  export type WorkforceEmployeeWhereInput = {
    AND?: WorkforceEmployeeWhereInput | WorkforceEmployeeWhereInput[]
    OR?: WorkforceEmployeeWhereInput[]
    NOT?: WorkforceEmployeeWhereInput | WorkforceEmployeeWhereInput[]
    id?: StringFilter<"WorkforceEmployee"> | string
    teamId?: StringFilter<"WorkforceEmployee"> | string
    profileId?: StringFilter<"WorkforceEmployee"> | string
    departmentId?: StringNullableFilter<"WorkforceEmployee"> | string | null
    position?: StringNullableFilter<"WorkforceEmployee"> | string | null
    joinDate?: DateTimeNullableFilter<"WorkforceEmployee"> | Date | string | null
    salary?: DecimalNullableFilter<"WorkforceEmployee"> | Decimal | DecimalJsLike | number | string | null
    status?: EnumWorkforceEmployeeStatusFilter<"WorkforceEmployee"> | $Enums.WorkforceEmployeeStatus
    managerId?: StringNullableFilter<"WorkforceEmployee"> | string | null
    createdAt?: DateTimeFilter<"WorkforceEmployee"> | Date | string
    updatedAt?: DateTimeFilter<"WorkforceEmployee"> | Date | string
    team?: XOR<WorkforceTeamScalarRelationFilter, WorkforceTeamWhereInput>
    profile?: XOR<WorkforceProfileScalarRelationFilter, WorkforceProfileWhereInput>
    department?: XOR<WorkforceDepartmentNullableScalarRelationFilter, WorkforceDepartmentWhereInput> | null
    manager?: XOR<WorkforceProfileNullableScalarRelationFilter, WorkforceProfileWhereInput> | null
  }

  export type WorkforceEmployeeOrderByWithRelationInput = {
    id?: SortOrder
    teamId?: SortOrder
    profileId?: SortOrder
    departmentId?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    joinDate?: SortOrderInput | SortOrder
    salary?: SortOrderInput | SortOrder
    status?: SortOrder
    managerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    team?: WorkforceTeamOrderByWithRelationInput
    profile?: WorkforceProfileOrderByWithRelationInput
    department?: WorkforceDepartmentOrderByWithRelationInput
    manager?: WorkforceProfileOrderByWithRelationInput
  }

  export type WorkforceEmployeeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkforceEmployeeWhereInput | WorkforceEmployeeWhereInput[]
    OR?: WorkforceEmployeeWhereInput[]
    NOT?: WorkforceEmployeeWhereInput | WorkforceEmployeeWhereInput[]
    teamId?: StringFilter<"WorkforceEmployee"> | string
    profileId?: StringFilter<"WorkforceEmployee"> | string
    departmentId?: StringNullableFilter<"WorkforceEmployee"> | string | null
    position?: StringNullableFilter<"WorkforceEmployee"> | string | null
    joinDate?: DateTimeNullableFilter<"WorkforceEmployee"> | Date | string | null
    salary?: DecimalNullableFilter<"WorkforceEmployee"> | Decimal | DecimalJsLike | number | string | null
    status?: EnumWorkforceEmployeeStatusFilter<"WorkforceEmployee"> | $Enums.WorkforceEmployeeStatus
    managerId?: StringNullableFilter<"WorkforceEmployee"> | string | null
    createdAt?: DateTimeFilter<"WorkforceEmployee"> | Date | string
    updatedAt?: DateTimeFilter<"WorkforceEmployee"> | Date | string
    team?: XOR<WorkforceTeamScalarRelationFilter, WorkforceTeamWhereInput>
    profile?: XOR<WorkforceProfileScalarRelationFilter, WorkforceProfileWhereInput>
    department?: XOR<WorkforceDepartmentNullableScalarRelationFilter, WorkforceDepartmentWhereInput> | null
    manager?: XOR<WorkforceProfileNullableScalarRelationFilter, WorkforceProfileWhereInput> | null
  }, "id">

  export type WorkforceEmployeeOrderByWithAggregationInput = {
    id?: SortOrder
    teamId?: SortOrder
    profileId?: SortOrder
    departmentId?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    joinDate?: SortOrderInput | SortOrder
    salary?: SortOrderInput | SortOrder
    status?: SortOrder
    managerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkforceEmployeeCountOrderByAggregateInput
    _avg?: WorkforceEmployeeAvgOrderByAggregateInput
    _max?: WorkforceEmployeeMaxOrderByAggregateInput
    _min?: WorkforceEmployeeMinOrderByAggregateInput
    _sum?: WorkforceEmployeeSumOrderByAggregateInput
  }

  export type WorkforceEmployeeScalarWhereWithAggregatesInput = {
    AND?: WorkforceEmployeeScalarWhereWithAggregatesInput | WorkforceEmployeeScalarWhereWithAggregatesInput[]
    OR?: WorkforceEmployeeScalarWhereWithAggregatesInput[]
    NOT?: WorkforceEmployeeScalarWhereWithAggregatesInput | WorkforceEmployeeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkforceEmployee"> | string
    teamId?: StringWithAggregatesFilter<"WorkforceEmployee"> | string
    profileId?: StringWithAggregatesFilter<"WorkforceEmployee"> | string
    departmentId?: StringNullableWithAggregatesFilter<"WorkforceEmployee"> | string | null
    position?: StringNullableWithAggregatesFilter<"WorkforceEmployee"> | string | null
    joinDate?: DateTimeNullableWithAggregatesFilter<"WorkforceEmployee"> | Date | string | null
    salary?: DecimalNullableWithAggregatesFilter<"WorkforceEmployee"> | Decimal | DecimalJsLike | number | string | null
    status?: EnumWorkforceEmployeeStatusWithAggregatesFilter<"WorkforceEmployee"> | $Enums.WorkforceEmployeeStatus
    managerId?: StringNullableWithAggregatesFilter<"WorkforceEmployee"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"WorkforceEmployee"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WorkforceEmployee"> | Date | string
  }

  export type WorkforceTaskWhereInput = {
    AND?: WorkforceTaskWhereInput | WorkforceTaskWhereInput[]
    OR?: WorkforceTaskWhereInput[]
    NOT?: WorkforceTaskWhereInput | WorkforceTaskWhereInput[]
    id?: StringFilter<"WorkforceTask"> | string
    teamId?: StringFilter<"WorkforceTask"> | string
    title?: StringFilter<"WorkforceTask"> | string
    description?: StringNullableFilter<"WorkforceTask"> | string | null
    priority?: EnumWorkforceTaskPriorityFilter<"WorkforceTask"> | $Enums.WorkforceTaskPriority
    status?: EnumWorkforceTaskStatusFilter<"WorkforceTask"> | $Enums.WorkforceTaskStatus
    departmentId?: StringNullableFilter<"WorkforceTask"> | string | null
    assigneeId?: StringNullableFilter<"WorkforceTask"> | string | null
    createdById?: StringNullableFilter<"WorkforceTask"> | string | null
    dueDate?: DateTimeNullableFilter<"WorkforceTask"> | Date | string | null
    createdAt?: DateTimeFilter<"WorkforceTask"> | Date | string
    updatedAt?: DateTimeFilter<"WorkforceTask"> | Date | string
    team?: XOR<WorkforceTeamScalarRelationFilter, WorkforceTeamWhereInput>
    department?: XOR<WorkforceDepartmentNullableScalarRelationFilter, WorkforceDepartmentWhereInput> | null
    assignee?: XOR<WorkforceProfileNullableScalarRelationFilter, WorkforceProfileWhereInput> | null
    creator?: XOR<WorkforceProfileNullableScalarRelationFilter, WorkforceProfileWhereInput> | null
  }

  export type WorkforceTaskOrderByWithRelationInput = {
    id?: SortOrder
    teamId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    priority?: SortOrder
    status?: SortOrder
    departmentId?: SortOrderInput | SortOrder
    assigneeId?: SortOrderInput | SortOrder
    createdById?: SortOrderInput | SortOrder
    dueDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    team?: WorkforceTeamOrderByWithRelationInput
    department?: WorkforceDepartmentOrderByWithRelationInput
    assignee?: WorkforceProfileOrderByWithRelationInput
    creator?: WorkforceProfileOrderByWithRelationInput
  }

  export type WorkforceTaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkforceTaskWhereInput | WorkforceTaskWhereInput[]
    OR?: WorkforceTaskWhereInput[]
    NOT?: WorkforceTaskWhereInput | WorkforceTaskWhereInput[]
    teamId?: StringFilter<"WorkforceTask"> | string
    title?: StringFilter<"WorkforceTask"> | string
    description?: StringNullableFilter<"WorkforceTask"> | string | null
    priority?: EnumWorkforceTaskPriorityFilter<"WorkforceTask"> | $Enums.WorkforceTaskPriority
    status?: EnumWorkforceTaskStatusFilter<"WorkforceTask"> | $Enums.WorkforceTaskStatus
    departmentId?: StringNullableFilter<"WorkforceTask"> | string | null
    assigneeId?: StringNullableFilter<"WorkforceTask"> | string | null
    createdById?: StringNullableFilter<"WorkforceTask"> | string | null
    dueDate?: DateTimeNullableFilter<"WorkforceTask"> | Date | string | null
    createdAt?: DateTimeFilter<"WorkforceTask"> | Date | string
    updatedAt?: DateTimeFilter<"WorkforceTask"> | Date | string
    team?: XOR<WorkforceTeamScalarRelationFilter, WorkforceTeamWhereInput>
    department?: XOR<WorkforceDepartmentNullableScalarRelationFilter, WorkforceDepartmentWhereInput> | null
    assignee?: XOR<WorkforceProfileNullableScalarRelationFilter, WorkforceProfileWhereInput> | null
    creator?: XOR<WorkforceProfileNullableScalarRelationFilter, WorkforceProfileWhereInput> | null
  }, "id">

  export type WorkforceTaskOrderByWithAggregationInput = {
    id?: SortOrder
    teamId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    priority?: SortOrder
    status?: SortOrder
    departmentId?: SortOrderInput | SortOrder
    assigneeId?: SortOrderInput | SortOrder
    createdById?: SortOrderInput | SortOrder
    dueDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkforceTaskCountOrderByAggregateInput
    _max?: WorkforceTaskMaxOrderByAggregateInput
    _min?: WorkforceTaskMinOrderByAggregateInput
  }

  export type WorkforceTaskScalarWhereWithAggregatesInput = {
    AND?: WorkforceTaskScalarWhereWithAggregatesInput | WorkforceTaskScalarWhereWithAggregatesInput[]
    OR?: WorkforceTaskScalarWhereWithAggregatesInput[]
    NOT?: WorkforceTaskScalarWhereWithAggregatesInput | WorkforceTaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkforceTask"> | string
    teamId?: StringWithAggregatesFilter<"WorkforceTask"> | string
    title?: StringWithAggregatesFilter<"WorkforceTask"> | string
    description?: StringNullableWithAggregatesFilter<"WorkforceTask"> | string | null
    priority?: EnumWorkforceTaskPriorityWithAggregatesFilter<"WorkforceTask"> | $Enums.WorkforceTaskPriority
    status?: EnumWorkforceTaskStatusWithAggregatesFilter<"WorkforceTask"> | $Enums.WorkforceTaskStatus
    departmentId?: StringNullableWithAggregatesFilter<"WorkforceTask"> | string | null
    assigneeId?: StringNullableWithAggregatesFilter<"WorkforceTask"> | string | null
    createdById?: StringNullableWithAggregatesFilter<"WorkforceTask"> | string | null
    dueDate?: DateTimeNullableWithAggregatesFilter<"WorkforceTask"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"WorkforceTask"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WorkforceTask"> | Date | string
  }

  export type WorkforceInvitationWhereInput = {
    AND?: WorkforceInvitationWhereInput | WorkforceInvitationWhereInput[]
    OR?: WorkforceInvitationWhereInput[]
    NOT?: WorkforceInvitationWhereInput | WorkforceInvitationWhereInput[]
    id?: StringFilter<"WorkforceInvitation"> | string
    teamId?: StringFilter<"WorkforceInvitation"> | string
    email?: StringFilter<"WorkforceInvitation"> | string
    role?: StringFilter<"WorkforceInvitation"> | string
    token?: StringFilter<"WorkforceInvitation"> | string
    expiresAt?: DateTimeNullableFilter<"WorkforceInvitation"> | Date | string | null
    invitedById?: StringFilter<"WorkforceInvitation"> | string
    acceptedAt?: DateTimeNullableFilter<"WorkforceInvitation"> | Date | string | null
    createdAt?: DateTimeFilter<"WorkforceInvitation"> | Date | string
    updatedAt?: DateTimeFilter<"WorkforceInvitation"> | Date | string
    team?: XOR<WorkforceTeamScalarRelationFilter, WorkforceTeamWhereInput>
    invitedBy?: XOR<WorkforceProfileScalarRelationFilter, WorkforceProfileWhereInput>
  }

  export type WorkforceInvitationOrderByWithRelationInput = {
    id?: SortOrder
    teamId?: SortOrder
    email?: SortOrder
    role?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    invitedById?: SortOrder
    acceptedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    team?: WorkforceTeamOrderByWithRelationInput
    invitedBy?: WorkforceProfileOrderByWithRelationInput
  }

  export type WorkforceInvitationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: WorkforceInvitationWhereInput | WorkforceInvitationWhereInput[]
    OR?: WorkforceInvitationWhereInput[]
    NOT?: WorkforceInvitationWhereInput | WorkforceInvitationWhereInput[]
    teamId?: StringFilter<"WorkforceInvitation"> | string
    email?: StringFilter<"WorkforceInvitation"> | string
    role?: StringFilter<"WorkforceInvitation"> | string
    expiresAt?: DateTimeNullableFilter<"WorkforceInvitation"> | Date | string | null
    invitedById?: StringFilter<"WorkforceInvitation"> | string
    acceptedAt?: DateTimeNullableFilter<"WorkforceInvitation"> | Date | string | null
    createdAt?: DateTimeFilter<"WorkforceInvitation"> | Date | string
    updatedAt?: DateTimeFilter<"WorkforceInvitation"> | Date | string
    team?: XOR<WorkforceTeamScalarRelationFilter, WorkforceTeamWhereInput>
    invitedBy?: XOR<WorkforceProfileScalarRelationFilter, WorkforceProfileWhereInput>
  }, "id" | "token">

  export type WorkforceInvitationOrderByWithAggregationInput = {
    id?: SortOrder
    teamId?: SortOrder
    email?: SortOrder
    role?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    invitedById?: SortOrder
    acceptedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkforceInvitationCountOrderByAggregateInput
    _max?: WorkforceInvitationMaxOrderByAggregateInput
    _min?: WorkforceInvitationMinOrderByAggregateInput
  }

  export type WorkforceInvitationScalarWhereWithAggregatesInput = {
    AND?: WorkforceInvitationScalarWhereWithAggregatesInput | WorkforceInvitationScalarWhereWithAggregatesInput[]
    OR?: WorkforceInvitationScalarWhereWithAggregatesInput[]
    NOT?: WorkforceInvitationScalarWhereWithAggregatesInput | WorkforceInvitationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkforceInvitation"> | string
    teamId?: StringWithAggregatesFilter<"WorkforceInvitation"> | string
    email?: StringWithAggregatesFilter<"WorkforceInvitation"> | string
    role?: StringWithAggregatesFilter<"WorkforceInvitation"> | string
    token?: StringWithAggregatesFilter<"WorkforceInvitation"> | string
    expiresAt?: DateTimeNullableWithAggregatesFilter<"WorkforceInvitation"> | Date | string | null
    invitedById?: StringWithAggregatesFilter<"WorkforceInvitation"> | string
    acceptedAt?: DateTimeNullableWithAggregatesFilter<"WorkforceInvitation"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"WorkforceInvitation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WorkforceInvitation"> | Date | string
  }

  export type WorkforceNotificationWhereInput = {
    AND?: WorkforceNotificationWhereInput | WorkforceNotificationWhereInput[]
    OR?: WorkforceNotificationWhereInput[]
    NOT?: WorkforceNotificationWhereInput | WorkforceNotificationWhereInput[]
    id?: StringFilter<"WorkforceNotification"> | string
    userId?: StringFilter<"WorkforceNotification"> | string
    type?: StringFilter<"WorkforceNotification"> | string
    title?: StringFilter<"WorkforceNotification"> | string
    message?: StringFilter<"WorkforceNotification"> | string
    data?: JsonNullableFilter<"WorkforceNotification">
    read?: BoolFilter<"WorkforceNotification"> | boolean
    teamId?: StringNullableFilter<"WorkforceNotification"> | string | null
    createdAt?: DateTimeFilter<"WorkforceNotification"> | Date | string
    updatedAt?: DateTimeFilter<"WorkforceNotification"> | Date | string
    user?: XOR<WorkforceProfileScalarRelationFilter, WorkforceProfileWhereInput>
    team?: XOR<WorkforceTeamNullableScalarRelationFilter, WorkforceTeamWhereInput> | null
  }

  export type WorkforceNotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    data?: SortOrderInput | SortOrder
    read?: SortOrder
    teamId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: WorkforceProfileOrderByWithRelationInput
    team?: WorkforceTeamOrderByWithRelationInput
  }

  export type WorkforceNotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkforceNotificationWhereInput | WorkforceNotificationWhereInput[]
    OR?: WorkforceNotificationWhereInput[]
    NOT?: WorkforceNotificationWhereInput | WorkforceNotificationWhereInput[]
    userId?: StringFilter<"WorkforceNotification"> | string
    type?: StringFilter<"WorkforceNotification"> | string
    title?: StringFilter<"WorkforceNotification"> | string
    message?: StringFilter<"WorkforceNotification"> | string
    data?: JsonNullableFilter<"WorkforceNotification">
    read?: BoolFilter<"WorkforceNotification"> | boolean
    teamId?: StringNullableFilter<"WorkforceNotification"> | string | null
    createdAt?: DateTimeFilter<"WorkforceNotification"> | Date | string
    updatedAt?: DateTimeFilter<"WorkforceNotification"> | Date | string
    user?: XOR<WorkforceProfileScalarRelationFilter, WorkforceProfileWhereInput>
    team?: XOR<WorkforceTeamNullableScalarRelationFilter, WorkforceTeamWhereInput> | null
  }, "id">

  export type WorkforceNotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    data?: SortOrderInput | SortOrder
    read?: SortOrder
    teamId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkforceNotificationCountOrderByAggregateInput
    _max?: WorkforceNotificationMaxOrderByAggregateInput
    _min?: WorkforceNotificationMinOrderByAggregateInput
  }

  export type WorkforceNotificationScalarWhereWithAggregatesInput = {
    AND?: WorkforceNotificationScalarWhereWithAggregatesInput | WorkforceNotificationScalarWhereWithAggregatesInput[]
    OR?: WorkforceNotificationScalarWhereWithAggregatesInput[]
    NOT?: WorkforceNotificationScalarWhereWithAggregatesInput | WorkforceNotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkforceNotification"> | string
    userId?: StringWithAggregatesFilter<"WorkforceNotification"> | string
    type?: StringWithAggregatesFilter<"WorkforceNotification"> | string
    title?: StringWithAggregatesFilter<"WorkforceNotification"> | string
    message?: StringWithAggregatesFilter<"WorkforceNotification"> | string
    data?: JsonNullableWithAggregatesFilter<"WorkforceNotification">
    read?: BoolWithAggregatesFilter<"WorkforceNotification"> | boolean
    teamId?: StringNullableWithAggregatesFilter<"WorkforceNotification"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"WorkforceNotification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WorkforceNotification"> | Date | string
  }

  export type WorkforceCustomRoleWhereInput = {
    AND?: WorkforceCustomRoleWhereInput | WorkforceCustomRoleWhereInput[]
    OR?: WorkforceCustomRoleWhereInput[]
    NOT?: WorkforceCustomRoleWhereInput | WorkforceCustomRoleWhereInput[]
    id?: StringFilter<"WorkforceCustomRole"> | string
    teamId?: StringFilter<"WorkforceCustomRole"> | string
    name?: StringFilter<"WorkforceCustomRole"> | string
    label?: StringFilter<"WorkforceCustomRole"> | string
    permissions?: JsonFilter<"WorkforceCustomRole">
    createdAt?: DateTimeFilter<"WorkforceCustomRole"> | Date | string
    updatedAt?: DateTimeFilter<"WorkforceCustomRole"> | Date | string
    team?: XOR<WorkforceTeamScalarRelationFilter, WorkforceTeamWhereInput>
  }

  export type WorkforceCustomRoleOrderByWithRelationInput = {
    id?: SortOrder
    teamId?: SortOrder
    name?: SortOrder
    label?: SortOrder
    permissions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    team?: WorkforceTeamOrderByWithRelationInput
  }

  export type WorkforceCustomRoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    teamId_name?: WorkforceCustomRoleTeamIdNameCompoundUniqueInput
    AND?: WorkforceCustomRoleWhereInput | WorkforceCustomRoleWhereInput[]
    OR?: WorkforceCustomRoleWhereInput[]
    NOT?: WorkforceCustomRoleWhereInput | WorkforceCustomRoleWhereInput[]
    teamId?: StringFilter<"WorkforceCustomRole"> | string
    name?: StringFilter<"WorkforceCustomRole"> | string
    label?: StringFilter<"WorkforceCustomRole"> | string
    permissions?: JsonFilter<"WorkforceCustomRole">
    createdAt?: DateTimeFilter<"WorkforceCustomRole"> | Date | string
    updatedAt?: DateTimeFilter<"WorkforceCustomRole"> | Date | string
    team?: XOR<WorkforceTeamScalarRelationFilter, WorkforceTeamWhereInput>
  }, "id" | "teamId_name">

  export type WorkforceCustomRoleOrderByWithAggregationInput = {
    id?: SortOrder
    teamId?: SortOrder
    name?: SortOrder
    label?: SortOrder
    permissions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkforceCustomRoleCountOrderByAggregateInput
    _max?: WorkforceCustomRoleMaxOrderByAggregateInput
    _min?: WorkforceCustomRoleMinOrderByAggregateInput
  }

  export type WorkforceCustomRoleScalarWhereWithAggregatesInput = {
    AND?: WorkforceCustomRoleScalarWhereWithAggregatesInput | WorkforceCustomRoleScalarWhereWithAggregatesInput[]
    OR?: WorkforceCustomRoleScalarWhereWithAggregatesInput[]
    NOT?: WorkforceCustomRoleScalarWhereWithAggregatesInput | WorkforceCustomRoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkforceCustomRole"> | string
    teamId?: StringWithAggregatesFilter<"WorkforceCustomRole"> | string
    name?: StringWithAggregatesFilter<"WorkforceCustomRole"> | string
    label?: StringWithAggregatesFilter<"WorkforceCustomRole"> | string
    permissions?: JsonWithAggregatesFilter<"WorkforceCustomRole">
    createdAt?: DateTimeWithAggregatesFilter<"WorkforceCustomRole"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WorkforceCustomRole"> | Date | string
  }

  export type WorkforceUserCreateInput = {
    id?: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    profile?: WorkforceProfileCreateNestedOneWithoutUserInput
    memberships?: WorkforceTeamMemberCreateNestedManyWithoutUserInput
    ownedTeams?: WorkforceTeamCreateNestedManyWithoutOwnerInput
  }

  export type WorkforceUserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash: string
    profileId?: string | null
    createdAt?: Date | string
    memberships?: WorkforceTeamMemberUncheckedCreateNestedManyWithoutUserInput
    ownedTeams?: WorkforceTeamUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type WorkforceUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: WorkforceProfileUpdateOneWithoutUserNestedInput
    memberships?: WorkforceTeamMemberUpdateManyWithoutUserNestedInput
    ownedTeams?: WorkforceTeamUpdateManyWithoutOwnerNestedInput
  }

  export type WorkforceUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    profileId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: WorkforceTeamMemberUncheckedUpdateManyWithoutUserNestedInput
    ownedTeams?: WorkforceTeamUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type WorkforceUserCreateManyInput = {
    id?: string
    email: string
    passwordHash: string
    profileId?: string | null
    createdAt?: Date | string
  }

  export type WorkforceUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkforceUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    profileId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkforceTeamCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: WorkforceUserCreateNestedOneWithoutOwnedTeamsInput
    members?: WorkforceTeamMemberCreateNestedManyWithoutTeamInput
    profiles?: WorkforceProfileCreateNestedManyWithoutTeamInput
    departments?: WorkforceDepartmentCreateNestedManyWithoutTeamInput
    employees?: WorkforceEmployeeCreateNestedManyWithoutTeamInput
    tasks?: WorkforceTaskCreateNestedManyWithoutTeamInput
    invitations?: WorkforceInvitationCreateNestedManyWithoutTeamInput
    notifications?: WorkforceNotificationCreateNestedManyWithoutTeamInput
    roles?: WorkforceCustomRoleCreateNestedManyWithoutTeamInput
  }

  export type WorkforceTeamUncheckedCreateInput = {
    id?: string
    name: string
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: WorkforceTeamMemberUncheckedCreateNestedManyWithoutTeamInput
    profiles?: WorkforceProfileUncheckedCreateNestedManyWithoutTeamInput
    departments?: WorkforceDepartmentUncheckedCreateNestedManyWithoutTeamInput
    employees?: WorkforceEmployeeUncheckedCreateNestedManyWithoutTeamInput
    tasks?: WorkforceTaskUncheckedCreateNestedManyWithoutTeamInput
    invitations?: WorkforceInvitationUncheckedCreateNestedManyWithoutTeamInput
    notifications?: WorkforceNotificationUncheckedCreateNestedManyWithoutTeamInput
    roles?: WorkforceCustomRoleUncheckedCreateNestedManyWithoutTeamInput
  }

  export type WorkforceTeamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: WorkforceUserUpdateOneRequiredWithoutOwnedTeamsNestedInput
    members?: WorkforceTeamMemberUpdateManyWithoutTeamNestedInput
    profiles?: WorkforceProfileUpdateManyWithoutTeamNestedInput
    departments?: WorkforceDepartmentUpdateManyWithoutTeamNestedInput
    employees?: WorkforceEmployeeUpdateManyWithoutTeamNestedInput
    tasks?: WorkforceTaskUpdateManyWithoutTeamNestedInput
    invitations?: WorkforceInvitationUpdateManyWithoutTeamNestedInput
    notifications?: WorkforceNotificationUpdateManyWithoutTeamNestedInput
    roles?: WorkforceCustomRoleUpdateManyWithoutTeamNestedInput
  }

  export type WorkforceTeamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: WorkforceTeamMemberUncheckedUpdateManyWithoutTeamNestedInput
    profiles?: WorkforceProfileUncheckedUpdateManyWithoutTeamNestedInput
    departments?: WorkforceDepartmentUncheckedUpdateManyWithoutTeamNestedInput
    employees?: WorkforceEmployeeUncheckedUpdateManyWithoutTeamNestedInput
    tasks?: WorkforceTaskUncheckedUpdateManyWithoutTeamNestedInput
    invitations?: WorkforceInvitationUncheckedUpdateManyWithoutTeamNestedInput
    notifications?: WorkforceNotificationUncheckedUpdateManyWithoutTeamNestedInput
    roles?: WorkforceCustomRoleUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type WorkforceTeamCreateManyInput = {
    id?: string
    name: string
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkforceTeamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkforceTeamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkforceProfileCreateInput = {
    id?: string
    email: string
    firstName?: string | null
    lastName?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: WorkforceUserCreateNestedOneWithoutProfileInput
    team?: WorkforceTeamCreateNestedOneWithoutProfilesInput
    employees?: WorkforceEmployeeCreateNestedManyWithoutProfileInput
    assignedTasks?: WorkforceTaskCreateNestedManyWithoutAssigneeInput
    createdTasks?: WorkforceTaskCreateNestedManyWithoutCreatorInput
    notifications?: WorkforceNotificationCreateNestedManyWithoutUserInput
    managedDepartments?: WorkforceDepartmentCreateNestedManyWithoutManagerInput
    managedEmployees?: WorkforceEmployeeCreateNestedManyWithoutManagerInput
    sentInvitations?: WorkforceInvitationCreateNestedManyWithoutInvitedByInput
  }

  export type WorkforceProfileUncheckedCreateInput = {
    id?: string
    email: string
    firstName?: string | null
    lastName?: string | null
    role?: string
    teamId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: WorkforceUserUncheckedCreateNestedOneWithoutProfileInput
    employees?: WorkforceEmployeeUncheckedCreateNestedManyWithoutProfileInput
    assignedTasks?: WorkforceTaskUncheckedCreateNestedManyWithoutAssigneeInput
    createdTasks?: WorkforceTaskUncheckedCreateNestedManyWithoutCreatorInput
    notifications?: WorkforceNotificationUncheckedCreateNestedManyWithoutUserInput
    managedDepartments?: WorkforceDepartmentUncheckedCreateNestedManyWithoutManagerInput
    managedEmployees?: WorkforceEmployeeUncheckedCreateNestedManyWithoutManagerInput
    sentInvitations?: WorkforceInvitationUncheckedCreateNestedManyWithoutInvitedByInput
  }

  export type WorkforceProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: WorkforceUserUpdateOneWithoutProfileNestedInput
    team?: WorkforceTeamUpdateOneWithoutProfilesNestedInput
    employees?: WorkforceEmployeeUpdateManyWithoutProfileNestedInput
    assignedTasks?: WorkforceTaskUpdateManyWithoutAssigneeNestedInput
    createdTasks?: WorkforceTaskUpdateManyWithoutCreatorNestedInput
    notifications?: WorkforceNotificationUpdateManyWithoutUserNestedInput
    managedDepartments?: WorkforceDepartmentUpdateManyWithoutManagerNestedInput
    managedEmployees?: WorkforceEmployeeUpdateManyWithoutManagerNestedInput
    sentInvitations?: WorkforceInvitationUpdateManyWithoutInvitedByNestedInput
  }

  export type WorkforceProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: WorkforceUserUncheckedUpdateOneWithoutProfileNestedInput
    employees?: WorkforceEmployeeUncheckedUpdateManyWithoutProfileNestedInput
    assignedTasks?: WorkforceTaskUncheckedUpdateManyWithoutAssigneeNestedInput
    createdTasks?: WorkforceTaskUncheckedUpdateManyWithoutCreatorNestedInput
    notifications?: WorkforceNotificationUncheckedUpdateManyWithoutUserNestedInput
    managedDepartments?: WorkforceDepartmentUncheckedUpdateManyWithoutManagerNestedInput
    managedEmployees?: WorkforceEmployeeUncheckedUpdateManyWithoutManagerNestedInput
    sentInvitations?: WorkforceInvitationUncheckedUpdateManyWithoutInvitedByNestedInput
  }

  export type WorkforceProfileCreateManyInput = {
    id?: string
    email: string
    firstName?: string | null
    lastName?: string | null
    role?: string
    teamId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkforceProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkforceProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkforceTeamMemberCreateInput = {
    id?: string
    role?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: WorkforceUserCreateNestedOneWithoutMembershipsInput
    team: WorkforceTeamCreateNestedOneWithoutMembersInput
  }

  export type WorkforceTeamMemberUncheckedCreateInput = {
    id?: string
    userId: string
    teamId: string
    role?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkforceTeamMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: WorkforceUserUpdateOneRequiredWithoutMembershipsNestedInput
    team?: WorkforceTeamUpdateOneRequiredWithoutMembersNestedInput
  }

  export type WorkforceTeamMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkforceTeamMemberCreateManyInput = {
    id?: string
    userId: string
    teamId: string
    role?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkforceTeamMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkforceTeamMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkforceDepartmentCreateInput = {
    id?: string
    name: string
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    team: WorkforceTeamCreateNestedOneWithoutDepartmentsInput
    manager?: WorkforceProfileCreateNestedOneWithoutManagedDepartmentsInput
    employees?: WorkforceEmployeeCreateNestedManyWithoutDepartmentInput
    tasks?: WorkforceTaskCreateNestedManyWithoutDepartmentInput
  }

  export type WorkforceDepartmentUncheckedCreateInput = {
    id?: string
    teamId: string
    name: string
    icon?: string | null
    managerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employees?: WorkforceEmployeeUncheckedCreateNestedManyWithoutDepartmentInput
    tasks?: WorkforceTaskUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type WorkforceDepartmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: WorkforceTeamUpdateOneRequiredWithoutDepartmentsNestedInput
    manager?: WorkforceProfileUpdateOneWithoutManagedDepartmentsNestedInput
    employees?: WorkforceEmployeeUpdateManyWithoutDepartmentNestedInput
    tasks?: WorkforceTaskUpdateManyWithoutDepartmentNestedInput
  }

  export type WorkforceDepartmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: WorkforceEmployeeUncheckedUpdateManyWithoutDepartmentNestedInput
    tasks?: WorkforceTaskUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type WorkforceDepartmentCreateManyInput = {
    id?: string
    teamId: string
    name: string
    icon?: string | null
    managerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkforceDepartmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkforceDepartmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkforceEmployeeCreateInput = {
    id?: string
    position?: string | null
    joinDate?: Date | string | null
    salary?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.WorkforceEmployeeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    team: WorkforceTeamCreateNestedOneWithoutEmployeesInput
    profile: WorkforceProfileCreateNestedOneWithoutEmployeesInput
    department?: WorkforceDepartmentCreateNestedOneWithoutEmployeesInput
    manager?: WorkforceProfileCreateNestedOneWithoutManagedEmployeesInput
  }

  export type WorkforceEmployeeUncheckedCreateInput = {
    id?: string
    teamId: string
    profileId: string
    departmentId?: string | null
    position?: string | null
    joinDate?: Date | string | null
    salary?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.WorkforceEmployeeStatus
    managerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkforceEmployeeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    joinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    salary?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumWorkforceEmployeeStatusFieldUpdateOperationsInput | $Enums.WorkforceEmployeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: WorkforceTeamUpdateOneRequiredWithoutEmployeesNestedInput
    profile?: WorkforceProfileUpdateOneRequiredWithoutEmployeesNestedInput
    department?: WorkforceDepartmentUpdateOneWithoutEmployeesNestedInput
    manager?: WorkforceProfileUpdateOneWithoutManagedEmployeesNestedInput
  }

  export type WorkforceEmployeeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    joinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    salary?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumWorkforceEmployeeStatusFieldUpdateOperationsInput | $Enums.WorkforceEmployeeStatus
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkforceEmployeeCreateManyInput = {
    id?: string
    teamId: string
    profileId: string
    departmentId?: string | null
    position?: string | null
    joinDate?: Date | string | null
    salary?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.WorkforceEmployeeStatus
    managerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkforceEmployeeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    joinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    salary?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumWorkforceEmployeeStatusFieldUpdateOperationsInput | $Enums.WorkforceEmployeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkforceEmployeeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    joinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    salary?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumWorkforceEmployeeStatusFieldUpdateOperationsInput | $Enums.WorkforceEmployeeStatus
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkforceTaskCreateInput = {
    id?: string
    title: string
    description?: string | null
    priority?: $Enums.WorkforceTaskPriority
    status?: $Enums.WorkforceTaskStatus
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    team: WorkforceTeamCreateNestedOneWithoutTasksInput
    department?: WorkforceDepartmentCreateNestedOneWithoutTasksInput
    assignee?: WorkforceProfileCreateNestedOneWithoutAssignedTasksInput
    creator?: WorkforceProfileCreateNestedOneWithoutCreatedTasksInput
  }

  export type WorkforceTaskUncheckedCreateInput = {
    id?: string
    teamId: string
    title: string
    description?: string | null
    priority?: $Enums.WorkforceTaskPriority
    status?: $Enums.WorkforceTaskStatus
    departmentId?: string | null
    assigneeId?: string | null
    createdById?: string | null
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkforceTaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumWorkforceTaskPriorityFieldUpdateOperationsInput | $Enums.WorkforceTaskPriority
    status?: EnumWorkforceTaskStatusFieldUpdateOperationsInput | $Enums.WorkforceTaskStatus
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: WorkforceTeamUpdateOneRequiredWithoutTasksNestedInput
    department?: WorkforceDepartmentUpdateOneWithoutTasksNestedInput
    assignee?: WorkforceProfileUpdateOneWithoutAssignedTasksNestedInput
    creator?: WorkforceProfileUpdateOneWithoutCreatedTasksNestedInput
  }

  export type WorkforceTaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumWorkforceTaskPriorityFieldUpdateOperationsInput | $Enums.WorkforceTaskPriority
    status?: EnumWorkforceTaskStatusFieldUpdateOperationsInput | $Enums.WorkforceTaskStatus
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkforceTaskCreateManyInput = {
    id?: string
    teamId: string
    title: string
    description?: string | null
    priority?: $Enums.WorkforceTaskPriority
    status?: $Enums.WorkforceTaskStatus
    departmentId?: string | null
    assigneeId?: string | null
    createdById?: string | null
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkforceTaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumWorkforceTaskPriorityFieldUpdateOperationsInput | $Enums.WorkforceTaskPriority
    status?: EnumWorkforceTaskStatusFieldUpdateOperationsInput | $Enums.WorkforceTaskStatus
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkforceTaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumWorkforceTaskPriorityFieldUpdateOperationsInput | $Enums.WorkforceTaskPriority
    status?: EnumWorkforceTaskStatusFieldUpdateOperationsInput | $Enums.WorkforceTaskStatus
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkforceInvitationCreateInput = {
    id?: string
    email: string
    role: string
    token: string
    expiresAt?: Date | string | null
    acceptedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    team: WorkforceTeamCreateNestedOneWithoutInvitationsInput
    invitedBy: WorkforceProfileCreateNestedOneWithoutSentInvitationsInput
  }

  export type WorkforceInvitationUncheckedCreateInput = {
    id?: string
    teamId: string
    email: string
    role: string
    token: string
    expiresAt?: Date | string | null
    invitedById: string
    acceptedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkforceInvitationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: WorkforceTeamUpdateOneRequiredWithoutInvitationsNestedInput
    invitedBy?: WorkforceProfileUpdateOneRequiredWithoutSentInvitationsNestedInput
  }

  export type WorkforceInvitationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invitedById?: StringFieldUpdateOperationsInput | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkforceInvitationCreateManyInput = {
    id?: string
    teamId: string
    email: string
    role: string
    token: string
    expiresAt?: Date | string | null
    invitedById: string
    acceptedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkforceInvitationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkforceInvitationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invitedById?: StringFieldUpdateOperationsInput | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkforceNotificationCreateInput = {
    id?: string
    type: string
    title: string
    message: string
    data?: NullableJsonNullValueInput | InputJsonValue
    read?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: WorkforceProfileCreateNestedOneWithoutNotificationsInput
    team?: WorkforceTeamCreateNestedOneWithoutNotificationsInput
  }

  export type WorkforceNotificationUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    title: string
    message: string
    data?: NullableJsonNullValueInput | InputJsonValue
    read?: boolean
    teamId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkforceNotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: WorkforceProfileUpdateOneRequiredWithoutNotificationsNestedInput
    team?: WorkforceTeamUpdateOneWithoutNotificationsNestedInput
  }

  export type WorkforceNotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    read?: BoolFieldUpdateOperationsInput | boolean
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkforceNotificationCreateManyInput = {
    id?: string
    userId: string
    type: string
    title: string
    message: string
    data?: NullableJsonNullValueInput | InputJsonValue
    read?: boolean
    teamId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkforceNotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkforceNotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    read?: BoolFieldUpdateOperationsInput | boolean
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkforceCustomRoleCreateInput = {
    id?: string
    name: string
    label: string
    permissions?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    team: WorkforceTeamCreateNestedOneWithoutRolesInput
  }

  export type WorkforceCustomRoleUncheckedCreateInput = {
    id?: string
    teamId: string
    name: string
    label: string
    permissions?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkforceCustomRoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    permissions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: WorkforceTeamUpdateOneRequiredWithoutRolesNestedInput
  }

  export type WorkforceCustomRoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    permissions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkforceCustomRoleCreateManyInput = {
    id?: string
    teamId: string
    name: string
    label: string
    permissions?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkforceCustomRoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    permissions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkforceCustomRoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    permissions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type WorkforceProfileNullableScalarRelationFilter = {
    is?: WorkforceProfileWhereInput | null
    isNot?: WorkforceProfileWhereInput | null
  }

  export type WorkforceTeamMemberListRelationFilter = {
    every?: WorkforceTeamMemberWhereInput
    some?: WorkforceTeamMemberWhereInput
    none?: WorkforceTeamMemberWhereInput
  }

  export type WorkforceTeamListRelationFilter = {
    every?: WorkforceTeamWhereInput
    some?: WorkforceTeamWhereInput
    none?: WorkforceTeamWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type WorkforceTeamMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkforceTeamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkforceUserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    profileId?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkforceUserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    profileId?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkforceUserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    profileId?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type WorkforceUserScalarRelationFilter = {
    is?: WorkforceUserWhereInput
    isNot?: WorkforceUserWhereInput
  }

  export type WorkforceProfileListRelationFilter = {
    every?: WorkforceProfileWhereInput
    some?: WorkforceProfileWhereInput
    none?: WorkforceProfileWhereInput
  }

  export type WorkforceDepartmentListRelationFilter = {
    every?: WorkforceDepartmentWhereInput
    some?: WorkforceDepartmentWhereInput
    none?: WorkforceDepartmentWhereInput
  }

  export type WorkforceEmployeeListRelationFilter = {
    every?: WorkforceEmployeeWhereInput
    some?: WorkforceEmployeeWhereInput
    none?: WorkforceEmployeeWhereInput
  }

  export type WorkforceTaskListRelationFilter = {
    every?: WorkforceTaskWhereInput
    some?: WorkforceTaskWhereInput
    none?: WorkforceTaskWhereInput
  }

  export type WorkforceInvitationListRelationFilter = {
    every?: WorkforceInvitationWhereInput
    some?: WorkforceInvitationWhereInput
    none?: WorkforceInvitationWhereInput
  }

  export type WorkforceNotificationListRelationFilter = {
    every?: WorkforceNotificationWhereInput
    some?: WorkforceNotificationWhereInput
    none?: WorkforceNotificationWhereInput
  }

  export type WorkforceCustomRoleListRelationFilter = {
    every?: WorkforceCustomRoleWhereInput
    some?: WorkforceCustomRoleWhereInput
    none?: WorkforceCustomRoleWhereInput
  }

  export type WorkforceProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkforceDepartmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkforceEmployeeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkforceTaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkforceInvitationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkforceNotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkforceCustomRoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkforceTeamCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkforceTeamMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkforceTeamMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkforceUserNullableScalarRelationFilter = {
    is?: WorkforceUserWhereInput | null
    isNot?: WorkforceUserWhereInput | null
  }

  export type WorkforceTeamNullableScalarRelationFilter = {
    is?: WorkforceTeamWhereInput | null
    isNot?: WorkforceTeamWhereInput | null
  }

  export type WorkforceProfileCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkforceProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkforceProfileMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type WorkforceTeamScalarRelationFilter = {
    is?: WorkforceTeamWhereInput
    isNot?: WorkforceTeamWhereInput
  }

  export type WorkforceTeamMemberUserIdTeamIdCompoundUniqueInput = {
    userId: string
    teamId: string
  }

  export type WorkforceTeamMemberCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkforceTeamMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkforceTeamMemberMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type WorkforceDepartmentCountOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    managerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkforceDepartmentMaxOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    managerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkforceDepartmentMinOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    managerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type EnumWorkforceEmployeeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkforceEmployeeStatus | EnumWorkforceEmployeeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WorkforceEmployeeStatus[] | ListEnumWorkforceEmployeeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkforceEmployeeStatus[] | ListEnumWorkforceEmployeeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkforceEmployeeStatusFilter<$PrismaModel> | $Enums.WorkforceEmployeeStatus
  }

  export type WorkforceProfileScalarRelationFilter = {
    is?: WorkforceProfileWhereInput
    isNot?: WorkforceProfileWhereInput
  }

  export type WorkforceDepartmentNullableScalarRelationFilter = {
    is?: WorkforceDepartmentWhereInput | null
    isNot?: WorkforceDepartmentWhereInput | null
  }

  export type WorkforceEmployeeCountOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    profileId?: SortOrder
    departmentId?: SortOrder
    position?: SortOrder
    joinDate?: SortOrder
    salary?: SortOrder
    status?: SortOrder
    managerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkforceEmployeeAvgOrderByAggregateInput = {
    salary?: SortOrder
  }

  export type WorkforceEmployeeMaxOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    profileId?: SortOrder
    departmentId?: SortOrder
    position?: SortOrder
    joinDate?: SortOrder
    salary?: SortOrder
    status?: SortOrder
    managerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkforceEmployeeMinOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    profileId?: SortOrder
    departmentId?: SortOrder
    position?: SortOrder
    joinDate?: SortOrder
    salary?: SortOrder
    status?: SortOrder
    managerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkforceEmployeeSumOrderByAggregateInput = {
    salary?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type EnumWorkforceEmployeeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkforceEmployeeStatus | EnumWorkforceEmployeeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WorkforceEmployeeStatus[] | ListEnumWorkforceEmployeeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkforceEmployeeStatus[] | ListEnumWorkforceEmployeeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkforceEmployeeStatusWithAggregatesFilter<$PrismaModel> | $Enums.WorkforceEmployeeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWorkforceEmployeeStatusFilter<$PrismaModel>
    _max?: NestedEnumWorkforceEmployeeStatusFilter<$PrismaModel>
  }

  export type EnumWorkforceTaskPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkforceTaskPriority | EnumWorkforceTaskPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.WorkforceTaskPriority[] | ListEnumWorkforceTaskPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkforceTaskPriority[] | ListEnumWorkforceTaskPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkforceTaskPriorityFilter<$PrismaModel> | $Enums.WorkforceTaskPriority
  }

  export type EnumWorkforceTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkforceTaskStatus | EnumWorkforceTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WorkforceTaskStatus[] | ListEnumWorkforceTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkforceTaskStatus[] | ListEnumWorkforceTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkforceTaskStatusFilter<$PrismaModel> | $Enums.WorkforceTaskStatus
  }

  export type WorkforceTaskCountOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    departmentId?: SortOrder
    assigneeId?: SortOrder
    createdById?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkforceTaskMaxOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    departmentId?: SortOrder
    assigneeId?: SortOrder
    createdById?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkforceTaskMinOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    departmentId?: SortOrder
    assigneeId?: SortOrder
    createdById?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumWorkforceTaskPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkforceTaskPriority | EnumWorkforceTaskPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.WorkforceTaskPriority[] | ListEnumWorkforceTaskPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkforceTaskPriority[] | ListEnumWorkforceTaskPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkforceTaskPriorityWithAggregatesFilter<$PrismaModel> | $Enums.WorkforceTaskPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWorkforceTaskPriorityFilter<$PrismaModel>
    _max?: NestedEnumWorkforceTaskPriorityFilter<$PrismaModel>
  }

  export type EnumWorkforceTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkforceTaskStatus | EnumWorkforceTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WorkforceTaskStatus[] | ListEnumWorkforceTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkforceTaskStatus[] | ListEnumWorkforceTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkforceTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.WorkforceTaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWorkforceTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumWorkforceTaskStatusFilter<$PrismaModel>
  }

  export type WorkforceInvitationCountOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    email?: SortOrder
    role?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    invitedById?: SortOrder
    acceptedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkforceInvitationMaxOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    email?: SortOrder
    role?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    invitedById?: SortOrder
    acceptedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkforceInvitationMinOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    email?: SortOrder
    role?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    invitedById?: SortOrder
    acceptedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type WorkforceNotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    data?: SortOrder
    read?: SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkforceNotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    read?: SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkforceNotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    read?: SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type WorkforceCustomRoleTeamIdNameCompoundUniqueInput = {
    teamId: string
    name: string
  }

  export type WorkforceCustomRoleCountOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    name?: SortOrder
    label?: SortOrder
    permissions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkforceCustomRoleMaxOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    name?: SortOrder
    label?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkforceCustomRoleMinOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    name?: SortOrder
    label?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type WorkforceProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<WorkforceProfileCreateWithoutUserInput, WorkforceProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: WorkforceProfileCreateOrConnectWithoutUserInput
    connect?: WorkforceProfileWhereUniqueInput
  }

  export type WorkforceTeamMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkforceTeamMemberCreateWithoutUserInput, WorkforceTeamMemberUncheckedCreateWithoutUserInput> | WorkforceTeamMemberCreateWithoutUserInput[] | WorkforceTeamMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkforceTeamMemberCreateOrConnectWithoutUserInput | WorkforceTeamMemberCreateOrConnectWithoutUserInput[]
    createMany?: WorkforceTeamMemberCreateManyUserInputEnvelope
    connect?: WorkforceTeamMemberWhereUniqueInput | WorkforceTeamMemberWhereUniqueInput[]
  }

  export type WorkforceTeamCreateNestedManyWithoutOwnerInput = {
    create?: XOR<WorkforceTeamCreateWithoutOwnerInput, WorkforceTeamUncheckedCreateWithoutOwnerInput> | WorkforceTeamCreateWithoutOwnerInput[] | WorkforceTeamUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: WorkforceTeamCreateOrConnectWithoutOwnerInput | WorkforceTeamCreateOrConnectWithoutOwnerInput[]
    createMany?: WorkforceTeamCreateManyOwnerInputEnvelope
    connect?: WorkforceTeamWhereUniqueInput | WorkforceTeamWhereUniqueInput[]
  }

  export type WorkforceTeamMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkforceTeamMemberCreateWithoutUserInput, WorkforceTeamMemberUncheckedCreateWithoutUserInput> | WorkforceTeamMemberCreateWithoutUserInput[] | WorkforceTeamMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkforceTeamMemberCreateOrConnectWithoutUserInput | WorkforceTeamMemberCreateOrConnectWithoutUserInput[]
    createMany?: WorkforceTeamMemberCreateManyUserInputEnvelope
    connect?: WorkforceTeamMemberWhereUniqueInput | WorkforceTeamMemberWhereUniqueInput[]
  }

  export type WorkforceTeamUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<WorkforceTeamCreateWithoutOwnerInput, WorkforceTeamUncheckedCreateWithoutOwnerInput> | WorkforceTeamCreateWithoutOwnerInput[] | WorkforceTeamUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: WorkforceTeamCreateOrConnectWithoutOwnerInput | WorkforceTeamCreateOrConnectWithoutOwnerInput[]
    createMany?: WorkforceTeamCreateManyOwnerInputEnvelope
    connect?: WorkforceTeamWhereUniqueInput | WorkforceTeamWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type WorkforceProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<WorkforceProfileCreateWithoutUserInput, WorkforceProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: WorkforceProfileCreateOrConnectWithoutUserInput
    upsert?: WorkforceProfileUpsertWithoutUserInput
    disconnect?: WorkforceProfileWhereInput | boolean
    delete?: WorkforceProfileWhereInput | boolean
    connect?: WorkforceProfileWhereUniqueInput
    update?: XOR<XOR<WorkforceProfileUpdateToOneWithWhereWithoutUserInput, WorkforceProfileUpdateWithoutUserInput>, WorkforceProfileUncheckedUpdateWithoutUserInput>
  }

  export type WorkforceTeamMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkforceTeamMemberCreateWithoutUserInput, WorkforceTeamMemberUncheckedCreateWithoutUserInput> | WorkforceTeamMemberCreateWithoutUserInput[] | WorkforceTeamMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkforceTeamMemberCreateOrConnectWithoutUserInput | WorkforceTeamMemberCreateOrConnectWithoutUserInput[]
    upsert?: WorkforceTeamMemberUpsertWithWhereUniqueWithoutUserInput | WorkforceTeamMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkforceTeamMemberCreateManyUserInputEnvelope
    set?: WorkforceTeamMemberWhereUniqueInput | WorkforceTeamMemberWhereUniqueInput[]
    disconnect?: WorkforceTeamMemberWhereUniqueInput | WorkforceTeamMemberWhereUniqueInput[]
    delete?: WorkforceTeamMemberWhereUniqueInput | WorkforceTeamMemberWhereUniqueInput[]
    connect?: WorkforceTeamMemberWhereUniqueInput | WorkforceTeamMemberWhereUniqueInput[]
    update?: WorkforceTeamMemberUpdateWithWhereUniqueWithoutUserInput | WorkforceTeamMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkforceTeamMemberUpdateManyWithWhereWithoutUserInput | WorkforceTeamMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkforceTeamMemberScalarWhereInput | WorkforceTeamMemberScalarWhereInput[]
  }

  export type WorkforceTeamUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<WorkforceTeamCreateWithoutOwnerInput, WorkforceTeamUncheckedCreateWithoutOwnerInput> | WorkforceTeamCreateWithoutOwnerInput[] | WorkforceTeamUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: WorkforceTeamCreateOrConnectWithoutOwnerInput | WorkforceTeamCreateOrConnectWithoutOwnerInput[]
    upsert?: WorkforceTeamUpsertWithWhereUniqueWithoutOwnerInput | WorkforceTeamUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: WorkforceTeamCreateManyOwnerInputEnvelope
    set?: WorkforceTeamWhereUniqueInput | WorkforceTeamWhereUniqueInput[]
    disconnect?: WorkforceTeamWhereUniqueInput | WorkforceTeamWhereUniqueInput[]
    delete?: WorkforceTeamWhereUniqueInput | WorkforceTeamWhereUniqueInput[]
    connect?: WorkforceTeamWhereUniqueInput | WorkforceTeamWhereUniqueInput[]
    update?: WorkforceTeamUpdateWithWhereUniqueWithoutOwnerInput | WorkforceTeamUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: WorkforceTeamUpdateManyWithWhereWithoutOwnerInput | WorkforceTeamUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: WorkforceTeamScalarWhereInput | WorkforceTeamScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type WorkforceTeamMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkforceTeamMemberCreateWithoutUserInput, WorkforceTeamMemberUncheckedCreateWithoutUserInput> | WorkforceTeamMemberCreateWithoutUserInput[] | WorkforceTeamMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkforceTeamMemberCreateOrConnectWithoutUserInput | WorkforceTeamMemberCreateOrConnectWithoutUserInput[]
    upsert?: WorkforceTeamMemberUpsertWithWhereUniqueWithoutUserInput | WorkforceTeamMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkforceTeamMemberCreateManyUserInputEnvelope
    set?: WorkforceTeamMemberWhereUniqueInput | WorkforceTeamMemberWhereUniqueInput[]
    disconnect?: WorkforceTeamMemberWhereUniqueInput | WorkforceTeamMemberWhereUniqueInput[]
    delete?: WorkforceTeamMemberWhereUniqueInput | WorkforceTeamMemberWhereUniqueInput[]
    connect?: WorkforceTeamMemberWhereUniqueInput | WorkforceTeamMemberWhereUniqueInput[]
    update?: WorkforceTeamMemberUpdateWithWhereUniqueWithoutUserInput | WorkforceTeamMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkforceTeamMemberUpdateManyWithWhereWithoutUserInput | WorkforceTeamMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkforceTeamMemberScalarWhereInput | WorkforceTeamMemberScalarWhereInput[]
  }

  export type WorkforceTeamUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<WorkforceTeamCreateWithoutOwnerInput, WorkforceTeamUncheckedCreateWithoutOwnerInput> | WorkforceTeamCreateWithoutOwnerInput[] | WorkforceTeamUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: WorkforceTeamCreateOrConnectWithoutOwnerInput | WorkforceTeamCreateOrConnectWithoutOwnerInput[]
    upsert?: WorkforceTeamUpsertWithWhereUniqueWithoutOwnerInput | WorkforceTeamUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: WorkforceTeamCreateManyOwnerInputEnvelope
    set?: WorkforceTeamWhereUniqueInput | WorkforceTeamWhereUniqueInput[]
    disconnect?: WorkforceTeamWhereUniqueInput | WorkforceTeamWhereUniqueInput[]
    delete?: WorkforceTeamWhereUniqueInput | WorkforceTeamWhereUniqueInput[]
    connect?: WorkforceTeamWhereUniqueInput | WorkforceTeamWhereUniqueInput[]
    update?: WorkforceTeamUpdateWithWhereUniqueWithoutOwnerInput | WorkforceTeamUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: WorkforceTeamUpdateManyWithWhereWithoutOwnerInput | WorkforceTeamUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: WorkforceTeamScalarWhereInput | WorkforceTeamScalarWhereInput[]
  }

  export type WorkforceUserCreateNestedOneWithoutOwnedTeamsInput = {
    create?: XOR<WorkforceUserCreateWithoutOwnedTeamsInput, WorkforceUserUncheckedCreateWithoutOwnedTeamsInput>
    connectOrCreate?: WorkforceUserCreateOrConnectWithoutOwnedTeamsInput
    connect?: WorkforceUserWhereUniqueInput
  }

  export type WorkforceTeamMemberCreateNestedManyWithoutTeamInput = {
    create?: XOR<WorkforceTeamMemberCreateWithoutTeamInput, WorkforceTeamMemberUncheckedCreateWithoutTeamInput> | WorkforceTeamMemberCreateWithoutTeamInput[] | WorkforceTeamMemberUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: WorkforceTeamMemberCreateOrConnectWithoutTeamInput | WorkforceTeamMemberCreateOrConnectWithoutTeamInput[]
    createMany?: WorkforceTeamMemberCreateManyTeamInputEnvelope
    connect?: WorkforceTeamMemberWhereUniqueInput | WorkforceTeamMemberWhereUniqueInput[]
  }

  export type WorkforceProfileCreateNestedManyWithoutTeamInput = {
    create?: XOR<WorkforceProfileCreateWithoutTeamInput, WorkforceProfileUncheckedCreateWithoutTeamInput> | WorkforceProfileCreateWithoutTeamInput[] | WorkforceProfileUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: WorkforceProfileCreateOrConnectWithoutTeamInput | WorkforceProfileCreateOrConnectWithoutTeamInput[]
    createMany?: WorkforceProfileCreateManyTeamInputEnvelope
    connect?: WorkforceProfileWhereUniqueInput | WorkforceProfileWhereUniqueInput[]
  }

  export type WorkforceDepartmentCreateNestedManyWithoutTeamInput = {
    create?: XOR<WorkforceDepartmentCreateWithoutTeamInput, WorkforceDepartmentUncheckedCreateWithoutTeamInput> | WorkforceDepartmentCreateWithoutTeamInput[] | WorkforceDepartmentUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: WorkforceDepartmentCreateOrConnectWithoutTeamInput | WorkforceDepartmentCreateOrConnectWithoutTeamInput[]
    createMany?: WorkforceDepartmentCreateManyTeamInputEnvelope
    connect?: WorkforceDepartmentWhereUniqueInput | WorkforceDepartmentWhereUniqueInput[]
  }

  export type WorkforceEmployeeCreateNestedManyWithoutTeamInput = {
    create?: XOR<WorkforceEmployeeCreateWithoutTeamInput, WorkforceEmployeeUncheckedCreateWithoutTeamInput> | WorkforceEmployeeCreateWithoutTeamInput[] | WorkforceEmployeeUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: WorkforceEmployeeCreateOrConnectWithoutTeamInput | WorkforceEmployeeCreateOrConnectWithoutTeamInput[]
    createMany?: WorkforceEmployeeCreateManyTeamInputEnvelope
    connect?: WorkforceEmployeeWhereUniqueInput | WorkforceEmployeeWhereUniqueInput[]
  }

  export type WorkforceTaskCreateNestedManyWithoutTeamInput = {
    create?: XOR<WorkforceTaskCreateWithoutTeamInput, WorkforceTaskUncheckedCreateWithoutTeamInput> | WorkforceTaskCreateWithoutTeamInput[] | WorkforceTaskUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: WorkforceTaskCreateOrConnectWithoutTeamInput | WorkforceTaskCreateOrConnectWithoutTeamInput[]
    createMany?: WorkforceTaskCreateManyTeamInputEnvelope
    connect?: WorkforceTaskWhereUniqueInput | WorkforceTaskWhereUniqueInput[]
  }

  export type WorkforceInvitationCreateNestedManyWithoutTeamInput = {
    create?: XOR<WorkforceInvitationCreateWithoutTeamInput, WorkforceInvitationUncheckedCreateWithoutTeamInput> | WorkforceInvitationCreateWithoutTeamInput[] | WorkforceInvitationUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: WorkforceInvitationCreateOrConnectWithoutTeamInput | WorkforceInvitationCreateOrConnectWithoutTeamInput[]
    createMany?: WorkforceInvitationCreateManyTeamInputEnvelope
    connect?: WorkforceInvitationWhereUniqueInput | WorkforceInvitationWhereUniqueInput[]
  }

  export type WorkforceNotificationCreateNestedManyWithoutTeamInput = {
    create?: XOR<WorkforceNotificationCreateWithoutTeamInput, WorkforceNotificationUncheckedCreateWithoutTeamInput> | WorkforceNotificationCreateWithoutTeamInput[] | WorkforceNotificationUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: WorkforceNotificationCreateOrConnectWithoutTeamInput | WorkforceNotificationCreateOrConnectWithoutTeamInput[]
    createMany?: WorkforceNotificationCreateManyTeamInputEnvelope
    connect?: WorkforceNotificationWhereUniqueInput | WorkforceNotificationWhereUniqueInput[]
  }

  export type WorkforceCustomRoleCreateNestedManyWithoutTeamInput = {
    create?: XOR<WorkforceCustomRoleCreateWithoutTeamInput, WorkforceCustomRoleUncheckedCreateWithoutTeamInput> | WorkforceCustomRoleCreateWithoutTeamInput[] | WorkforceCustomRoleUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: WorkforceCustomRoleCreateOrConnectWithoutTeamInput | WorkforceCustomRoleCreateOrConnectWithoutTeamInput[]
    createMany?: WorkforceCustomRoleCreateManyTeamInputEnvelope
    connect?: WorkforceCustomRoleWhereUniqueInput | WorkforceCustomRoleWhereUniqueInput[]
  }

  export type WorkforceTeamMemberUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<WorkforceTeamMemberCreateWithoutTeamInput, WorkforceTeamMemberUncheckedCreateWithoutTeamInput> | WorkforceTeamMemberCreateWithoutTeamInput[] | WorkforceTeamMemberUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: WorkforceTeamMemberCreateOrConnectWithoutTeamInput | WorkforceTeamMemberCreateOrConnectWithoutTeamInput[]
    createMany?: WorkforceTeamMemberCreateManyTeamInputEnvelope
    connect?: WorkforceTeamMemberWhereUniqueInput | WorkforceTeamMemberWhereUniqueInput[]
  }

  export type WorkforceProfileUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<WorkforceProfileCreateWithoutTeamInput, WorkforceProfileUncheckedCreateWithoutTeamInput> | WorkforceProfileCreateWithoutTeamInput[] | WorkforceProfileUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: WorkforceProfileCreateOrConnectWithoutTeamInput | WorkforceProfileCreateOrConnectWithoutTeamInput[]
    createMany?: WorkforceProfileCreateManyTeamInputEnvelope
    connect?: WorkforceProfileWhereUniqueInput | WorkforceProfileWhereUniqueInput[]
  }

  export type WorkforceDepartmentUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<WorkforceDepartmentCreateWithoutTeamInput, WorkforceDepartmentUncheckedCreateWithoutTeamInput> | WorkforceDepartmentCreateWithoutTeamInput[] | WorkforceDepartmentUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: WorkforceDepartmentCreateOrConnectWithoutTeamInput | WorkforceDepartmentCreateOrConnectWithoutTeamInput[]
    createMany?: WorkforceDepartmentCreateManyTeamInputEnvelope
    connect?: WorkforceDepartmentWhereUniqueInput | WorkforceDepartmentWhereUniqueInput[]
  }

  export type WorkforceEmployeeUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<WorkforceEmployeeCreateWithoutTeamInput, WorkforceEmployeeUncheckedCreateWithoutTeamInput> | WorkforceEmployeeCreateWithoutTeamInput[] | WorkforceEmployeeUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: WorkforceEmployeeCreateOrConnectWithoutTeamInput | WorkforceEmployeeCreateOrConnectWithoutTeamInput[]
    createMany?: WorkforceEmployeeCreateManyTeamInputEnvelope
    connect?: WorkforceEmployeeWhereUniqueInput | WorkforceEmployeeWhereUniqueInput[]
  }

  export type WorkforceTaskUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<WorkforceTaskCreateWithoutTeamInput, WorkforceTaskUncheckedCreateWithoutTeamInput> | WorkforceTaskCreateWithoutTeamInput[] | WorkforceTaskUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: WorkforceTaskCreateOrConnectWithoutTeamInput | WorkforceTaskCreateOrConnectWithoutTeamInput[]
    createMany?: WorkforceTaskCreateManyTeamInputEnvelope
    connect?: WorkforceTaskWhereUniqueInput | WorkforceTaskWhereUniqueInput[]
  }

  export type WorkforceInvitationUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<WorkforceInvitationCreateWithoutTeamInput, WorkforceInvitationUncheckedCreateWithoutTeamInput> | WorkforceInvitationCreateWithoutTeamInput[] | WorkforceInvitationUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: WorkforceInvitationCreateOrConnectWithoutTeamInput | WorkforceInvitationCreateOrConnectWithoutTeamInput[]
    createMany?: WorkforceInvitationCreateManyTeamInputEnvelope
    connect?: WorkforceInvitationWhereUniqueInput | WorkforceInvitationWhereUniqueInput[]
  }

  export type WorkforceNotificationUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<WorkforceNotificationCreateWithoutTeamInput, WorkforceNotificationUncheckedCreateWithoutTeamInput> | WorkforceNotificationCreateWithoutTeamInput[] | WorkforceNotificationUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: WorkforceNotificationCreateOrConnectWithoutTeamInput | WorkforceNotificationCreateOrConnectWithoutTeamInput[]
    createMany?: WorkforceNotificationCreateManyTeamInputEnvelope
    connect?: WorkforceNotificationWhereUniqueInput | WorkforceNotificationWhereUniqueInput[]
  }

  export type WorkforceCustomRoleUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<WorkforceCustomRoleCreateWithoutTeamInput, WorkforceCustomRoleUncheckedCreateWithoutTeamInput> | WorkforceCustomRoleCreateWithoutTeamInput[] | WorkforceCustomRoleUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: WorkforceCustomRoleCreateOrConnectWithoutTeamInput | WorkforceCustomRoleCreateOrConnectWithoutTeamInput[]
    createMany?: WorkforceCustomRoleCreateManyTeamInputEnvelope
    connect?: WorkforceCustomRoleWhereUniqueInput | WorkforceCustomRoleWhereUniqueInput[]
  }

  export type WorkforceUserUpdateOneRequiredWithoutOwnedTeamsNestedInput = {
    create?: XOR<WorkforceUserCreateWithoutOwnedTeamsInput, WorkforceUserUncheckedCreateWithoutOwnedTeamsInput>
    connectOrCreate?: WorkforceUserCreateOrConnectWithoutOwnedTeamsInput
    upsert?: WorkforceUserUpsertWithoutOwnedTeamsInput
    connect?: WorkforceUserWhereUniqueInput
    update?: XOR<XOR<WorkforceUserUpdateToOneWithWhereWithoutOwnedTeamsInput, WorkforceUserUpdateWithoutOwnedTeamsInput>, WorkforceUserUncheckedUpdateWithoutOwnedTeamsInput>
  }

  export type WorkforceTeamMemberUpdateManyWithoutTeamNestedInput = {
    create?: XOR<WorkforceTeamMemberCreateWithoutTeamInput, WorkforceTeamMemberUncheckedCreateWithoutTeamInput> | WorkforceTeamMemberCreateWithoutTeamInput[] | WorkforceTeamMemberUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: WorkforceTeamMemberCreateOrConnectWithoutTeamInput | WorkforceTeamMemberCreateOrConnectWithoutTeamInput[]
    upsert?: WorkforceTeamMemberUpsertWithWhereUniqueWithoutTeamInput | WorkforceTeamMemberUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: WorkforceTeamMemberCreateManyTeamInputEnvelope
    set?: WorkforceTeamMemberWhereUniqueInput | WorkforceTeamMemberWhereUniqueInput[]
    disconnect?: WorkforceTeamMemberWhereUniqueInput | WorkforceTeamMemberWhereUniqueInput[]
    delete?: WorkforceTeamMemberWhereUniqueInput | WorkforceTeamMemberWhereUniqueInput[]
    connect?: WorkforceTeamMemberWhereUniqueInput | WorkforceTeamMemberWhereUniqueInput[]
    update?: WorkforceTeamMemberUpdateWithWhereUniqueWithoutTeamInput | WorkforceTeamMemberUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: WorkforceTeamMemberUpdateManyWithWhereWithoutTeamInput | WorkforceTeamMemberUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: WorkforceTeamMemberScalarWhereInput | WorkforceTeamMemberScalarWhereInput[]
  }

  export type WorkforceProfileUpdateManyWithoutTeamNestedInput = {
    create?: XOR<WorkforceProfileCreateWithoutTeamInput, WorkforceProfileUncheckedCreateWithoutTeamInput> | WorkforceProfileCreateWithoutTeamInput[] | WorkforceProfileUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: WorkforceProfileCreateOrConnectWithoutTeamInput | WorkforceProfileCreateOrConnectWithoutTeamInput[]
    upsert?: WorkforceProfileUpsertWithWhereUniqueWithoutTeamInput | WorkforceProfileUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: WorkforceProfileCreateManyTeamInputEnvelope
    set?: WorkforceProfileWhereUniqueInput | WorkforceProfileWhereUniqueInput[]
    disconnect?: WorkforceProfileWhereUniqueInput | WorkforceProfileWhereUniqueInput[]
    delete?: WorkforceProfileWhereUniqueInput | WorkforceProfileWhereUniqueInput[]
    connect?: WorkforceProfileWhereUniqueInput | WorkforceProfileWhereUniqueInput[]
    update?: WorkforceProfileUpdateWithWhereUniqueWithoutTeamInput | WorkforceProfileUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: WorkforceProfileUpdateManyWithWhereWithoutTeamInput | WorkforceProfileUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: WorkforceProfileScalarWhereInput | WorkforceProfileScalarWhereInput[]
  }

  export type WorkforceDepartmentUpdateManyWithoutTeamNestedInput = {
    create?: XOR<WorkforceDepartmentCreateWithoutTeamInput, WorkforceDepartmentUncheckedCreateWithoutTeamInput> | WorkforceDepartmentCreateWithoutTeamInput[] | WorkforceDepartmentUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: WorkforceDepartmentCreateOrConnectWithoutTeamInput | WorkforceDepartmentCreateOrConnectWithoutTeamInput[]
    upsert?: WorkforceDepartmentUpsertWithWhereUniqueWithoutTeamInput | WorkforceDepartmentUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: WorkforceDepartmentCreateManyTeamInputEnvelope
    set?: WorkforceDepartmentWhereUniqueInput | WorkforceDepartmentWhereUniqueInput[]
    disconnect?: WorkforceDepartmentWhereUniqueInput | WorkforceDepartmentWhereUniqueInput[]
    delete?: WorkforceDepartmentWhereUniqueInput | WorkforceDepartmentWhereUniqueInput[]
    connect?: WorkforceDepartmentWhereUniqueInput | WorkforceDepartmentWhereUniqueInput[]
    update?: WorkforceDepartmentUpdateWithWhereUniqueWithoutTeamInput | WorkforceDepartmentUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: WorkforceDepartmentUpdateManyWithWhereWithoutTeamInput | WorkforceDepartmentUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: WorkforceDepartmentScalarWhereInput | WorkforceDepartmentScalarWhereInput[]
  }

  export type WorkforceEmployeeUpdateManyWithoutTeamNestedInput = {
    create?: XOR<WorkforceEmployeeCreateWithoutTeamInput, WorkforceEmployeeUncheckedCreateWithoutTeamInput> | WorkforceEmployeeCreateWithoutTeamInput[] | WorkforceEmployeeUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: WorkforceEmployeeCreateOrConnectWithoutTeamInput | WorkforceEmployeeCreateOrConnectWithoutTeamInput[]
    upsert?: WorkforceEmployeeUpsertWithWhereUniqueWithoutTeamInput | WorkforceEmployeeUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: WorkforceEmployeeCreateManyTeamInputEnvelope
    set?: WorkforceEmployeeWhereUniqueInput | WorkforceEmployeeWhereUniqueInput[]
    disconnect?: WorkforceEmployeeWhereUniqueInput | WorkforceEmployeeWhereUniqueInput[]
    delete?: WorkforceEmployeeWhereUniqueInput | WorkforceEmployeeWhereUniqueInput[]
    connect?: WorkforceEmployeeWhereUniqueInput | WorkforceEmployeeWhereUniqueInput[]
    update?: WorkforceEmployeeUpdateWithWhereUniqueWithoutTeamInput | WorkforceEmployeeUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: WorkforceEmployeeUpdateManyWithWhereWithoutTeamInput | WorkforceEmployeeUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: WorkforceEmployeeScalarWhereInput | WorkforceEmployeeScalarWhereInput[]
  }

  export type WorkforceTaskUpdateManyWithoutTeamNestedInput = {
    create?: XOR<WorkforceTaskCreateWithoutTeamInput, WorkforceTaskUncheckedCreateWithoutTeamInput> | WorkforceTaskCreateWithoutTeamInput[] | WorkforceTaskUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: WorkforceTaskCreateOrConnectWithoutTeamInput | WorkforceTaskCreateOrConnectWithoutTeamInput[]
    upsert?: WorkforceTaskUpsertWithWhereUniqueWithoutTeamInput | WorkforceTaskUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: WorkforceTaskCreateManyTeamInputEnvelope
    set?: WorkforceTaskWhereUniqueInput | WorkforceTaskWhereUniqueInput[]
    disconnect?: WorkforceTaskWhereUniqueInput | WorkforceTaskWhereUniqueInput[]
    delete?: WorkforceTaskWhereUniqueInput | WorkforceTaskWhereUniqueInput[]
    connect?: WorkforceTaskWhereUniqueInput | WorkforceTaskWhereUniqueInput[]
    update?: WorkforceTaskUpdateWithWhereUniqueWithoutTeamInput | WorkforceTaskUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: WorkforceTaskUpdateManyWithWhereWithoutTeamInput | WorkforceTaskUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: WorkforceTaskScalarWhereInput | WorkforceTaskScalarWhereInput[]
  }

  export type WorkforceInvitationUpdateManyWithoutTeamNestedInput = {
    create?: XOR<WorkforceInvitationCreateWithoutTeamInput, WorkforceInvitationUncheckedCreateWithoutTeamInput> | WorkforceInvitationCreateWithoutTeamInput[] | WorkforceInvitationUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: WorkforceInvitationCreateOrConnectWithoutTeamInput | WorkforceInvitationCreateOrConnectWithoutTeamInput[]
    upsert?: WorkforceInvitationUpsertWithWhereUniqueWithoutTeamInput | WorkforceInvitationUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: WorkforceInvitationCreateManyTeamInputEnvelope
    set?: WorkforceInvitationWhereUniqueInput | WorkforceInvitationWhereUniqueInput[]
    disconnect?: WorkforceInvitationWhereUniqueInput | WorkforceInvitationWhereUniqueInput[]
    delete?: WorkforceInvitationWhereUniqueInput | WorkforceInvitationWhereUniqueInput[]
    connect?: WorkforceInvitationWhereUniqueInput | WorkforceInvitationWhereUniqueInput[]
    update?: WorkforceInvitationUpdateWithWhereUniqueWithoutTeamInput | WorkforceInvitationUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: WorkforceInvitationUpdateManyWithWhereWithoutTeamInput | WorkforceInvitationUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: WorkforceInvitationScalarWhereInput | WorkforceInvitationScalarWhereInput[]
  }

  export type WorkforceNotificationUpdateManyWithoutTeamNestedInput = {
    create?: XOR<WorkforceNotificationCreateWithoutTeamInput, WorkforceNotificationUncheckedCreateWithoutTeamInput> | WorkforceNotificationCreateWithoutTeamInput[] | WorkforceNotificationUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: WorkforceNotificationCreateOrConnectWithoutTeamInput | WorkforceNotificationCreateOrConnectWithoutTeamInput[]
    upsert?: WorkforceNotificationUpsertWithWhereUniqueWithoutTeamInput | WorkforceNotificationUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: WorkforceNotificationCreateManyTeamInputEnvelope
    set?: WorkforceNotificationWhereUniqueInput | WorkforceNotificationWhereUniqueInput[]
    disconnect?: WorkforceNotificationWhereUniqueInput | WorkforceNotificationWhereUniqueInput[]
    delete?: WorkforceNotificationWhereUniqueInput | WorkforceNotificationWhereUniqueInput[]
    connect?: WorkforceNotificationWhereUniqueInput | WorkforceNotificationWhereUniqueInput[]
    update?: WorkforceNotificationUpdateWithWhereUniqueWithoutTeamInput | WorkforceNotificationUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: WorkforceNotificationUpdateManyWithWhereWithoutTeamInput | WorkforceNotificationUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: WorkforceNotificationScalarWhereInput | WorkforceNotificationScalarWhereInput[]
  }

  export type WorkforceCustomRoleUpdateManyWithoutTeamNestedInput = {
    create?: XOR<WorkforceCustomRoleCreateWithoutTeamInput, WorkforceCustomRoleUncheckedCreateWithoutTeamInput> | WorkforceCustomRoleCreateWithoutTeamInput[] | WorkforceCustomRoleUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: WorkforceCustomRoleCreateOrConnectWithoutTeamInput | WorkforceCustomRoleCreateOrConnectWithoutTeamInput[]
    upsert?: WorkforceCustomRoleUpsertWithWhereUniqueWithoutTeamInput | WorkforceCustomRoleUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: WorkforceCustomRoleCreateManyTeamInputEnvelope
    set?: WorkforceCustomRoleWhereUniqueInput | WorkforceCustomRoleWhereUniqueInput[]
    disconnect?: WorkforceCustomRoleWhereUniqueInput | WorkforceCustomRoleWhereUniqueInput[]
    delete?: WorkforceCustomRoleWhereUniqueInput | WorkforceCustomRoleWhereUniqueInput[]
    connect?: WorkforceCustomRoleWhereUniqueInput | WorkforceCustomRoleWhereUniqueInput[]
    update?: WorkforceCustomRoleUpdateWithWhereUniqueWithoutTeamInput | WorkforceCustomRoleUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: WorkforceCustomRoleUpdateManyWithWhereWithoutTeamInput | WorkforceCustomRoleUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: WorkforceCustomRoleScalarWhereInput | WorkforceCustomRoleScalarWhereInput[]
  }

  export type WorkforceTeamMemberUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<WorkforceTeamMemberCreateWithoutTeamInput, WorkforceTeamMemberUncheckedCreateWithoutTeamInput> | WorkforceTeamMemberCreateWithoutTeamInput[] | WorkforceTeamMemberUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: WorkforceTeamMemberCreateOrConnectWithoutTeamInput | WorkforceTeamMemberCreateOrConnectWithoutTeamInput[]
    upsert?: WorkforceTeamMemberUpsertWithWhereUniqueWithoutTeamInput | WorkforceTeamMemberUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: WorkforceTeamMemberCreateManyTeamInputEnvelope
    set?: WorkforceTeamMemberWhereUniqueInput | WorkforceTeamMemberWhereUniqueInput[]
    disconnect?: WorkforceTeamMemberWhereUniqueInput | WorkforceTeamMemberWhereUniqueInput[]
    delete?: WorkforceTeamMemberWhereUniqueInput | WorkforceTeamMemberWhereUniqueInput[]
    connect?: WorkforceTeamMemberWhereUniqueInput | WorkforceTeamMemberWhereUniqueInput[]
    update?: WorkforceTeamMemberUpdateWithWhereUniqueWithoutTeamInput | WorkforceTeamMemberUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: WorkforceTeamMemberUpdateManyWithWhereWithoutTeamInput | WorkforceTeamMemberUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: WorkforceTeamMemberScalarWhereInput | WorkforceTeamMemberScalarWhereInput[]
  }

  export type WorkforceProfileUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<WorkforceProfileCreateWithoutTeamInput, WorkforceProfileUncheckedCreateWithoutTeamInput> | WorkforceProfileCreateWithoutTeamInput[] | WorkforceProfileUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: WorkforceProfileCreateOrConnectWithoutTeamInput | WorkforceProfileCreateOrConnectWithoutTeamInput[]
    upsert?: WorkforceProfileUpsertWithWhereUniqueWithoutTeamInput | WorkforceProfileUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: WorkforceProfileCreateManyTeamInputEnvelope
    set?: WorkforceProfileWhereUniqueInput | WorkforceProfileWhereUniqueInput[]
    disconnect?: WorkforceProfileWhereUniqueInput | WorkforceProfileWhereUniqueInput[]
    delete?: WorkforceProfileWhereUniqueInput | WorkforceProfileWhereUniqueInput[]
    connect?: WorkforceProfileWhereUniqueInput | WorkforceProfileWhereUniqueInput[]
    update?: WorkforceProfileUpdateWithWhereUniqueWithoutTeamInput | WorkforceProfileUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: WorkforceProfileUpdateManyWithWhereWithoutTeamInput | WorkforceProfileUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: WorkforceProfileScalarWhereInput | WorkforceProfileScalarWhereInput[]
  }

  export type WorkforceDepartmentUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<WorkforceDepartmentCreateWithoutTeamInput, WorkforceDepartmentUncheckedCreateWithoutTeamInput> | WorkforceDepartmentCreateWithoutTeamInput[] | WorkforceDepartmentUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: WorkforceDepartmentCreateOrConnectWithoutTeamInput | WorkforceDepartmentCreateOrConnectWithoutTeamInput[]
    upsert?: WorkforceDepartmentUpsertWithWhereUniqueWithoutTeamInput | WorkforceDepartmentUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: WorkforceDepartmentCreateManyTeamInputEnvelope
    set?: WorkforceDepartmentWhereUniqueInput | WorkforceDepartmentWhereUniqueInput[]
    disconnect?: WorkforceDepartmentWhereUniqueInput | WorkforceDepartmentWhereUniqueInput[]
    delete?: WorkforceDepartmentWhereUniqueInput | WorkforceDepartmentWhereUniqueInput[]
    connect?: WorkforceDepartmentWhereUniqueInput | WorkforceDepartmentWhereUniqueInput[]
    update?: WorkforceDepartmentUpdateWithWhereUniqueWithoutTeamInput | WorkforceDepartmentUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: WorkforceDepartmentUpdateManyWithWhereWithoutTeamInput | WorkforceDepartmentUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: WorkforceDepartmentScalarWhereInput | WorkforceDepartmentScalarWhereInput[]
  }

  export type WorkforceEmployeeUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<WorkforceEmployeeCreateWithoutTeamInput, WorkforceEmployeeUncheckedCreateWithoutTeamInput> | WorkforceEmployeeCreateWithoutTeamInput[] | WorkforceEmployeeUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: WorkforceEmployeeCreateOrConnectWithoutTeamInput | WorkforceEmployeeCreateOrConnectWithoutTeamInput[]
    upsert?: WorkforceEmployeeUpsertWithWhereUniqueWithoutTeamInput | WorkforceEmployeeUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: WorkforceEmployeeCreateManyTeamInputEnvelope
    set?: WorkforceEmployeeWhereUniqueInput | WorkforceEmployeeWhereUniqueInput[]
    disconnect?: WorkforceEmployeeWhereUniqueInput | WorkforceEmployeeWhereUniqueInput[]
    delete?: WorkforceEmployeeWhereUniqueInput | WorkforceEmployeeWhereUniqueInput[]
    connect?: WorkforceEmployeeWhereUniqueInput | WorkforceEmployeeWhereUniqueInput[]
    update?: WorkforceEmployeeUpdateWithWhereUniqueWithoutTeamInput | WorkforceEmployeeUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: WorkforceEmployeeUpdateManyWithWhereWithoutTeamInput | WorkforceEmployeeUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: WorkforceEmployeeScalarWhereInput | WorkforceEmployeeScalarWhereInput[]
  }

  export type WorkforceTaskUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<WorkforceTaskCreateWithoutTeamInput, WorkforceTaskUncheckedCreateWithoutTeamInput> | WorkforceTaskCreateWithoutTeamInput[] | WorkforceTaskUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: WorkforceTaskCreateOrConnectWithoutTeamInput | WorkforceTaskCreateOrConnectWithoutTeamInput[]
    upsert?: WorkforceTaskUpsertWithWhereUniqueWithoutTeamInput | WorkforceTaskUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: WorkforceTaskCreateManyTeamInputEnvelope
    set?: WorkforceTaskWhereUniqueInput | WorkforceTaskWhereUniqueInput[]
    disconnect?: WorkforceTaskWhereUniqueInput | WorkforceTaskWhereUniqueInput[]
    delete?: WorkforceTaskWhereUniqueInput | WorkforceTaskWhereUniqueInput[]
    connect?: WorkforceTaskWhereUniqueInput | WorkforceTaskWhereUniqueInput[]
    update?: WorkforceTaskUpdateWithWhereUniqueWithoutTeamInput | WorkforceTaskUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: WorkforceTaskUpdateManyWithWhereWithoutTeamInput | WorkforceTaskUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: WorkforceTaskScalarWhereInput | WorkforceTaskScalarWhereInput[]
  }

  export type WorkforceInvitationUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<WorkforceInvitationCreateWithoutTeamInput, WorkforceInvitationUncheckedCreateWithoutTeamInput> | WorkforceInvitationCreateWithoutTeamInput[] | WorkforceInvitationUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: WorkforceInvitationCreateOrConnectWithoutTeamInput | WorkforceInvitationCreateOrConnectWithoutTeamInput[]
    upsert?: WorkforceInvitationUpsertWithWhereUniqueWithoutTeamInput | WorkforceInvitationUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: WorkforceInvitationCreateManyTeamInputEnvelope
    set?: WorkforceInvitationWhereUniqueInput | WorkforceInvitationWhereUniqueInput[]
    disconnect?: WorkforceInvitationWhereUniqueInput | WorkforceInvitationWhereUniqueInput[]
    delete?: WorkforceInvitationWhereUniqueInput | WorkforceInvitationWhereUniqueInput[]
    connect?: WorkforceInvitationWhereUniqueInput | WorkforceInvitationWhereUniqueInput[]
    update?: WorkforceInvitationUpdateWithWhereUniqueWithoutTeamInput | WorkforceInvitationUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: WorkforceInvitationUpdateManyWithWhereWithoutTeamInput | WorkforceInvitationUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: WorkforceInvitationScalarWhereInput | WorkforceInvitationScalarWhereInput[]
  }

  export type WorkforceNotificationUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<WorkforceNotificationCreateWithoutTeamInput, WorkforceNotificationUncheckedCreateWithoutTeamInput> | WorkforceNotificationCreateWithoutTeamInput[] | WorkforceNotificationUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: WorkforceNotificationCreateOrConnectWithoutTeamInput | WorkforceNotificationCreateOrConnectWithoutTeamInput[]
    upsert?: WorkforceNotificationUpsertWithWhereUniqueWithoutTeamInput | WorkforceNotificationUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: WorkforceNotificationCreateManyTeamInputEnvelope
    set?: WorkforceNotificationWhereUniqueInput | WorkforceNotificationWhereUniqueInput[]
    disconnect?: WorkforceNotificationWhereUniqueInput | WorkforceNotificationWhereUniqueInput[]
    delete?: WorkforceNotificationWhereUniqueInput | WorkforceNotificationWhereUniqueInput[]
    connect?: WorkforceNotificationWhereUniqueInput | WorkforceNotificationWhereUniqueInput[]
    update?: WorkforceNotificationUpdateWithWhereUniqueWithoutTeamInput | WorkforceNotificationUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: WorkforceNotificationUpdateManyWithWhereWithoutTeamInput | WorkforceNotificationUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: WorkforceNotificationScalarWhereInput | WorkforceNotificationScalarWhereInput[]
  }

  export type WorkforceCustomRoleUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<WorkforceCustomRoleCreateWithoutTeamInput, WorkforceCustomRoleUncheckedCreateWithoutTeamInput> | WorkforceCustomRoleCreateWithoutTeamInput[] | WorkforceCustomRoleUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: WorkforceCustomRoleCreateOrConnectWithoutTeamInput | WorkforceCustomRoleCreateOrConnectWithoutTeamInput[]
    upsert?: WorkforceCustomRoleUpsertWithWhereUniqueWithoutTeamInput | WorkforceCustomRoleUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: WorkforceCustomRoleCreateManyTeamInputEnvelope
    set?: WorkforceCustomRoleWhereUniqueInput | WorkforceCustomRoleWhereUniqueInput[]
    disconnect?: WorkforceCustomRoleWhereUniqueInput | WorkforceCustomRoleWhereUniqueInput[]
    delete?: WorkforceCustomRoleWhereUniqueInput | WorkforceCustomRoleWhereUniqueInput[]
    connect?: WorkforceCustomRoleWhereUniqueInput | WorkforceCustomRoleWhereUniqueInput[]
    update?: WorkforceCustomRoleUpdateWithWhereUniqueWithoutTeamInput | WorkforceCustomRoleUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: WorkforceCustomRoleUpdateManyWithWhereWithoutTeamInput | WorkforceCustomRoleUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: WorkforceCustomRoleScalarWhereInput | WorkforceCustomRoleScalarWhereInput[]
  }

  export type WorkforceUserCreateNestedOneWithoutProfileInput = {
    create?: XOR<WorkforceUserCreateWithoutProfileInput, WorkforceUserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: WorkforceUserCreateOrConnectWithoutProfileInput
    connect?: WorkforceUserWhereUniqueInput
  }

  export type WorkforceTeamCreateNestedOneWithoutProfilesInput = {
    create?: XOR<WorkforceTeamCreateWithoutProfilesInput, WorkforceTeamUncheckedCreateWithoutProfilesInput>
    connectOrCreate?: WorkforceTeamCreateOrConnectWithoutProfilesInput
    connect?: WorkforceTeamWhereUniqueInput
  }

  export type WorkforceEmployeeCreateNestedManyWithoutProfileInput = {
    create?: XOR<WorkforceEmployeeCreateWithoutProfileInput, WorkforceEmployeeUncheckedCreateWithoutProfileInput> | WorkforceEmployeeCreateWithoutProfileInput[] | WorkforceEmployeeUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: WorkforceEmployeeCreateOrConnectWithoutProfileInput | WorkforceEmployeeCreateOrConnectWithoutProfileInput[]
    createMany?: WorkforceEmployeeCreateManyProfileInputEnvelope
    connect?: WorkforceEmployeeWhereUniqueInput | WorkforceEmployeeWhereUniqueInput[]
  }

  export type WorkforceTaskCreateNestedManyWithoutAssigneeInput = {
    create?: XOR<WorkforceTaskCreateWithoutAssigneeInput, WorkforceTaskUncheckedCreateWithoutAssigneeInput> | WorkforceTaskCreateWithoutAssigneeInput[] | WorkforceTaskUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: WorkforceTaskCreateOrConnectWithoutAssigneeInput | WorkforceTaskCreateOrConnectWithoutAssigneeInput[]
    createMany?: WorkforceTaskCreateManyAssigneeInputEnvelope
    connect?: WorkforceTaskWhereUniqueInput | WorkforceTaskWhereUniqueInput[]
  }

  export type WorkforceTaskCreateNestedManyWithoutCreatorInput = {
    create?: XOR<WorkforceTaskCreateWithoutCreatorInput, WorkforceTaskUncheckedCreateWithoutCreatorInput> | WorkforceTaskCreateWithoutCreatorInput[] | WorkforceTaskUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: WorkforceTaskCreateOrConnectWithoutCreatorInput | WorkforceTaskCreateOrConnectWithoutCreatorInput[]
    createMany?: WorkforceTaskCreateManyCreatorInputEnvelope
    connect?: WorkforceTaskWhereUniqueInput | WorkforceTaskWhereUniqueInput[]
  }

  export type WorkforceNotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkforceNotificationCreateWithoutUserInput, WorkforceNotificationUncheckedCreateWithoutUserInput> | WorkforceNotificationCreateWithoutUserInput[] | WorkforceNotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkforceNotificationCreateOrConnectWithoutUserInput | WorkforceNotificationCreateOrConnectWithoutUserInput[]
    createMany?: WorkforceNotificationCreateManyUserInputEnvelope
    connect?: WorkforceNotificationWhereUniqueInput | WorkforceNotificationWhereUniqueInput[]
  }

  export type WorkforceDepartmentCreateNestedManyWithoutManagerInput = {
    create?: XOR<WorkforceDepartmentCreateWithoutManagerInput, WorkforceDepartmentUncheckedCreateWithoutManagerInput> | WorkforceDepartmentCreateWithoutManagerInput[] | WorkforceDepartmentUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: WorkforceDepartmentCreateOrConnectWithoutManagerInput | WorkforceDepartmentCreateOrConnectWithoutManagerInput[]
    createMany?: WorkforceDepartmentCreateManyManagerInputEnvelope
    connect?: WorkforceDepartmentWhereUniqueInput | WorkforceDepartmentWhereUniqueInput[]
  }

  export type WorkforceEmployeeCreateNestedManyWithoutManagerInput = {
    create?: XOR<WorkforceEmployeeCreateWithoutManagerInput, WorkforceEmployeeUncheckedCreateWithoutManagerInput> | WorkforceEmployeeCreateWithoutManagerInput[] | WorkforceEmployeeUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: WorkforceEmployeeCreateOrConnectWithoutManagerInput | WorkforceEmployeeCreateOrConnectWithoutManagerInput[]
    createMany?: WorkforceEmployeeCreateManyManagerInputEnvelope
    connect?: WorkforceEmployeeWhereUniqueInput | WorkforceEmployeeWhereUniqueInput[]
  }

  export type WorkforceInvitationCreateNestedManyWithoutInvitedByInput = {
    create?: XOR<WorkforceInvitationCreateWithoutInvitedByInput, WorkforceInvitationUncheckedCreateWithoutInvitedByInput> | WorkforceInvitationCreateWithoutInvitedByInput[] | WorkforceInvitationUncheckedCreateWithoutInvitedByInput[]
    connectOrCreate?: WorkforceInvitationCreateOrConnectWithoutInvitedByInput | WorkforceInvitationCreateOrConnectWithoutInvitedByInput[]
    createMany?: WorkforceInvitationCreateManyInvitedByInputEnvelope
    connect?: WorkforceInvitationWhereUniqueInput | WorkforceInvitationWhereUniqueInput[]
  }

  export type WorkforceUserUncheckedCreateNestedOneWithoutProfileInput = {
    create?: XOR<WorkforceUserCreateWithoutProfileInput, WorkforceUserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: WorkforceUserCreateOrConnectWithoutProfileInput
    connect?: WorkforceUserWhereUniqueInput
  }

  export type WorkforceEmployeeUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<WorkforceEmployeeCreateWithoutProfileInput, WorkforceEmployeeUncheckedCreateWithoutProfileInput> | WorkforceEmployeeCreateWithoutProfileInput[] | WorkforceEmployeeUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: WorkforceEmployeeCreateOrConnectWithoutProfileInput | WorkforceEmployeeCreateOrConnectWithoutProfileInput[]
    createMany?: WorkforceEmployeeCreateManyProfileInputEnvelope
    connect?: WorkforceEmployeeWhereUniqueInput | WorkforceEmployeeWhereUniqueInput[]
  }

  export type WorkforceTaskUncheckedCreateNestedManyWithoutAssigneeInput = {
    create?: XOR<WorkforceTaskCreateWithoutAssigneeInput, WorkforceTaskUncheckedCreateWithoutAssigneeInput> | WorkforceTaskCreateWithoutAssigneeInput[] | WorkforceTaskUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: WorkforceTaskCreateOrConnectWithoutAssigneeInput | WorkforceTaskCreateOrConnectWithoutAssigneeInput[]
    createMany?: WorkforceTaskCreateManyAssigneeInputEnvelope
    connect?: WorkforceTaskWhereUniqueInput | WorkforceTaskWhereUniqueInput[]
  }

  export type WorkforceTaskUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<WorkforceTaskCreateWithoutCreatorInput, WorkforceTaskUncheckedCreateWithoutCreatorInput> | WorkforceTaskCreateWithoutCreatorInput[] | WorkforceTaskUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: WorkforceTaskCreateOrConnectWithoutCreatorInput | WorkforceTaskCreateOrConnectWithoutCreatorInput[]
    createMany?: WorkforceTaskCreateManyCreatorInputEnvelope
    connect?: WorkforceTaskWhereUniqueInput | WorkforceTaskWhereUniqueInput[]
  }

  export type WorkforceNotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkforceNotificationCreateWithoutUserInput, WorkforceNotificationUncheckedCreateWithoutUserInput> | WorkforceNotificationCreateWithoutUserInput[] | WorkforceNotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkforceNotificationCreateOrConnectWithoutUserInput | WorkforceNotificationCreateOrConnectWithoutUserInput[]
    createMany?: WorkforceNotificationCreateManyUserInputEnvelope
    connect?: WorkforceNotificationWhereUniqueInput | WorkforceNotificationWhereUniqueInput[]
  }

  export type WorkforceDepartmentUncheckedCreateNestedManyWithoutManagerInput = {
    create?: XOR<WorkforceDepartmentCreateWithoutManagerInput, WorkforceDepartmentUncheckedCreateWithoutManagerInput> | WorkforceDepartmentCreateWithoutManagerInput[] | WorkforceDepartmentUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: WorkforceDepartmentCreateOrConnectWithoutManagerInput | WorkforceDepartmentCreateOrConnectWithoutManagerInput[]
    createMany?: WorkforceDepartmentCreateManyManagerInputEnvelope
    connect?: WorkforceDepartmentWhereUniqueInput | WorkforceDepartmentWhereUniqueInput[]
  }

  export type WorkforceEmployeeUncheckedCreateNestedManyWithoutManagerInput = {
    create?: XOR<WorkforceEmployeeCreateWithoutManagerInput, WorkforceEmployeeUncheckedCreateWithoutManagerInput> | WorkforceEmployeeCreateWithoutManagerInput[] | WorkforceEmployeeUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: WorkforceEmployeeCreateOrConnectWithoutManagerInput | WorkforceEmployeeCreateOrConnectWithoutManagerInput[]
    createMany?: WorkforceEmployeeCreateManyManagerInputEnvelope
    connect?: WorkforceEmployeeWhereUniqueInput | WorkforceEmployeeWhereUniqueInput[]
  }

  export type WorkforceInvitationUncheckedCreateNestedManyWithoutInvitedByInput = {
    create?: XOR<WorkforceInvitationCreateWithoutInvitedByInput, WorkforceInvitationUncheckedCreateWithoutInvitedByInput> | WorkforceInvitationCreateWithoutInvitedByInput[] | WorkforceInvitationUncheckedCreateWithoutInvitedByInput[]
    connectOrCreate?: WorkforceInvitationCreateOrConnectWithoutInvitedByInput | WorkforceInvitationCreateOrConnectWithoutInvitedByInput[]
    createMany?: WorkforceInvitationCreateManyInvitedByInputEnvelope
    connect?: WorkforceInvitationWhereUniqueInput | WorkforceInvitationWhereUniqueInput[]
  }

  export type WorkforceUserUpdateOneWithoutProfileNestedInput = {
    create?: XOR<WorkforceUserCreateWithoutProfileInput, WorkforceUserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: WorkforceUserCreateOrConnectWithoutProfileInput
    upsert?: WorkforceUserUpsertWithoutProfileInput
    disconnect?: WorkforceUserWhereInput | boolean
    delete?: WorkforceUserWhereInput | boolean
    connect?: WorkforceUserWhereUniqueInput
    update?: XOR<XOR<WorkforceUserUpdateToOneWithWhereWithoutProfileInput, WorkforceUserUpdateWithoutProfileInput>, WorkforceUserUncheckedUpdateWithoutProfileInput>
  }

  export type WorkforceTeamUpdateOneWithoutProfilesNestedInput = {
    create?: XOR<WorkforceTeamCreateWithoutProfilesInput, WorkforceTeamUncheckedCreateWithoutProfilesInput>
    connectOrCreate?: WorkforceTeamCreateOrConnectWithoutProfilesInput
    upsert?: WorkforceTeamUpsertWithoutProfilesInput
    disconnect?: WorkforceTeamWhereInput | boolean
    delete?: WorkforceTeamWhereInput | boolean
    connect?: WorkforceTeamWhereUniqueInput
    update?: XOR<XOR<WorkforceTeamUpdateToOneWithWhereWithoutProfilesInput, WorkforceTeamUpdateWithoutProfilesInput>, WorkforceTeamUncheckedUpdateWithoutProfilesInput>
  }

  export type WorkforceEmployeeUpdateManyWithoutProfileNestedInput = {
    create?: XOR<WorkforceEmployeeCreateWithoutProfileInput, WorkforceEmployeeUncheckedCreateWithoutProfileInput> | WorkforceEmployeeCreateWithoutProfileInput[] | WorkforceEmployeeUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: WorkforceEmployeeCreateOrConnectWithoutProfileInput | WorkforceEmployeeCreateOrConnectWithoutProfileInput[]
    upsert?: WorkforceEmployeeUpsertWithWhereUniqueWithoutProfileInput | WorkforceEmployeeUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: WorkforceEmployeeCreateManyProfileInputEnvelope
    set?: WorkforceEmployeeWhereUniqueInput | WorkforceEmployeeWhereUniqueInput[]
    disconnect?: WorkforceEmployeeWhereUniqueInput | WorkforceEmployeeWhereUniqueInput[]
    delete?: WorkforceEmployeeWhereUniqueInput | WorkforceEmployeeWhereUniqueInput[]
    connect?: WorkforceEmployeeWhereUniqueInput | WorkforceEmployeeWhereUniqueInput[]
    update?: WorkforceEmployeeUpdateWithWhereUniqueWithoutProfileInput | WorkforceEmployeeUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: WorkforceEmployeeUpdateManyWithWhereWithoutProfileInput | WorkforceEmployeeUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: WorkforceEmployeeScalarWhereInput | WorkforceEmployeeScalarWhereInput[]
  }

  export type WorkforceTaskUpdateManyWithoutAssigneeNestedInput = {
    create?: XOR<WorkforceTaskCreateWithoutAssigneeInput, WorkforceTaskUncheckedCreateWithoutAssigneeInput> | WorkforceTaskCreateWithoutAssigneeInput[] | WorkforceTaskUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: WorkforceTaskCreateOrConnectWithoutAssigneeInput | WorkforceTaskCreateOrConnectWithoutAssigneeInput[]
    upsert?: WorkforceTaskUpsertWithWhereUniqueWithoutAssigneeInput | WorkforceTaskUpsertWithWhereUniqueWithoutAssigneeInput[]
    createMany?: WorkforceTaskCreateManyAssigneeInputEnvelope
    set?: WorkforceTaskWhereUniqueInput | WorkforceTaskWhereUniqueInput[]
    disconnect?: WorkforceTaskWhereUniqueInput | WorkforceTaskWhereUniqueInput[]
    delete?: WorkforceTaskWhereUniqueInput | WorkforceTaskWhereUniqueInput[]
    connect?: WorkforceTaskWhereUniqueInput | WorkforceTaskWhereUniqueInput[]
    update?: WorkforceTaskUpdateWithWhereUniqueWithoutAssigneeInput | WorkforceTaskUpdateWithWhereUniqueWithoutAssigneeInput[]
    updateMany?: WorkforceTaskUpdateManyWithWhereWithoutAssigneeInput | WorkforceTaskUpdateManyWithWhereWithoutAssigneeInput[]
    deleteMany?: WorkforceTaskScalarWhereInput | WorkforceTaskScalarWhereInput[]
  }

  export type WorkforceTaskUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<WorkforceTaskCreateWithoutCreatorInput, WorkforceTaskUncheckedCreateWithoutCreatorInput> | WorkforceTaskCreateWithoutCreatorInput[] | WorkforceTaskUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: WorkforceTaskCreateOrConnectWithoutCreatorInput | WorkforceTaskCreateOrConnectWithoutCreatorInput[]
    upsert?: WorkforceTaskUpsertWithWhereUniqueWithoutCreatorInput | WorkforceTaskUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: WorkforceTaskCreateManyCreatorInputEnvelope
    set?: WorkforceTaskWhereUniqueInput | WorkforceTaskWhereUniqueInput[]
    disconnect?: WorkforceTaskWhereUniqueInput | WorkforceTaskWhereUniqueInput[]
    delete?: WorkforceTaskWhereUniqueInput | WorkforceTaskWhereUniqueInput[]
    connect?: WorkforceTaskWhereUniqueInput | WorkforceTaskWhereUniqueInput[]
    update?: WorkforceTaskUpdateWithWhereUniqueWithoutCreatorInput | WorkforceTaskUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: WorkforceTaskUpdateManyWithWhereWithoutCreatorInput | WorkforceTaskUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: WorkforceTaskScalarWhereInput | WorkforceTaskScalarWhereInput[]
  }

  export type WorkforceNotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkforceNotificationCreateWithoutUserInput, WorkforceNotificationUncheckedCreateWithoutUserInput> | WorkforceNotificationCreateWithoutUserInput[] | WorkforceNotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkforceNotificationCreateOrConnectWithoutUserInput | WorkforceNotificationCreateOrConnectWithoutUserInput[]
    upsert?: WorkforceNotificationUpsertWithWhereUniqueWithoutUserInput | WorkforceNotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkforceNotificationCreateManyUserInputEnvelope
    set?: WorkforceNotificationWhereUniqueInput | WorkforceNotificationWhereUniqueInput[]
    disconnect?: WorkforceNotificationWhereUniqueInput | WorkforceNotificationWhereUniqueInput[]
    delete?: WorkforceNotificationWhereUniqueInput | WorkforceNotificationWhereUniqueInput[]
    connect?: WorkforceNotificationWhereUniqueInput | WorkforceNotificationWhereUniqueInput[]
    update?: WorkforceNotificationUpdateWithWhereUniqueWithoutUserInput | WorkforceNotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkforceNotificationUpdateManyWithWhereWithoutUserInput | WorkforceNotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkforceNotificationScalarWhereInput | WorkforceNotificationScalarWhereInput[]
  }

  export type WorkforceDepartmentUpdateManyWithoutManagerNestedInput = {
    create?: XOR<WorkforceDepartmentCreateWithoutManagerInput, WorkforceDepartmentUncheckedCreateWithoutManagerInput> | WorkforceDepartmentCreateWithoutManagerInput[] | WorkforceDepartmentUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: WorkforceDepartmentCreateOrConnectWithoutManagerInput | WorkforceDepartmentCreateOrConnectWithoutManagerInput[]
    upsert?: WorkforceDepartmentUpsertWithWhereUniqueWithoutManagerInput | WorkforceDepartmentUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: WorkforceDepartmentCreateManyManagerInputEnvelope
    set?: WorkforceDepartmentWhereUniqueInput | WorkforceDepartmentWhereUniqueInput[]
    disconnect?: WorkforceDepartmentWhereUniqueInput | WorkforceDepartmentWhereUniqueInput[]
    delete?: WorkforceDepartmentWhereUniqueInput | WorkforceDepartmentWhereUniqueInput[]
    connect?: WorkforceDepartmentWhereUniqueInput | WorkforceDepartmentWhereUniqueInput[]
    update?: WorkforceDepartmentUpdateWithWhereUniqueWithoutManagerInput | WorkforceDepartmentUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: WorkforceDepartmentUpdateManyWithWhereWithoutManagerInput | WorkforceDepartmentUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: WorkforceDepartmentScalarWhereInput | WorkforceDepartmentScalarWhereInput[]
  }

  export type WorkforceEmployeeUpdateManyWithoutManagerNestedInput = {
    create?: XOR<WorkforceEmployeeCreateWithoutManagerInput, WorkforceEmployeeUncheckedCreateWithoutManagerInput> | WorkforceEmployeeCreateWithoutManagerInput[] | WorkforceEmployeeUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: WorkforceEmployeeCreateOrConnectWithoutManagerInput | WorkforceEmployeeCreateOrConnectWithoutManagerInput[]
    upsert?: WorkforceEmployeeUpsertWithWhereUniqueWithoutManagerInput | WorkforceEmployeeUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: WorkforceEmployeeCreateManyManagerInputEnvelope
    set?: WorkforceEmployeeWhereUniqueInput | WorkforceEmployeeWhereUniqueInput[]
    disconnect?: WorkforceEmployeeWhereUniqueInput | WorkforceEmployeeWhereUniqueInput[]
    delete?: WorkforceEmployeeWhereUniqueInput | WorkforceEmployeeWhereUniqueInput[]
    connect?: WorkforceEmployeeWhereUniqueInput | WorkforceEmployeeWhereUniqueInput[]
    update?: WorkforceEmployeeUpdateWithWhereUniqueWithoutManagerInput | WorkforceEmployeeUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: WorkforceEmployeeUpdateManyWithWhereWithoutManagerInput | WorkforceEmployeeUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: WorkforceEmployeeScalarWhereInput | WorkforceEmployeeScalarWhereInput[]
  }

  export type WorkforceInvitationUpdateManyWithoutInvitedByNestedInput = {
    create?: XOR<WorkforceInvitationCreateWithoutInvitedByInput, WorkforceInvitationUncheckedCreateWithoutInvitedByInput> | WorkforceInvitationCreateWithoutInvitedByInput[] | WorkforceInvitationUncheckedCreateWithoutInvitedByInput[]
    connectOrCreate?: WorkforceInvitationCreateOrConnectWithoutInvitedByInput | WorkforceInvitationCreateOrConnectWithoutInvitedByInput[]
    upsert?: WorkforceInvitationUpsertWithWhereUniqueWithoutInvitedByInput | WorkforceInvitationUpsertWithWhereUniqueWithoutInvitedByInput[]
    createMany?: WorkforceInvitationCreateManyInvitedByInputEnvelope
    set?: WorkforceInvitationWhereUniqueInput | WorkforceInvitationWhereUniqueInput[]
    disconnect?: WorkforceInvitationWhereUniqueInput | WorkforceInvitationWhereUniqueInput[]
    delete?: WorkforceInvitationWhereUniqueInput | WorkforceInvitationWhereUniqueInput[]
    connect?: WorkforceInvitationWhereUniqueInput | WorkforceInvitationWhereUniqueInput[]
    update?: WorkforceInvitationUpdateWithWhereUniqueWithoutInvitedByInput | WorkforceInvitationUpdateWithWhereUniqueWithoutInvitedByInput[]
    updateMany?: WorkforceInvitationUpdateManyWithWhereWithoutInvitedByInput | WorkforceInvitationUpdateManyWithWhereWithoutInvitedByInput[]
    deleteMany?: WorkforceInvitationScalarWhereInput | WorkforceInvitationScalarWhereInput[]
  }

  export type WorkforceUserUncheckedUpdateOneWithoutProfileNestedInput = {
    create?: XOR<WorkforceUserCreateWithoutProfileInput, WorkforceUserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: WorkforceUserCreateOrConnectWithoutProfileInput
    upsert?: WorkforceUserUpsertWithoutProfileInput
    disconnect?: WorkforceUserWhereInput | boolean
    delete?: WorkforceUserWhereInput | boolean
    connect?: WorkforceUserWhereUniqueInput
    update?: XOR<XOR<WorkforceUserUpdateToOneWithWhereWithoutProfileInput, WorkforceUserUpdateWithoutProfileInput>, WorkforceUserUncheckedUpdateWithoutProfileInput>
  }

  export type WorkforceEmployeeUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<WorkforceEmployeeCreateWithoutProfileInput, WorkforceEmployeeUncheckedCreateWithoutProfileInput> | WorkforceEmployeeCreateWithoutProfileInput[] | WorkforceEmployeeUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: WorkforceEmployeeCreateOrConnectWithoutProfileInput | WorkforceEmployeeCreateOrConnectWithoutProfileInput[]
    upsert?: WorkforceEmployeeUpsertWithWhereUniqueWithoutProfileInput | WorkforceEmployeeUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: WorkforceEmployeeCreateManyProfileInputEnvelope
    set?: WorkforceEmployeeWhereUniqueInput | WorkforceEmployeeWhereUniqueInput[]
    disconnect?: WorkforceEmployeeWhereUniqueInput | WorkforceEmployeeWhereUniqueInput[]
    delete?: WorkforceEmployeeWhereUniqueInput | WorkforceEmployeeWhereUniqueInput[]
    connect?: WorkforceEmployeeWhereUniqueInput | WorkforceEmployeeWhereUniqueInput[]
    update?: WorkforceEmployeeUpdateWithWhereUniqueWithoutProfileInput | WorkforceEmployeeUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: WorkforceEmployeeUpdateManyWithWhereWithoutProfileInput | WorkforceEmployeeUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: WorkforceEmployeeScalarWhereInput | WorkforceEmployeeScalarWhereInput[]
  }

  export type WorkforceTaskUncheckedUpdateManyWithoutAssigneeNestedInput = {
    create?: XOR<WorkforceTaskCreateWithoutAssigneeInput, WorkforceTaskUncheckedCreateWithoutAssigneeInput> | WorkforceTaskCreateWithoutAssigneeInput[] | WorkforceTaskUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: WorkforceTaskCreateOrConnectWithoutAssigneeInput | WorkforceTaskCreateOrConnectWithoutAssigneeInput[]
    upsert?: WorkforceTaskUpsertWithWhereUniqueWithoutAssigneeInput | WorkforceTaskUpsertWithWhereUniqueWithoutAssigneeInput[]
    createMany?: WorkforceTaskCreateManyAssigneeInputEnvelope
    set?: WorkforceTaskWhereUniqueInput | WorkforceTaskWhereUniqueInput[]
    disconnect?: WorkforceTaskWhereUniqueInput | WorkforceTaskWhereUniqueInput[]
    delete?: WorkforceTaskWhereUniqueInput | WorkforceTaskWhereUniqueInput[]
    connect?: WorkforceTaskWhereUniqueInput | WorkforceTaskWhereUniqueInput[]
    update?: WorkforceTaskUpdateWithWhereUniqueWithoutAssigneeInput | WorkforceTaskUpdateWithWhereUniqueWithoutAssigneeInput[]
    updateMany?: WorkforceTaskUpdateManyWithWhereWithoutAssigneeInput | WorkforceTaskUpdateManyWithWhereWithoutAssigneeInput[]
    deleteMany?: WorkforceTaskScalarWhereInput | WorkforceTaskScalarWhereInput[]
  }

  export type WorkforceTaskUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<WorkforceTaskCreateWithoutCreatorInput, WorkforceTaskUncheckedCreateWithoutCreatorInput> | WorkforceTaskCreateWithoutCreatorInput[] | WorkforceTaskUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: WorkforceTaskCreateOrConnectWithoutCreatorInput | WorkforceTaskCreateOrConnectWithoutCreatorInput[]
    upsert?: WorkforceTaskUpsertWithWhereUniqueWithoutCreatorInput | WorkforceTaskUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: WorkforceTaskCreateManyCreatorInputEnvelope
    set?: WorkforceTaskWhereUniqueInput | WorkforceTaskWhereUniqueInput[]
    disconnect?: WorkforceTaskWhereUniqueInput | WorkforceTaskWhereUniqueInput[]
    delete?: WorkforceTaskWhereUniqueInput | WorkforceTaskWhereUniqueInput[]
    connect?: WorkforceTaskWhereUniqueInput | WorkforceTaskWhereUniqueInput[]
    update?: WorkforceTaskUpdateWithWhereUniqueWithoutCreatorInput | WorkforceTaskUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: WorkforceTaskUpdateManyWithWhereWithoutCreatorInput | WorkforceTaskUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: WorkforceTaskScalarWhereInput | WorkforceTaskScalarWhereInput[]
  }

  export type WorkforceNotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkforceNotificationCreateWithoutUserInput, WorkforceNotificationUncheckedCreateWithoutUserInput> | WorkforceNotificationCreateWithoutUserInput[] | WorkforceNotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkforceNotificationCreateOrConnectWithoutUserInput | WorkforceNotificationCreateOrConnectWithoutUserInput[]
    upsert?: WorkforceNotificationUpsertWithWhereUniqueWithoutUserInput | WorkforceNotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkforceNotificationCreateManyUserInputEnvelope
    set?: WorkforceNotificationWhereUniqueInput | WorkforceNotificationWhereUniqueInput[]
    disconnect?: WorkforceNotificationWhereUniqueInput | WorkforceNotificationWhereUniqueInput[]
    delete?: WorkforceNotificationWhereUniqueInput | WorkforceNotificationWhereUniqueInput[]
    connect?: WorkforceNotificationWhereUniqueInput | WorkforceNotificationWhereUniqueInput[]
    update?: WorkforceNotificationUpdateWithWhereUniqueWithoutUserInput | WorkforceNotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkforceNotificationUpdateManyWithWhereWithoutUserInput | WorkforceNotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkforceNotificationScalarWhereInput | WorkforceNotificationScalarWhereInput[]
  }

  export type WorkforceDepartmentUncheckedUpdateManyWithoutManagerNestedInput = {
    create?: XOR<WorkforceDepartmentCreateWithoutManagerInput, WorkforceDepartmentUncheckedCreateWithoutManagerInput> | WorkforceDepartmentCreateWithoutManagerInput[] | WorkforceDepartmentUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: WorkforceDepartmentCreateOrConnectWithoutManagerInput | WorkforceDepartmentCreateOrConnectWithoutManagerInput[]
    upsert?: WorkforceDepartmentUpsertWithWhereUniqueWithoutManagerInput | WorkforceDepartmentUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: WorkforceDepartmentCreateManyManagerInputEnvelope
    set?: WorkforceDepartmentWhereUniqueInput | WorkforceDepartmentWhereUniqueInput[]
    disconnect?: WorkforceDepartmentWhereUniqueInput | WorkforceDepartmentWhereUniqueInput[]
    delete?: WorkforceDepartmentWhereUniqueInput | WorkforceDepartmentWhereUniqueInput[]
    connect?: WorkforceDepartmentWhereUniqueInput | WorkforceDepartmentWhereUniqueInput[]
    update?: WorkforceDepartmentUpdateWithWhereUniqueWithoutManagerInput | WorkforceDepartmentUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: WorkforceDepartmentUpdateManyWithWhereWithoutManagerInput | WorkforceDepartmentUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: WorkforceDepartmentScalarWhereInput | WorkforceDepartmentScalarWhereInput[]
  }

  export type WorkforceEmployeeUncheckedUpdateManyWithoutManagerNestedInput = {
    create?: XOR<WorkforceEmployeeCreateWithoutManagerInput, WorkforceEmployeeUncheckedCreateWithoutManagerInput> | WorkforceEmployeeCreateWithoutManagerInput[] | WorkforceEmployeeUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: WorkforceEmployeeCreateOrConnectWithoutManagerInput | WorkforceEmployeeCreateOrConnectWithoutManagerInput[]
    upsert?: WorkforceEmployeeUpsertWithWhereUniqueWithoutManagerInput | WorkforceEmployeeUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: WorkforceEmployeeCreateManyManagerInputEnvelope
    set?: WorkforceEmployeeWhereUniqueInput | WorkforceEmployeeWhereUniqueInput[]
    disconnect?: WorkforceEmployeeWhereUniqueInput | WorkforceEmployeeWhereUniqueInput[]
    delete?: WorkforceEmployeeWhereUniqueInput | WorkforceEmployeeWhereUniqueInput[]
    connect?: WorkforceEmployeeWhereUniqueInput | WorkforceEmployeeWhereUniqueInput[]
    update?: WorkforceEmployeeUpdateWithWhereUniqueWithoutManagerInput | WorkforceEmployeeUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: WorkforceEmployeeUpdateManyWithWhereWithoutManagerInput | WorkforceEmployeeUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: WorkforceEmployeeScalarWhereInput | WorkforceEmployeeScalarWhereInput[]
  }

  export type WorkforceInvitationUncheckedUpdateManyWithoutInvitedByNestedInput = {
    create?: XOR<WorkforceInvitationCreateWithoutInvitedByInput, WorkforceInvitationUncheckedCreateWithoutInvitedByInput> | WorkforceInvitationCreateWithoutInvitedByInput[] | WorkforceInvitationUncheckedCreateWithoutInvitedByInput[]
    connectOrCreate?: WorkforceInvitationCreateOrConnectWithoutInvitedByInput | WorkforceInvitationCreateOrConnectWithoutInvitedByInput[]
    upsert?: WorkforceInvitationUpsertWithWhereUniqueWithoutInvitedByInput | WorkforceInvitationUpsertWithWhereUniqueWithoutInvitedByInput[]
    createMany?: WorkforceInvitationCreateManyInvitedByInputEnvelope
    set?: WorkforceInvitationWhereUniqueInput | WorkforceInvitationWhereUniqueInput[]
    disconnect?: WorkforceInvitationWhereUniqueInput | WorkforceInvitationWhereUniqueInput[]
    delete?: WorkforceInvitationWhereUniqueInput | WorkforceInvitationWhereUniqueInput[]
    connect?: WorkforceInvitationWhereUniqueInput | WorkforceInvitationWhereUniqueInput[]
    update?: WorkforceInvitationUpdateWithWhereUniqueWithoutInvitedByInput | WorkforceInvitationUpdateWithWhereUniqueWithoutInvitedByInput[]
    updateMany?: WorkforceInvitationUpdateManyWithWhereWithoutInvitedByInput | WorkforceInvitationUpdateManyWithWhereWithoutInvitedByInput[]
    deleteMany?: WorkforceInvitationScalarWhereInput | WorkforceInvitationScalarWhereInput[]
  }

  export type WorkforceUserCreateNestedOneWithoutMembershipsInput = {
    create?: XOR<WorkforceUserCreateWithoutMembershipsInput, WorkforceUserUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: WorkforceUserCreateOrConnectWithoutMembershipsInput
    connect?: WorkforceUserWhereUniqueInput
  }

  export type WorkforceTeamCreateNestedOneWithoutMembersInput = {
    create?: XOR<WorkforceTeamCreateWithoutMembersInput, WorkforceTeamUncheckedCreateWithoutMembersInput>
    connectOrCreate?: WorkforceTeamCreateOrConnectWithoutMembersInput
    connect?: WorkforceTeamWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type WorkforceUserUpdateOneRequiredWithoutMembershipsNestedInput = {
    create?: XOR<WorkforceUserCreateWithoutMembershipsInput, WorkforceUserUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: WorkforceUserCreateOrConnectWithoutMembershipsInput
    upsert?: WorkforceUserUpsertWithoutMembershipsInput
    connect?: WorkforceUserWhereUniqueInput
    update?: XOR<XOR<WorkforceUserUpdateToOneWithWhereWithoutMembershipsInput, WorkforceUserUpdateWithoutMembershipsInput>, WorkforceUserUncheckedUpdateWithoutMembershipsInput>
  }

  export type WorkforceTeamUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<WorkforceTeamCreateWithoutMembersInput, WorkforceTeamUncheckedCreateWithoutMembersInput>
    connectOrCreate?: WorkforceTeamCreateOrConnectWithoutMembersInput
    upsert?: WorkforceTeamUpsertWithoutMembersInput
    connect?: WorkforceTeamWhereUniqueInput
    update?: XOR<XOR<WorkforceTeamUpdateToOneWithWhereWithoutMembersInput, WorkforceTeamUpdateWithoutMembersInput>, WorkforceTeamUncheckedUpdateWithoutMembersInput>
  }

  export type WorkforceTeamCreateNestedOneWithoutDepartmentsInput = {
    create?: XOR<WorkforceTeamCreateWithoutDepartmentsInput, WorkforceTeamUncheckedCreateWithoutDepartmentsInput>
    connectOrCreate?: WorkforceTeamCreateOrConnectWithoutDepartmentsInput
    connect?: WorkforceTeamWhereUniqueInput
  }

  export type WorkforceProfileCreateNestedOneWithoutManagedDepartmentsInput = {
    create?: XOR<WorkforceProfileCreateWithoutManagedDepartmentsInput, WorkforceProfileUncheckedCreateWithoutManagedDepartmentsInput>
    connectOrCreate?: WorkforceProfileCreateOrConnectWithoutManagedDepartmentsInput
    connect?: WorkforceProfileWhereUniqueInput
  }

  export type WorkforceEmployeeCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<WorkforceEmployeeCreateWithoutDepartmentInput, WorkforceEmployeeUncheckedCreateWithoutDepartmentInput> | WorkforceEmployeeCreateWithoutDepartmentInput[] | WorkforceEmployeeUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: WorkforceEmployeeCreateOrConnectWithoutDepartmentInput | WorkforceEmployeeCreateOrConnectWithoutDepartmentInput[]
    createMany?: WorkforceEmployeeCreateManyDepartmentInputEnvelope
    connect?: WorkforceEmployeeWhereUniqueInput | WorkforceEmployeeWhereUniqueInput[]
  }

  export type WorkforceTaskCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<WorkforceTaskCreateWithoutDepartmentInput, WorkforceTaskUncheckedCreateWithoutDepartmentInput> | WorkforceTaskCreateWithoutDepartmentInput[] | WorkforceTaskUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: WorkforceTaskCreateOrConnectWithoutDepartmentInput | WorkforceTaskCreateOrConnectWithoutDepartmentInput[]
    createMany?: WorkforceTaskCreateManyDepartmentInputEnvelope
    connect?: WorkforceTaskWhereUniqueInput | WorkforceTaskWhereUniqueInput[]
  }

  export type WorkforceEmployeeUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<WorkforceEmployeeCreateWithoutDepartmentInput, WorkforceEmployeeUncheckedCreateWithoutDepartmentInput> | WorkforceEmployeeCreateWithoutDepartmentInput[] | WorkforceEmployeeUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: WorkforceEmployeeCreateOrConnectWithoutDepartmentInput | WorkforceEmployeeCreateOrConnectWithoutDepartmentInput[]
    createMany?: WorkforceEmployeeCreateManyDepartmentInputEnvelope
    connect?: WorkforceEmployeeWhereUniqueInput | WorkforceEmployeeWhereUniqueInput[]
  }

  export type WorkforceTaskUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<WorkforceTaskCreateWithoutDepartmentInput, WorkforceTaskUncheckedCreateWithoutDepartmentInput> | WorkforceTaskCreateWithoutDepartmentInput[] | WorkforceTaskUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: WorkforceTaskCreateOrConnectWithoutDepartmentInput | WorkforceTaskCreateOrConnectWithoutDepartmentInput[]
    createMany?: WorkforceTaskCreateManyDepartmentInputEnvelope
    connect?: WorkforceTaskWhereUniqueInput | WorkforceTaskWhereUniqueInput[]
  }

  export type WorkforceTeamUpdateOneRequiredWithoutDepartmentsNestedInput = {
    create?: XOR<WorkforceTeamCreateWithoutDepartmentsInput, WorkforceTeamUncheckedCreateWithoutDepartmentsInput>
    connectOrCreate?: WorkforceTeamCreateOrConnectWithoutDepartmentsInput
    upsert?: WorkforceTeamUpsertWithoutDepartmentsInput
    connect?: WorkforceTeamWhereUniqueInput
    update?: XOR<XOR<WorkforceTeamUpdateToOneWithWhereWithoutDepartmentsInput, WorkforceTeamUpdateWithoutDepartmentsInput>, WorkforceTeamUncheckedUpdateWithoutDepartmentsInput>
  }

  export type WorkforceProfileUpdateOneWithoutManagedDepartmentsNestedInput = {
    create?: XOR<WorkforceProfileCreateWithoutManagedDepartmentsInput, WorkforceProfileUncheckedCreateWithoutManagedDepartmentsInput>
    connectOrCreate?: WorkforceProfileCreateOrConnectWithoutManagedDepartmentsInput
    upsert?: WorkforceProfileUpsertWithoutManagedDepartmentsInput
    disconnect?: WorkforceProfileWhereInput | boolean
    delete?: WorkforceProfileWhereInput | boolean
    connect?: WorkforceProfileWhereUniqueInput
    update?: XOR<XOR<WorkforceProfileUpdateToOneWithWhereWithoutManagedDepartmentsInput, WorkforceProfileUpdateWithoutManagedDepartmentsInput>, WorkforceProfileUncheckedUpdateWithoutManagedDepartmentsInput>
  }

  export type WorkforceEmployeeUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<WorkforceEmployeeCreateWithoutDepartmentInput, WorkforceEmployeeUncheckedCreateWithoutDepartmentInput> | WorkforceEmployeeCreateWithoutDepartmentInput[] | WorkforceEmployeeUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: WorkforceEmployeeCreateOrConnectWithoutDepartmentInput | WorkforceEmployeeCreateOrConnectWithoutDepartmentInput[]
    upsert?: WorkforceEmployeeUpsertWithWhereUniqueWithoutDepartmentInput | WorkforceEmployeeUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: WorkforceEmployeeCreateManyDepartmentInputEnvelope
    set?: WorkforceEmployeeWhereUniqueInput | WorkforceEmployeeWhereUniqueInput[]
    disconnect?: WorkforceEmployeeWhereUniqueInput | WorkforceEmployeeWhereUniqueInput[]
    delete?: WorkforceEmployeeWhereUniqueInput | WorkforceEmployeeWhereUniqueInput[]
    connect?: WorkforceEmployeeWhereUniqueInput | WorkforceEmployeeWhereUniqueInput[]
    update?: WorkforceEmployeeUpdateWithWhereUniqueWithoutDepartmentInput | WorkforceEmployeeUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: WorkforceEmployeeUpdateManyWithWhereWithoutDepartmentInput | WorkforceEmployeeUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: WorkforceEmployeeScalarWhereInput | WorkforceEmployeeScalarWhereInput[]
  }

  export type WorkforceTaskUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<WorkforceTaskCreateWithoutDepartmentInput, WorkforceTaskUncheckedCreateWithoutDepartmentInput> | WorkforceTaskCreateWithoutDepartmentInput[] | WorkforceTaskUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: WorkforceTaskCreateOrConnectWithoutDepartmentInput | WorkforceTaskCreateOrConnectWithoutDepartmentInput[]
    upsert?: WorkforceTaskUpsertWithWhereUniqueWithoutDepartmentInput | WorkforceTaskUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: WorkforceTaskCreateManyDepartmentInputEnvelope
    set?: WorkforceTaskWhereUniqueInput | WorkforceTaskWhereUniqueInput[]
    disconnect?: WorkforceTaskWhereUniqueInput | WorkforceTaskWhereUniqueInput[]
    delete?: WorkforceTaskWhereUniqueInput | WorkforceTaskWhereUniqueInput[]
    connect?: WorkforceTaskWhereUniqueInput | WorkforceTaskWhereUniqueInput[]
    update?: WorkforceTaskUpdateWithWhereUniqueWithoutDepartmentInput | WorkforceTaskUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: WorkforceTaskUpdateManyWithWhereWithoutDepartmentInput | WorkforceTaskUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: WorkforceTaskScalarWhereInput | WorkforceTaskScalarWhereInput[]
  }

  export type WorkforceEmployeeUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<WorkforceEmployeeCreateWithoutDepartmentInput, WorkforceEmployeeUncheckedCreateWithoutDepartmentInput> | WorkforceEmployeeCreateWithoutDepartmentInput[] | WorkforceEmployeeUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: WorkforceEmployeeCreateOrConnectWithoutDepartmentInput | WorkforceEmployeeCreateOrConnectWithoutDepartmentInput[]
    upsert?: WorkforceEmployeeUpsertWithWhereUniqueWithoutDepartmentInput | WorkforceEmployeeUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: WorkforceEmployeeCreateManyDepartmentInputEnvelope
    set?: WorkforceEmployeeWhereUniqueInput | WorkforceEmployeeWhereUniqueInput[]
    disconnect?: WorkforceEmployeeWhereUniqueInput | WorkforceEmployeeWhereUniqueInput[]
    delete?: WorkforceEmployeeWhereUniqueInput | WorkforceEmployeeWhereUniqueInput[]
    connect?: WorkforceEmployeeWhereUniqueInput | WorkforceEmployeeWhereUniqueInput[]
    update?: WorkforceEmployeeUpdateWithWhereUniqueWithoutDepartmentInput | WorkforceEmployeeUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: WorkforceEmployeeUpdateManyWithWhereWithoutDepartmentInput | WorkforceEmployeeUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: WorkforceEmployeeScalarWhereInput | WorkforceEmployeeScalarWhereInput[]
  }

  export type WorkforceTaskUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<WorkforceTaskCreateWithoutDepartmentInput, WorkforceTaskUncheckedCreateWithoutDepartmentInput> | WorkforceTaskCreateWithoutDepartmentInput[] | WorkforceTaskUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: WorkforceTaskCreateOrConnectWithoutDepartmentInput | WorkforceTaskCreateOrConnectWithoutDepartmentInput[]
    upsert?: WorkforceTaskUpsertWithWhereUniqueWithoutDepartmentInput | WorkforceTaskUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: WorkforceTaskCreateManyDepartmentInputEnvelope
    set?: WorkforceTaskWhereUniqueInput | WorkforceTaskWhereUniqueInput[]
    disconnect?: WorkforceTaskWhereUniqueInput | WorkforceTaskWhereUniqueInput[]
    delete?: WorkforceTaskWhereUniqueInput | WorkforceTaskWhereUniqueInput[]
    connect?: WorkforceTaskWhereUniqueInput | WorkforceTaskWhereUniqueInput[]
    update?: WorkforceTaskUpdateWithWhereUniqueWithoutDepartmentInput | WorkforceTaskUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: WorkforceTaskUpdateManyWithWhereWithoutDepartmentInput | WorkforceTaskUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: WorkforceTaskScalarWhereInput | WorkforceTaskScalarWhereInput[]
  }

  export type WorkforceTeamCreateNestedOneWithoutEmployeesInput = {
    create?: XOR<WorkforceTeamCreateWithoutEmployeesInput, WorkforceTeamUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: WorkforceTeamCreateOrConnectWithoutEmployeesInput
    connect?: WorkforceTeamWhereUniqueInput
  }

  export type WorkforceProfileCreateNestedOneWithoutEmployeesInput = {
    create?: XOR<WorkforceProfileCreateWithoutEmployeesInput, WorkforceProfileUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: WorkforceProfileCreateOrConnectWithoutEmployeesInput
    connect?: WorkforceProfileWhereUniqueInput
  }

  export type WorkforceDepartmentCreateNestedOneWithoutEmployeesInput = {
    create?: XOR<WorkforceDepartmentCreateWithoutEmployeesInput, WorkforceDepartmentUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: WorkforceDepartmentCreateOrConnectWithoutEmployeesInput
    connect?: WorkforceDepartmentWhereUniqueInput
  }

  export type WorkforceProfileCreateNestedOneWithoutManagedEmployeesInput = {
    create?: XOR<WorkforceProfileCreateWithoutManagedEmployeesInput, WorkforceProfileUncheckedCreateWithoutManagedEmployeesInput>
    connectOrCreate?: WorkforceProfileCreateOrConnectWithoutManagedEmployeesInput
    connect?: WorkforceProfileWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumWorkforceEmployeeStatusFieldUpdateOperationsInput = {
    set?: $Enums.WorkforceEmployeeStatus
  }

  export type WorkforceTeamUpdateOneRequiredWithoutEmployeesNestedInput = {
    create?: XOR<WorkforceTeamCreateWithoutEmployeesInput, WorkforceTeamUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: WorkforceTeamCreateOrConnectWithoutEmployeesInput
    upsert?: WorkforceTeamUpsertWithoutEmployeesInput
    connect?: WorkforceTeamWhereUniqueInput
    update?: XOR<XOR<WorkforceTeamUpdateToOneWithWhereWithoutEmployeesInput, WorkforceTeamUpdateWithoutEmployeesInput>, WorkforceTeamUncheckedUpdateWithoutEmployeesInput>
  }

  export type WorkforceProfileUpdateOneRequiredWithoutEmployeesNestedInput = {
    create?: XOR<WorkforceProfileCreateWithoutEmployeesInput, WorkforceProfileUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: WorkforceProfileCreateOrConnectWithoutEmployeesInput
    upsert?: WorkforceProfileUpsertWithoutEmployeesInput
    connect?: WorkforceProfileWhereUniqueInput
    update?: XOR<XOR<WorkforceProfileUpdateToOneWithWhereWithoutEmployeesInput, WorkforceProfileUpdateWithoutEmployeesInput>, WorkforceProfileUncheckedUpdateWithoutEmployeesInput>
  }

  export type WorkforceDepartmentUpdateOneWithoutEmployeesNestedInput = {
    create?: XOR<WorkforceDepartmentCreateWithoutEmployeesInput, WorkforceDepartmentUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: WorkforceDepartmentCreateOrConnectWithoutEmployeesInput
    upsert?: WorkforceDepartmentUpsertWithoutEmployeesInput
    disconnect?: WorkforceDepartmentWhereInput | boolean
    delete?: WorkforceDepartmentWhereInput | boolean
    connect?: WorkforceDepartmentWhereUniqueInput
    update?: XOR<XOR<WorkforceDepartmentUpdateToOneWithWhereWithoutEmployeesInput, WorkforceDepartmentUpdateWithoutEmployeesInput>, WorkforceDepartmentUncheckedUpdateWithoutEmployeesInput>
  }

  export type WorkforceProfileUpdateOneWithoutManagedEmployeesNestedInput = {
    create?: XOR<WorkforceProfileCreateWithoutManagedEmployeesInput, WorkforceProfileUncheckedCreateWithoutManagedEmployeesInput>
    connectOrCreate?: WorkforceProfileCreateOrConnectWithoutManagedEmployeesInput
    upsert?: WorkforceProfileUpsertWithoutManagedEmployeesInput
    disconnect?: WorkforceProfileWhereInput | boolean
    delete?: WorkforceProfileWhereInput | boolean
    connect?: WorkforceProfileWhereUniqueInput
    update?: XOR<XOR<WorkforceProfileUpdateToOneWithWhereWithoutManagedEmployeesInput, WorkforceProfileUpdateWithoutManagedEmployeesInput>, WorkforceProfileUncheckedUpdateWithoutManagedEmployeesInput>
  }

  export type WorkforceTeamCreateNestedOneWithoutTasksInput = {
    create?: XOR<WorkforceTeamCreateWithoutTasksInput, WorkforceTeamUncheckedCreateWithoutTasksInput>
    connectOrCreate?: WorkforceTeamCreateOrConnectWithoutTasksInput
    connect?: WorkforceTeamWhereUniqueInput
  }

  export type WorkforceDepartmentCreateNestedOneWithoutTasksInput = {
    create?: XOR<WorkforceDepartmentCreateWithoutTasksInput, WorkforceDepartmentUncheckedCreateWithoutTasksInput>
    connectOrCreate?: WorkforceDepartmentCreateOrConnectWithoutTasksInput
    connect?: WorkforceDepartmentWhereUniqueInput
  }

  export type WorkforceProfileCreateNestedOneWithoutAssignedTasksInput = {
    create?: XOR<WorkforceProfileCreateWithoutAssignedTasksInput, WorkforceProfileUncheckedCreateWithoutAssignedTasksInput>
    connectOrCreate?: WorkforceProfileCreateOrConnectWithoutAssignedTasksInput
    connect?: WorkforceProfileWhereUniqueInput
  }

  export type WorkforceProfileCreateNestedOneWithoutCreatedTasksInput = {
    create?: XOR<WorkforceProfileCreateWithoutCreatedTasksInput, WorkforceProfileUncheckedCreateWithoutCreatedTasksInput>
    connectOrCreate?: WorkforceProfileCreateOrConnectWithoutCreatedTasksInput
    connect?: WorkforceProfileWhereUniqueInput
  }

  export type EnumWorkforceTaskPriorityFieldUpdateOperationsInput = {
    set?: $Enums.WorkforceTaskPriority
  }

  export type EnumWorkforceTaskStatusFieldUpdateOperationsInput = {
    set?: $Enums.WorkforceTaskStatus
  }

  export type WorkforceTeamUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<WorkforceTeamCreateWithoutTasksInput, WorkforceTeamUncheckedCreateWithoutTasksInput>
    connectOrCreate?: WorkforceTeamCreateOrConnectWithoutTasksInput
    upsert?: WorkforceTeamUpsertWithoutTasksInput
    connect?: WorkforceTeamWhereUniqueInput
    update?: XOR<XOR<WorkforceTeamUpdateToOneWithWhereWithoutTasksInput, WorkforceTeamUpdateWithoutTasksInput>, WorkforceTeamUncheckedUpdateWithoutTasksInput>
  }

  export type WorkforceDepartmentUpdateOneWithoutTasksNestedInput = {
    create?: XOR<WorkforceDepartmentCreateWithoutTasksInput, WorkforceDepartmentUncheckedCreateWithoutTasksInput>
    connectOrCreate?: WorkforceDepartmentCreateOrConnectWithoutTasksInput
    upsert?: WorkforceDepartmentUpsertWithoutTasksInput
    disconnect?: WorkforceDepartmentWhereInput | boolean
    delete?: WorkforceDepartmentWhereInput | boolean
    connect?: WorkforceDepartmentWhereUniqueInput
    update?: XOR<XOR<WorkforceDepartmentUpdateToOneWithWhereWithoutTasksInput, WorkforceDepartmentUpdateWithoutTasksInput>, WorkforceDepartmentUncheckedUpdateWithoutTasksInput>
  }

  export type WorkforceProfileUpdateOneWithoutAssignedTasksNestedInput = {
    create?: XOR<WorkforceProfileCreateWithoutAssignedTasksInput, WorkforceProfileUncheckedCreateWithoutAssignedTasksInput>
    connectOrCreate?: WorkforceProfileCreateOrConnectWithoutAssignedTasksInput
    upsert?: WorkforceProfileUpsertWithoutAssignedTasksInput
    disconnect?: WorkforceProfileWhereInput | boolean
    delete?: WorkforceProfileWhereInput | boolean
    connect?: WorkforceProfileWhereUniqueInput
    update?: XOR<XOR<WorkforceProfileUpdateToOneWithWhereWithoutAssignedTasksInput, WorkforceProfileUpdateWithoutAssignedTasksInput>, WorkforceProfileUncheckedUpdateWithoutAssignedTasksInput>
  }

  export type WorkforceProfileUpdateOneWithoutCreatedTasksNestedInput = {
    create?: XOR<WorkforceProfileCreateWithoutCreatedTasksInput, WorkforceProfileUncheckedCreateWithoutCreatedTasksInput>
    connectOrCreate?: WorkforceProfileCreateOrConnectWithoutCreatedTasksInput
    upsert?: WorkforceProfileUpsertWithoutCreatedTasksInput
    disconnect?: WorkforceProfileWhereInput | boolean
    delete?: WorkforceProfileWhereInput | boolean
    connect?: WorkforceProfileWhereUniqueInput
    update?: XOR<XOR<WorkforceProfileUpdateToOneWithWhereWithoutCreatedTasksInput, WorkforceProfileUpdateWithoutCreatedTasksInput>, WorkforceProfileUncheckedUpdateWithoutCreatedTasksInput>
  }

  export type WorkforceTeamCreateNestedOneWithoutInvitationsInput = {
    create?: XOR<WorkforceTeamCreateWithoutInvitationsInput, WorkforceTeamUncheckedCreateWithoutInvitationsInput>
    connectOrCreate?: WorkforceTeamCreateOrConnectWithoutInvitationsInput
    connect?: WorkforceTeamWhereUniqueInput
  }

  export type WorkforceProfileCreateNestedOneWithoutSentInvitationsInput = {
    create?: XOR<WorkforceProfileCreateWithoutSentInvitationsInput, WorkforceProfileUncheckedCreateWithoutSentInvitationsInput>
    connectOrCreate?: WorkforceProfileCreateOrConnectWithoutSentInvitationsInput
    connect?: WorkforceProfileWhereUniqueInput
  }

  export type WorkforceTeamUpdateOneRequiredWithoutInvitationsNestedInput = {
    create?: XOR<WorkforceTeamCreateWithoutInvitationsInput, WorkforceTeamUncheckedCreateWithoutInvitationsInput>
    connectOrCreate?: WorkforceTeamCreateOrConnectWithoutInvitationsInput
    upsert?: WorkforceTeamUpsertWithoutInvitationsInput
    connect?: WorkforceTeamWhereUniqueInput
    update?: XOR<XOR<WorkforceTeamUpdateToOneWithWhereWithoutInvitationsInput, WorkforceTeamUpdateWithoutInvitationsInput>, WorkforceTeamUncheckedUpdateWithoutInvitationsInput>
  }

  export type WorkforceProfileUpdateOneRequiredWithoutSentInvitationsNestedInput = {
    create?: XOR<WorkforceProfileCreateWithoutSentInvitationsInput, WorkforceProfileUncheckedCreateWithoutSentInvitationsInput>
    connectOrCreate?: WorkforceProfileCreateOrConnectWithoutSentInvitationsInput
    upsert?: WorkforceProfileUpsertWithoutSentInvitationsInput
    connect?: WorkforceProfileWhereUniqueInput
    update?: XOR<XOR<WorkforceProfileUpdateToOneWithWhereWithoutSentInvitationsInput, WorkforceProfileUpdateWithoutSentInvitationsInput>, WorkforceProfileUncheckedUpdateWithoutSentInvitationsInput>
  }

  export type WorkforceProfileCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<WorkforceProfileCreateWithoutNotificationsInput, WorkforceProfileUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: WorkforceProfileCreateOrConnectWithoutNotificationsInput
    connect?: WorkforceProfileWhereUniqueInput
  }

  export type WorkforceTeamCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<WorkforceTeamCreateWithoutNotificationsInput, WorkforceTeamUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: WorkforceTeamCreateOrConnectWithoutNotificationsInput
    connect?: WorkforceTeamWhereUniqueInput
  }

  export type WorkforceProfileUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<WorkforceProfileCreateWithoutNotificationsInput, WorkforceProfileUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: WorkforceProfileCreateOrConnectWithoutNotificationsInput
    upsert?: WorkforceProfileUpsertWithoutNotificationsInput
    connect?: WorkforceProfileWhereUniqueInput
    update?: XOR<XOR<WorkforceProfileUpdateToOneWithWhereWithoutNotificationsInput, WorkforceProfileUpdateWithoutNotificationsInput>, WorkforceProfileUncheckedUpdateWithoutNotificationsInput>
  }

  export type WorkforceTeamUpdateOneWithoutNotificationsNestedInput = {
    create?: XOR<WorkforceTeamCreateWithoutNotificationsInput, WorkforceTeamUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: WorkforceTeamCreateOrConnectWithoutNotificationsInput
    upsert?: WorkforceTeamUpsertWithoutNotificationsInput
    disconnect?: WorkforceTeamWhereInput | boolean
    delete?: WorkforceTeamWhereInput | boolean
    connect?: WorkforceTeamWhereUniqueInput
    update?: XOR<XOR<WorkforceTeamUpdateToOneWithWhereWithoutNotificationsInput, WorkforceTeamUpdateWithoutNotificationsInput>, WorkforceTeamUncheckedUpdateWithoutNotificationsInput>
  }

  export type WorkforceTeamCreateNestedOneWithoutRolesInput = {
    create?: XOR<WorkforceTeamCreateWithoutRolesInput, WorkforceTeamUncheckedCreateWithoutRolesInput>
    connectOrCreate?: WorkforceTeamCreateOrConnectWithoutRolesInput
    connect?: WorkforceTeamWhereUniqueInput
  }

  export type WorkforceTeamUpdateOneRequiredWithoutRolesNestedInput = {
    create?: XOR<WorkforceTeamCreateWithoutRolesInput, WorkforceTeamUncheckedCreateWithoutRolesInput>
    connectOrCreate?: WorkforceTeamCreateOrConnectWithoutRolesInput
    upsert?: WorkforceTeamUpsertWithoutRolesInput
    connect?: WorkforceTeamWhereUniqueInput
    update?: XOR<XOR<WorkforceTeamUpdateToOneWithWhereWithoutRolesInput, WorkforceTeamUpdateWithoutRolesInput>, WorkforceTeamUncheckedUpdateWithoutRolesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumWorkforceEmployeeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkforceEmployeeStatus | EnumWorkforceEmployeeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WorkforceEmployeeStatus[] | ListEnumWorkforceEmployeeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkforceEmployeeStatus[] | ListEnumWorkforceEmployeeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkforceEmployeeStatusFilter<$PrismaModel> | $Enums.WorkforceEmployeeStatus
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumWorkforceEmployeeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkforceEmployeeStatus | EnumWorkforceEmployeeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WorkforceEmployeeStatus[] | ListEnumWorkforceEmployeeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkforceEmployeeStatus[] | ListEnumWorkforceEmployeeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkforceEmployeeStatusWithAggregatesFilter<$PrismaModel> | $Enums.WorkforceEmployeeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWorkforceEmployeeStatusFilter<$PrismaModel>
    _max?: NestedEnumWorkforceEmployeeStatusFilter<$PrismaModel>
  }

  export type NestedEnumWorkforceTaskPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkforceTaskPriority | EnumWorkforceTaskPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.WorkforceTaskPriority[] | ListEnumWorkforceTaskPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkforceTaskPriority[] | ListEnumWorkforceTaskPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkforceTaskPriorityFilter<$PrismaModel> | $Enums.WorkforceTaskPriority
  }

  export type NestedEnumWorkforceTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkforceTaskStatus | EnumWorkforceTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WorkforceTaskStatus[] | ListEnumWorkforceTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkforceTaskStatus[] | ListEnumWorkforceTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkforceTaskStatusFilter<$PrismaModel> | $Enums.WorkforceTaskStatus
  }

  export type NestedEnumWorkforceTaskPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkforceTaskPriority | EnumWorkforceTaskPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.WorkforceTaskPriority[] | ListEnumWorkforceTaskPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkforceTaskPriority[] | ListEnumWorkforceTaskPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkforceTaskPriorityWithAggregatesFilter<$PrismaModel> | $Enums.WorkforceTaskPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWorkforceTaskPriorityFilter<$PrismaModel>
    _max?: NestedEnumWorkforceTaskPriorityFilter<$PrismaModel>
  }

  export type NestedEnumWorkforceTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkforceTaskStatus | EnumWorkforceTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WorkforceTaskStatus[] | ListEnumWorkforceTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkforceTaskStatus[] | ListEnumWorkforceTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkforceTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.WorkforceTaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWorkforceTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumWorkforceTaskStatusFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type WorkforceProfileCreateWithoutUserInput = {
    id?: string
    email: string
    firstName?: string | null
    lastName?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    team?: WorkforceTeamCreateNestedOneWithoutProfilesInput
    employees?: WorkforceEmployeeCreateNestedManyWithoutProfileInput
    assignedTasks?: WorkforceTaskCreateNestedManyWithoutAssigneeInput
    createdTasks?: WorkforceTaskCreateNestedManyWithoutCreatorInput
    notifications?: WorkforceNotificationCreateNestedManyWithoutUserInput
    managedDepartments?: WorkforceDepartmentCreateNestedManyWithoutManagerInput
    managedEmployees?: WorkforceEmployeeCreateNestedManyWithoutManagerInput
    sentInvitations?: WorkforceInvitationCreateNestedManyWithoutInvitedByInput
  }

  export type WorkforceProfileUncheckedCreateWithoutUserInput = {
    id?: string
    email: string
    firstName?: string | null
    lastName?: string | null
    role?: string
    teamId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employees?: WorkforceEmployeeUncheckedCreateNestedManyWithoutProfileInput
    assignedTasks?: WorkforceTaskUncheckedCreateNestedManyWithoutAssigneeInput
    createdTasks?: WorkforceTaskUncheckedCreateNestedManyWithoutCreatorInput
    notifications?: WorkforceNotificationUncheckedCreateNestedManyWithoutUserInput
    managedDepartments?: WorkforceDepartmentUncheckedCreateNestedManyWithoutManagerInput
    managedEmployees?: WorkforceEmployeeUncheckedCreateNestedManyWithoutManagerInput
    sentInvitations?: WorkforceInvitationUncheckedCreateNestedManyWithoutInvitedByInput
  }

  export type WorkforceProfileCreateOrConnectWithoutUserInput = {
    where: WorkforceProfileWhereUniqueInput
    create: XOR<WorkforceProfileCreateWithoutUserInput, WorkforceProfileUncheckedCreateWithoutUserInput>
  }

  export type WorkforceTeamMemberCreateWithoutUserInput = {
    id?: string
    role?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    team: WorkforceTeamCreateNestedOneWithoutMembersInput
  }

  export type WorkforceTeamMemberUncheckedCreateWithoutUserInput = {
    id?: string
    teamId: string
    role?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkforceTeamMemberCreateOrConnectWithoutUserInput = {
    where: WorkforceTeamMemberWhereUniqueInput
    create: XOR<WorkforceTeamMemberCreateWithoutUserInput, WorkforceTeamMemberUncheckedCreateWithoutUserInput>
  }

  export type WorkforceTeamMemberCreateManyUserInputEnvelope = {
    data: WorkforceTeamMemberCreateManyUserInput | WorkforceTeamMemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WorkforceTeamCreateWithoutOwnerInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: WorkforceTeamMemberCreateNestedManyWithoutTeamInput
    profiles?: WorkforceProfileCreateNestedManyWithoutTeamInput
    departments?: WorkforceDepartmentCreateNestedManyWithoutTeamInput
    employees?: WorkforceEmployeeCreateNestedManyWithoutTeamInput
    tasks?: WorkforceTaskCreateNestedManyWithoutTeamInput
    invitations?: WorkforceInvitationCreateNestedManyWithoutTeamInput
    notifications?: WorkforceNotificationCreateNestedManyWithoutTeamInput
    roles?: WorkforceCustomRoleCreateNestedManyWithoutTeamInput
  }

  export type WorkforceTeamUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: WorkforceTeamMemberUncheckedCreateNestedManyWithoutTeamInput
    profiles?: WorkforceProfileUncheckedCreateNestedManyWithoutTeamInput
    departments?: WorkforceDepartmentUncheckedCreateNestedManyWithoutTeamInput
    employees?: WorkforceEmployeeUncheckedCreateNestedManyWithoutTeamInput
    tasks?: WorkforceTaskUncheckedCreateNestedManyWithoutTeamInput
    invitations?: WorkforceInvitationUncheckedCreateNestedManyWithoutTeamInput
    notifications?: WorkforceNotificationUncheckedCreateNestedManyWithoutTeamInput
    roles?: WorkforceCustomRoleUncheckedCreateNestedManyWithoutTeamInput
  }

  export type WorkforceTeamCreateOrConnectWithoutOwnerInput = {
    where: WorkforceTeamWhereUniqueInput
    create: XOR<WorkforceTeamCreateWithoutOwnerInput, WorkforceTeamUncheckedCreateWithoutOwnerInput>
  }

  export type WorkforceTeamCreateManyOwnerInputEnvelope = {
    data: WorkforceTeamCreateManyOwnerInput | WorkforceTeamCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type WorkforceProfileUpsertWithoutUserInput = {
    update: XOR<WorkforceProfileUpdateWithoutUserInput, WorkforceProfileUncheckedUpdateWithoutUserInput>
    create: XOR<WorkforceProfileCreateWithoutUserInput, WorkforceProfileUncheckedCreateWithoutUserInput>
    where?: WorkforceProfileWhereInput
  }

  export type WorkforceProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: WorkforceProfileWhereInput
    data: XOR<WorkforceProfileUpdateWithoutUserInput, WorkforceProfileUncheckedUpdateWithoutUserInput>
  }

  export type WorkforceProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: WorkforceTeamUpdateOneWithoutProfilesNestedInput
    employees?: WorkforceEmployeeUpdateManyWithoutProfileNestedInput
    assignedTasks?: WorkforceTaskUpdateManyWithoutAssigneeNestedInput
    createdTasks?: WorkforceTaskUpdateManyWithoutCreatorNestedInput
    notifications?: WorkforceNotificationUpdateManyWithoutUserNestedInput
    managedDepartments?: WorkforceDepartmentUpdateManyWithoutManagerNestedInput
    managedEmployees?: WorkforceEmployeeUpdateManyWithoutManagerNestedInput
    sentInvitations?: WorkforceInvitationUpdateManyWithoutInvitedByNestedInput
  }

  export type WorkforceProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: WorkforceEmployeeUncheckedUpdateManyWithoutProfileNestedInput
    assignedTasks?: WorkforceTaskUncheckedUpdateManyWithoutAssigneeNestedInput
    createdTasks?: WorkforceTaskUncheckedUpdateManyWithoutCreatorNestedInput
    notifications?: WorkforceNotificationUncheckedUpdateManyWithoutUserNestedInput
    managedDepartments?: WorkforceDepartmentUncheckedUpdateManyWithoutManagerNestedInput
    managedEmployees?: WorkforceEmployeeUncheckedUpdateManyWithoutManagerNestedInput
    sentInvitations?: WorkforceInvitationUncheckedUpdateManyWithoutInvitedByNestedInput
  }

  export type WorkforceTeamMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: WorkforceTeamMemberWhereUniqueInput
    update: XOR<WorkforceTeamMemberUpdateWithoutUserInput, WorkforceTeamMemberUncheckedUpdateWithoutUserInput>
    create: XOR<WorkforceTeamMemberCreateWithoutUserInput, WorkforceTeamMemberUncheckedCreateWithoutUserInput>
  }

  export type WorkforceTeamMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: WorkforceTeamMemberWhereUniqueInput
    data: XOR<WorkforceTeamMemberUpdateWithoutUserInput, WorkforceTeamMemberUncheckedUpdateWithoutUserInput>
  }

  export type WorkforceTeamMemberUpdateManyWithWhereWithoutUserInput = {
    where: WorkforceTeamMemberScalarWhereInput
    data: XOR<WorkforceTeamMemberUpdateManyMutationInput, WorkforceTeamMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type WorkforceTeamMemberScalarWhereInput = {
    AND?: WorkforceTeamMemberScalarWhereInput | WorkforceTeamMemberScalarWhereInput[]
    OR?: WorkforceTeamMemberScalarWhereInput[]
    NOT?: WorkforceTeamMemberScalarWhereInput | WorkforceTeamMemberScalarWhereInput[]
    id?: StringFilter<"WorkforceTeamMember"> | string
    userId?: StringFilter<"WorkforceTeamMember"> | string
    teamId?: StringFilter<"WorkforceTeamMember"> | string
    role?: StringFilter<"WorkforceTeamMember"> | string
    isActive?: BoolFilter<"WorkforceTeamMember"> | boolean
    createdAt?: DateTimeFilter<"WorkforceTeamMember"> | Date | string
    updatedAt?: DateTimeFilter<"WorkforceTeamMember"> | Date | string
  }

  export type WorkforceTeamUpsertWithWhereUniqueWithoutOwnerInput = {
    where: WorkforceTeamWhereUniqueInput
    update: XOR<WorkforceTeamUpdateWithoutOwnerInput, WorkforceTeamUncheckedUpdateWithoutOwnerInput>
    create: XOR<WorkforceTeamCreateWithoutOwnerInput, WorkforceTeamUncheckedCreateWithoutOwnerInput>
  }

  export type WorkforceTeamUpdateWithWhereUniqueWithoutOwnerInput = {
    where: WorkforceTeamWhereUniqueInput
    data: XOR<WorkforceTeamUpdateWithoutOwnerInput, WorkforceTeamUncheckedUpdateWithoutOwnerInput>
  }

  export type WorkforceTeamUpdateManyWithWhereWithoutOwnerInput = {
    where: WorkforceTeamScalarWhereInput
    data: XOR<WorkforceTeamUpdateManyMutationInput, WorkforceTeamUncheckedUpdateManyWithoutOwnerInput>
  }

  export type WorkforceTeamScalarWhereInput = {
    AND?: WorkforceTeamScalarWhereInput | WorkforceTeamScalarWhereInput[]
    OR?: WorkforceTeamScalarWhereInput[]
    NOT?: WorkforceTeamScalarWhereInput | WorkforceTeamScalarWhereInput[]
    id?: StringFilter<"WorkforceTeam"> | string
    name?: StringFilter<"WorkforceTeam"> | string
    ownerId?: StringFilter<"WorkforceTeam"> | string
    createdAt?: DateTimeFilter<"WorkforceTeam"> | Date | string
    updatedAt?: DateTimeFilter<"WorkforceTeam"> | Date | string
  }

  export type WorkforceUserCreateWithoutOwnedTeamsInput = {
    id?: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    profile?: WorkforceProfileCreateNestedOneWithoutUserInput
    memberships?: WorkforceTeamMemberCreateNestedManyWithoutUserInput
  }

  export type WorkforceUserUncheckedCreateWithoutOwnedTeamsInput = {
    id?: string
    email: string
    passwordHash: string
    profileId?: string | null
    createdAt?: Date | string
    memberships?: WorkforceTeamMemberUncheckedCreateNestedManyWithoutUserInput
  }

  export type WorkforceUserCreateOrConnectWithoutOwnedTeamsInput = {
    where: WorkforceUserWhereUniqueInput
    create: XOR<WorkforceUserCreateWithoutOwnedTeamsInput, WorkforceUserUncheckedCreateWithoutOwnedTeamsInput>
  }

  export type WorkforceTeamMemberCreateWithoutTeamInput = {
    id?: string
    role?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: WorkforceUserCreateNestedOneWithoutMembershipsInput
  }

  export type WorkforceTeamMemberUncheckedCreateWithoutTeamInput = {
    id?: string
    userId: string
    role?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkforceTeamMemberCreateOrConnectWithoutTeamInput = {
    where: WorkforceTeamMemberWhereUniqueInput
    create: XOR<WorkforceTeamMemberCreateWithoutTeamInput, WorkforceTeamMemberUncheckedCreateWithoutTeamInput>
  }

  export type WorkforceTeamMemberCreateManyTeamInputEnvelope = {
    data: WorkforceTeamMemberCreateManyTeamInput | WorkforceTeamMemberCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type WorkforceProfileCreateWithoutTeamInput = {
    id?: string
    email: string
    firstName?: string | null
    lastName?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: WorkforceUserCreateNestedOneWithoutProfileInput
    employees?: WorkforceEmployeeCreateNestedManyWithoutProfileInput
    assignedTasks?: WorkforceTaskCreateNestedManyWithoutAssigneeInput
    createdTasks?: WorkforceTaskCreateNestedManyWithoutCreatorInput
    notifications?: WorkforceNotificationCreateNestedManyWithoutUserInput
    managedDepartments?: WorkforceDepartmentCreateNestedManyWithoutManagerInput
    managedEmployees?: WorkforceEmployeeCreateNestedManyWithoutManagerInput
    sentInvitations?: WorkforceInvitationCreateNestedManyWithoutInvitedByInput
  }

  export type WorkforceProfileUncheckedCreateWithoutTeamInput = {
    id?: string
    email: string
    firstName?: string | null
    lastName?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: WorkforceUserUncheckedCreateNestedOneWithoutProfileInput
    employees?: WorkforceEmployeeUncheckedCreateNestedManyWithoutProfileInput
    assignedTasks?: WorkforceTaskUncheckedCreateNestedManyWithoutAssigneeInput
    createdTasks?: WorkforceTaskUncheckedCreateNestedManyWithoutCreatorInput
    notifications?: WorkforceNotificationUncheckedCreateNestedManyWithoutUserInput
    managedDepartments?: WorkforceDepartmentUncheckedCreateNestedManyWithoutManagerInput
    managedEmployees?: WorkforceEmployeeUncheckedCreateNestedManyWithoutManagerInput
    sentInvitations?: WorkforceInvitationUncheckedCreateNestedManyWithoutInvitedByInput
  }

  export type WorkforceProfileCreateOrConnectWithoutTeamInput = {
    where: WorkforceProfileWhereUniqueInput
    create: XOR<WorkforceProfileCreateWithoutTeamInput, WorkforceProfileUncheckedCreateWithoutTeamInput>
  }

  export type WorkforceProfileCreateManyTeamInputEnvelope = {
    data: WorkforceProfileCreateManyTeamInput | WorkforceProfileCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type WorkforceDepartmentCreateWithoutTeamInput = {
    id?: string
    name: string
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    manager?: WorkforceProfileCreateNestedOneWithoutManagedDepartmentsInput
    employees?: WorkforceEmployeeCreateNestedManyWithoutDepartmentInput
    tasks?: WorkforceTaskCreateNestedManyWithoutDepartmentInput
  }

  export type WorkforceDepartmentUncheckedCreateWithoutTeamInput = {
    id?: string
    name: string
    icon?: string | null
    managerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employees?: WorkforceEmployeeUncheckedCreateNestedManyWithoutDepartmentInput
    tasks?: WorkforceTaskUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type WorkforceDepartmentCreateOrConnectWithoutTeamInput = {
    where: WorkforceDepartmentWhereUniqueInput
    create: XOR<WorkforceDepartmentCreateWithoutTeamInput, WorkforceDepartmentUncheckedCreateWithoutTeamInput>
  }

  export type WorkforceDepartmentCreateManyTeamInputEnvelope = {
    data: WorkforceDepartmentCreateManyTeamInput | WorkforceDepartmentCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type WorkforceEmployeeCreateWithoutTeamInput = {
    id?: string
    position?: string | null
    joinDate?: Date | string | null
    salary?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.WorkforceEmployeeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: WorkforceProfileCreateNestedOneWithoutEmployeesInput
    department?: WorkforceDepartmentCreateNestedOneWithoutEmployeesInput
    manager?: WorkforceProfileCreateNestedOneWithoutManagedEmployeesInput
  }

  export type WorkforceEmployeeUncheckedCreateWithoutTeamInput = {
    id?: string
    profileId: string
    departmentId?: string | null
    position?: string | null
    joinDate?: Date | string | null
    salary?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.WorkforceEmployeeStatus
    managerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkforceEmployeeCreateOrConnectWithoutTeamInput = {
    where: WorkforceEmployeeWhereUniqueInput
    create: XOR<WorkforceEmployeeCreateWithoutTeamInput, WorkforceEmployeeUncheckedCreateWithoutTeamInput>
  }

  export type WorkforceEmployeeCreateManyTeamInputEnvelope = {
    data: WorkforceEmployeeCreateManyTeamInput | WorkforceEmployeeCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type WorkforceTaskCreateWithoutTeamInput = {
    id?: string
    title: string
    description?: string | null
    priority?: $Enums.WorkforceTaskPriority
    status?: $Enums.WorkforceTaskStatus
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    department?: WorkforceDepartmentCreateNestedOneWithoutTasksInput
    assignee?: WorkforceProfileCreateNestedOneWithoutAssignedTasksInput
    creator?: WorkforceProfileCreateNestedOneWithoutCreatedTasksInput
  }

  export type WorkforceTaskUncheckedCreateWithoutTeamInput = {
    id?: string
    title: string
    description?: string | null
    priority?: $Enums.WorkforceTaskPriority
    status?: $Enums.WorkforceTaskStatus
    departmentId?: string | null
    assigneeId?: string | null
    createdById?: string | null
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkforceTaskCreateOrConnectWithoutTeamInput = {
    where: WorkforceTaskWhereUniqueInput
    create: XOR<WorkforceTaskCreateWithoutTeamInput, WorkforceTaskUncheckedCreateWithoutTeamInput>
  }

  export type WorkforceTaskCreateManyTeamInputEnvelope = {
    data: WorkforceTaskCreateManyTeamInput | WorkforceTaskCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type WorkforceInvitationCreateWithoutTeamInput = {
    id?: string
    email: string
    role: string
    token: string
    expiresAt?: Date | string | null
    acceptedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invitedBy: WorkforceProfileCreateNestedOneWithoutSentInvitationsInput
  }

  export type WorkforceInvitationUncheckedCreateWithoutTeamInput = {
    id?: string
    email: string
    role: string
    token: string
    expiresAt?: Date | string | null
    invitedById: string
    acceptedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkforceInvitationCreateOrConnectWithoutTeamInput = {
    where: WorkforceInvitationWhereUniqueInput
    create: XOR<WorkforceInvitationCreateWithoutTeamInput, WorkforceInvitationUncheckedCreateWithoutTeamInput>
  }

  export type WorkforceInvitationCreateManyTeamInputEnvelope = {
    data: WorkforceInvitationCreateManyTeamInput | WorkforceInvitationCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type WorkforceNotificationCreateWithoutTeamInput = {
    id?: string
    type: string
    title: string
    message: string
    data?: NullableJsonNullValueInput | InputJsonValue
    read?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: WorkforceProfileCreateNestedOneWithoutNotificationsInput
  }

  export type WorkforceNotificationUncheckedCreateWithoutTeamInput = {
    id?: string
    userId: string
    type: string
    title: string
    message: string
    data?: NullableJsonNullValueInput | InputJsonValue
    read?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkforceNotificationCreateOrConnectWithoutTeamInput = {
    where: WorkforceNotificationWhereUniqueInput
    create: XOR<WorkforceNotificationCreateWithoutTeamInput, WorkforceNotificationUncheckedCreateWithoutTeamInput>
  }

  export type WorkforceNotificationCreateManyTeamInputEnvelope = {
    data: WorkforceNotificationCreateManyTeamInput | WorkforceNotificationCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type WorkforceCustomRoleCreateWithoutTeamInput = {
    id?: string
    name: string
    label: string
    permissions?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkforceCustomRoleUncheckedCreateWithoutTeamInput = {
    id?: string
    name: string
    label: string
    permissions?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkforceCustomRoleCreateOrConnectWithoutTeamInput = {
    where: WorkforceCustomRoleWhereUniqueInput
    create: XOR<WorkforceCustomRoleCreateWithoutTeamInput, WorkforceCustomRoleUncheckedCreateWithoutTeamInput>
  }

  export type WorkforceCustomRoleCreateManyTeamInputEnvelope = {
    data: WorkforceCustomRoleCreateManyTeamInput | WorkforceCustomRoleCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type WorkforceUserUpsertWithoutOwnedTeamsInput = {
    update: XOR<WorkforceUserUpdateWithoutOwnedTeamsInput, WorkforceUserUncheckedUpdateWithoutOwnedTeamsInput>
    create: XOR<WorkforceUserCreateWithoutOwnedTeamsInput, WorkforceUserUncheckedCreateWithoutOwnedTeamsInput>
    where?: WorkforceUserWhereInput
  }

  export type WorkforceUserUpdateToOneWithWhereWithoutOwnedTeamsInput = {
    where?: WorkforceUserWhereInput
    data: XOR<WorkforceUserUpdateWithoutOwnedTeamsInput, WorkforceUserUncheckedUpdateWithoutOwnedTeamsInput>
  }

  export type WorkforceUserUpdateWithoutOwnedTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: WorkforceProfileUpdateOneWithoutUserNestedInput
    memberships?: WorkforceTeamMemberUpdateManyWithoutUserNestedInput
  }

  export type WorkforceUserUncheckedUpdateWithoutOwnedTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    profileId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: WorkforceTeamMemberUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WorkforceTeamMemberUpsertWithWhereUniqueWithoutTeamInput = {
    where: WorkforceTeamMemberWhereUniqueInput
    update: XOR<WorkforceTeamMemberUpdateWithoutTeamInput, WorkforceTeamMemberUncheckedUpdateWithoutTeamInput>
    create: XOR<WorkforceTeamMemberCreateWithoutTeamInput, WorkforceTeamMemberUncheckedCreateWithoutTeamInput>
  }

  export type WorkforceTeamMemberUpdateWithWhereUniqueWithoutTeamInput = {
    where: WorkforceTeamMemberWhereUniqueInput
    data: XOR<WorkforceTeamMemberUpdateWithoutTeamInput, WorkforceTeamMemberUncheckedUpdateWithoutTeamInput>
  }

  export type WorkforceTeamMemberUpdateManyWithWhereWithoutTeamInput = {
    where: WorkforceTeamMemberScalarWhereInput
    data: XOR<WorkforceTeamMemberUpdateManyMutationInput, WorkforceTeamMemberUncheckedUpdateManyWithoutTeamInput>
  }

  export type WorkforceProfileUpsertWithWhereUniqueWithoutTeamInput = {
    where: WorkforceProfileWhereUniqueInput
    update: XOR<WorkforceProfileUpdateWithoutTeamInput, WorkforceProfileUncheckedUpdateWithoutTeamInput>
    create: XOR<WorkforceProfileCreateWithoutTeamInput, WorkforceProfileUncheckedCreateWithoutTeamInput>
  }

  export type WorkforceProfileUpdateWithWhereUniqueWithoutTeamInput = {
    where: WorkforceProfileWhereUniqueInput
    data: XOR<WorkforceProfileUpdateWithoutTeamInput, WorkforceProfileUncheckedUpdateWithoutTeamInput>
  }

  export type WorkforceProfileUpdateManyWithWhereWithoutTeamInput = {
    where: WorkforceProfileScalarWhereInput
    data: XOR<WorkforceProfileUpdateManyMutationInput, WorkforceProfileUncheckedUpdateManyWithoutTeamInput>
  }

  export type WorkforceProfileScalarWhereInput = {
    AND?: WorkforceProfileScalarWhereInput | WorkforceProfileScalarWhereInput[]
    OR?: WorkforceProfileScalarWhereInput[]
    NOT?: WorkforceProfileScalarWhereInput | WorkforceProfileScalarWhereInput[]
    id?: StringFilter<"WorkforceProfile"> | string
    email?: StringFilter<"WorkforceProfile"> | string
    firstName?: StringNullableFilter<"WorkforceProfile"> | string | null
    lastName?: StringNullableFilter<"WorkforceProfile"> | string | null
    role?: StringFilter<"WorkforceProfile"> | string
    teamId?: StringNullableFilter<"WorkforceProfile"> | string | null
    createdAt?: DateTimeFilter<"WorkforceProfile"> | Date | string
    updatedAt?: DateTimeFilter<"WorkforceProfile"> | Date | string
  }

  export type WorkforceDepartmentUpsertWithWhereUniqueWithoutTeamInput = {
    where: WorkforceDepartmentWhereUniqueInput
    update: XOR<WorkforceDepartmentUpdateWithoutTeamInput, WorkforceDepartmentUncheckedUpdateWithoutTeamInput>
    create: XOR<WorkforceDepartmentCreateWithoutTeamInput, WorkforceDepartmentUncheckedCreateWithoutTeamInput>
  }

  export type WorkforceDepartmentUpdateWithWhereUniqueWithoutTeamInput = {
    where: WorkforceDepartmentWhereUniqueInput
    data: XOR<WorkforceDepartmentUpdateWithoutTeamInput, WorkforceDepartmentUncheckedUpdateWithoutTeamInput>
  }

  export type WorkforceDepartmentUpdateManyWithWhereWithoutTeamInput = {
    where: WorkforceDepartmentScalarWhereInput
    data: XOR<WorkforceDepartmentUpdateManyMutationInput, WorkforceDepartmentUncheckedUpdateManyWithoutTeamInput>
  }

  export type WorkforceDepartmentScalarWhereInput = {
    AND?: WorkforceDepartmentScalarWhereInput | WorkforceDepartmentScalarWhereInput[]
    OR?: WorkforceDepartmentScalarWhereInput[]
    NOT?: WorkforceDepartmentScalarWhereInput | WorkforceDepartmentScalarWhereInput[]
    id?: StringFilter<"WorkforceDepartment"> | string
    teamId?: StringFilter<"WorkforceDepartment"> | string
    name?: StringFilter<"WorkforceDepartment"> | string
    icon?: StringNullableFilter<"WorkforceDepartment"> | string | null
    managerId?: StringNullableFilter<"WorkforceDepartment"> | string | null
    createdAt?: DateTimeFilter<"WorkforceDepartment"> | Date | string
    updatedAt?: DateTimeFilter<"WorkforceDepartment"> | Date | string
  }

  export type WorkforceEmployeeUpsertWithWhereUniqueWithoutTeamInput = {
    where: WorkforceEmployeeWhereUniqueInput
    update: XOR<WorkforceEmployeeUpdateWithoutTeamInput, WorkforceEmployeeUncheckedUpdateWithoutTeamInput>
    create: XOR<WorkforceEmployeeCreateWithoutTeamInput, WorkforceEmployeeUncheckedCreateWithoutTeamInput>
  }

  export type WorkforceEmployeeUpdateWithWhereUniqueWithoutTeamInput = {
    where: WorkforceEmployeeWhereUniqueInput
    data: XOR<WorkforceEmployeeUpdateWithoutTeamInput, WorkforceEmployeeUncheckedUpdateWithoutTeamInput>
  }

  export type WorkforceEmployeeUpdateManyWithWhereWithoutTeamInput = {
    where: WorkforceEmployeeScalarWhereInput
    data: XOR<WorkforceEmployeeUpdateManyMutationInput, WorkforceEmployeeUncheckedUpdateManyWithoutTeamInput>
  }

  export type WorkforceEmployeeScalarWhereInput = {
    AND?: WorkforceEmployeeScalarWhereInput | WorkforceEmployeeScalarWhereInput[]
    OR?: WorkforceEmployeeScalarWhereInput[]
    NOT?: WorkforceEmployeeScalarWhereInput | WorkforceEmployeeScalarWhereInput[]
    id?: StringFilter<"WorkforceEmployee"> | string
    teamId?: StringFilter<"WorkforceEmployee"> | string
    profileId?: StringFilter<"WorkforceEmployee"> | string
    departmentId?: StringNullableFilter<"WorkforceEmployee"> | string | null
    position?: StringNullableFilter<"WorkforceEmployee"> | string | null
    joinDate?: DateTimeNullableFilter<"WorkforceEmployee"> | Date | string | null
    salary?: DecimalNullableFilter<"WorkforceEmployee"> | Decimal | DecimalJsLike | number | string | null
    status?: EnumWorkforceEmployeeStatusFilter<"WorkforceEmployee"> | $Enums.WorkforceEmployeeStatus
    managerId?: StringNullableFilter<"WorkforceEmployee"> | string | null
    createdAt?: DateTimeFilter<"WorkforceEmployee"> | Date | string
    updatedAt?: DateTimeFilter<"WorkforceEmployee"> | Date | string
  }

  export type WorkforceTaskUpsertWithWhereUniqueWithoutTeamInput = {
    where: WorkforceTaskWhereUniqueInput
    update: XOR<WorkforceTaskUpdateWithoutTeamInput, WorkforceTaskUncheckedUpdateWithoutTeamInput>
    create: XOR<WorkforceTaskCreateWithoutTeamInput, WorkforceTaskUncheckedCreateWithoutTeamInput>
  }

  export type WorkforceTaskUpdateWithWhereUniqueWithoutTeamInput = {
    where: WorkforceTaskWhereUniqueInput
    data: XOR<WorkforceTaskUpdateWithoutTeamInput, WorkforceTaskUncheckedUpdateWithoutTeamInput>
  }

  export type WorkforceTaskUpdateManyWithWhereWithoutTeamInput = {
    where: WorkforceTaskScalarWhereInput
    data: XOR<WorkforceTaskUpdateManyMutationInput, WorkforceTaskUncheckedUpdateManyWithoutTeamInput>
  }

  export type WorkforceTaskScalarWhereInput = {
    AND?: WorkforceTaskScalarWhereInput | WorkforceTaskScalarWhereInput[]
    OR?: WorkforceTaskScalarWhereInput[]
    NOT?: WorkforceTaskScalarWhereInput | WorkforceTaskScalarWhereInput[]
    id?: StringFilter<"WorkforceTask"> | string
    teamId?: StringFilter<"WorkforceTask"> | string
    title?: StringFilter<"WorkforceTask"> | string
    description?: StringNullableFilter<"WorkforceTask"> | string | null
    priority?: EnumWorkforceTaskPriorityFilter<"WorkforceTask"> | $Enums.WorkforceTaskPriority
    status?: EnumWorkforceTaskStatusFilter<"WorkforceTask"> | $Enums.WorkforceTaskStatus
    departmentId?: StringNullableFilter<"WorkforceTask"> | string | null
    assigneeId?: StringNullableFilter<"WorkforceTask"> | string | null
    createdById?: StringNullableFilter<"WorkforceTask"> | string | null
    dueDate?: DateTimeNullableFilter<"WorkforceTask"> | Date | string | null
    createdAt?: DateTimeFilter<"WorkforceTask"> | Date | string
    updatedAt?: DateTimeFilter<"WorkforceTask"> | Date | string
  }

  export type WorkforceInvitationUpsertWithWhereUniqueWithoutTeamInput = {
    where: WorkforceInvitationWhereUniqueInput
    update: XOR<WorkforceInvitationUpdateWithoutTeamInput, WorkforceInvitationUncheckedUpdateWithoutTeamInput>
    create: XOR<WorkforceInvitationCreateWithoutTeamInput, WorkforceInvitationUncheckedCreateWithoutTeamInput>
  }

  export type WorkforceInvitationUpdateWithWhereUniqueWithoutTeamInput = {
    where: WorkforceInvitationWhereUniqueInput
    data: XOR<WorkforceInvitationUpdateWithoutTeamInput, WorkforceInvitationUncheckedUpdateWithoutTeamInput>
  }

  export type WorkforceInvitationUpdateManyWithWhereWithoutTeamInput = {
    where: WorkforceInvitationScalarWhereInput
    data: XOR<WorkforceInvitationUpdateManyMutationInput, WorkforceInvitationUncheckedUpdateManyWithoutTeamInput>
  }

  export type WorkforceInvitationScalarWhereInput = {
    AND?: WorkforceInvitationScalarWhereInput | WorkforceInvitationScalarWhereInput[]
    OR?: WorkforceInvitationScalarWhereInput[]
    NOT?: WorkforceInvitationScalarWhereInput | WorkforceInvitationScalarWhereInput[]
    id?: StringFilter<"WorkforceInvitation"> | string
    teamId?: StringFilter<"WorkforceInvitation"> | string
    email?: StringFilter<"WorkforceInvitation"> | string
    role?: StringFilter<"WorkforceInvitation"> | string
    token?: StringFilter<"WorkforceInvitation"> | string
    expiresAt?: DateTimeNullableFilter<"WorkforceInvitation"> | Date | string | null
    invitedById?: StringFilter<"WorkforceInvitation"> | string
    acceptedAt?: DateTimeNullableFilter<"WorkforceInvitation"> | Date | string | null
    createdAt?: DateTimeFilter<"WorkforceInvitation"> | Date | string
    updatedAt?: DateTimeFilter<"WorkforceInvitation"> | Date | string
  }

  export type WorkforceNotificationUpsertWithWhereUniqueWithoutTeamInput = {
    where: WorkforceNotificationWhereUniqueInput
    update: XOR<WorkforceNotificationUpdateWithoutTeamInput, WorkforceNotificationUncheckedUpdateWithoutTeamInput>
    create: XOR<WorkforceNotificationCreateWithoutTeamInput, WorkforceNotificationUncheckedCreateWithoutTeamInput>
  }

  export type WorkforceNotificationUpdateWithWhereUniqueWithoutTeamInput = {
    where: WorkforceNotificationWhereUniqueInput
    data: XOR<WorkforceNotificationUpdateWithoutTeamInput, WorkforceNotificationUncheckedUpdateWithoutTeamInput>
  }

  export type WorkforceNotificationUpdateManyWithWhereWithoutTeamInput = {
    where: WorkforceNotificationScalarWhereInput
    data: XOR<WorkforceNotificationUpdateManyMutationInput, WorkforceNotificationUncheckedUpdateManyWithoutTeamInput>
  }

  export type WorkforceNotificationScalarWhereInput = {
    AND?: WorkforceNotificationScalarWhereInput | WorkforceNotificationScalarWhereInput[]
    OR?: WorkforceNotificationScalarWhereInput[]
    NOT?: WorkforceNotificationScalarWhereInput | WorkforceNotificationScalarWhereInput[]
    id?: StringFilter<"WorkforceNotification"> | string
    userId?: StringFilter<"WorkforceNotification"> | string
    type?: StringFilter<"WorkforceNotification"> | string
    title?: StringFilter<"WorkforceNotification"> | string
    message?: StringFilter<"WorkforceNotification"> | string
    data?: JsonNullableFilter<"WorkforceNotification">
    read?: BoolFilter<"WorkforceNotification"> | boolean
    teamId?: StringNullableFilter<"WorkforceNotification"> | string | null
    createdAt?: DateTimeFilter<"WorkforceNotification"> | Date | string
    updatedAt?: DateTimeFilter<"WorkforceNotification"> | Date | string
  }

  export type WorkforceCustomRoleUpsertWithWhereUniqueWithoutTeamInput = {
    where: WorkforceCustomRoleWhereUniqueInput
    update: XOR<WorkforceCustomRoleUpdateWithoutTeamInput, WorkforceCustomRoleUncheckedUpdateWithoutTeamInput>
    create: XOR<WorkforceCustomRoleCreateWithoutTeamInput, WorkforceCustomRoleUncheckedCreateWithoutTeamInput>
  }

  export type WorkforceCustomRoleUpdateWithWhereUniqueWithoutTeamInput = {
    where: WorkforceCustomRoleWhereUniqueInput
    data: XOR<WorkforceCustomRoleUpdateWithoutTeamInput, WorkforceCustomRoleUncheckedUpdateWithoutTeamInput>
  }

  export type WorkforceCustomRoleUpdateManyWithWhereWithoutTeamInput = {
    where: WorkforceCustomRoleScalarWhereInput
    data: XOR<WorkforceCustomRoleUpdateManyMutationInput, WorkforceCustomRoleUncheckedUpdateManyWithoutTeamInput>
  }

  export type WorkforceCustomRoleScalarWhereInput = {
    AND?: WorkforceCustomRoleScalarWhereInput | WorkforceCustomRoleScalarWhereInput[]
    OR?: WorkforceCustomRoleScalarWhereInput[]
    NOT?: WorkforceCustomRoleScalarWhereInput | WorkforceCustomRoleScalarWhereInput[]
    id?: StringFilter<"WorkforceCustomRole"> | string
    teamId?: StringFilter<"WorkforceCustomRole"> | string
    name?: StringFilter<"WorkforceCustomRole"> | string
    label?: StringFilter<"WorkforceCustomRole"> | string
    permissions?: JsonFilter<"WorkforceCustomRole">
    createdAt?: DateTimeFilter<"WorkforceCustomRole"> | Date | string
    updatedAt?: DateTimeFilter<"WorkforceCustomRole"> | Date | string
  }

  export type WorkforceUserCreateWithoutProfileInput = {
    id?: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    memberships?: WorkforceTeamMemberCreateNestedManyWithoutUserInput
    ownedTeams?: WorkforceTeamCreateNestedManyWithoutOwnerInput
  }

  export type WorkforceUserUncheckedCreateWithoutProfileInput = {
    id?: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    memberships?: WorkforceTeamMemberUncheckedCreateNestedManyWithoutUserInput
    ownedTeams?: WorkforceTeamUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type WorkforceUserCreateOrConnectWithoutProfileInput = {
    where: WorkforceUserWhereUniqueInput
    create: XOR<WorkforceUserCreateWithoutProfileInput, WorkforceUserUncheckedCreateWithoutProfileInput>
  }

  export type WorkforceTeamCreateWithoutProfilesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: WorkforceUserCreateNestedOneWithoutOwnedTeamsInput
    members?: WorkforceTeamMemberCreateNestedManyWithoutTeamInput
    departments?: WorkforceDepartmentCreateNestedManyWithoutTeamInput
    employees?: WorkforceEmployeeCreateNestedManyWithoutTeamInput
    tasks?: WorkforceTaskCreateNestedManyWithoutTeamInput
    invitations?: WorkforceInvitationCreateNestedManyWithoutTeamInput
    notifications?: WorkforceNotificationCreateNestedManyWithoutTeamInput
    roles?: WorkforceCustomRoleCreateNestedManyWithoutTeamInput
  }

  export type WorkforceTeamUncheckedCreateWithoutProfilesInput = {
    id?: string
    name: string
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: WorkforceTeamMemberUncheckedCreateNestedManyWithoutTeamInput
    departments?: WorkforceDepartmentUncheckedCreateNestedManyWithoutTeamInput
    employees?: WorkforceEmployeeUncheckedCreateNestedManyWithoutTeamInput
    tasks?: WorkforceTaskUncheckedCreateNestedManyWithoutTeamInput
    invitations?: WorkforceInvitationUncheckedCreateNestedManyWithoutTeamInput
    notifications?: WorkforceNotificationUncheckedCreateNestedManyWithoutTeamInput
    roles?: WorkforceCustomRoleUncheckedCreateNestedManyWithoutTeamInput
  }

  export type WorkforceTeamCreateOrConnectWithoutProfilesInput = {
    where: WorkforceTeamWhereUniqueInput
    create: XOR<WorkforceTeamCreateWithoutProfilesInput, WorkforceTeamUncheckedCreateWithoutProfilesInput>
  }

  export type WorkforceEmployeeCreateWithoutProfileInput = {
    id?: string
    position?: string | null
    joinDate?: Date | string | null
    salary?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.WorkforceEmployeeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    team: WorkforceTeamCreateNestedOneWithoutEmployeesInput
    department?: WorkforceDepartmentCreateNestedOneWithoutEmployeesInput
    manager?: WorkforceProfileCreateNestedOneWithoutManagedEmployeesInput
  }

  export type WorkforceEmployeeUncheckedCreateWithoutProfileInput = {
    id?: string
    teamId: string
    departmentId?: string | null
    position?: string | null
    joinDate?: Date | string | null
    salary?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.WorkforceEmployeeStatus
    managerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkforceEmployeeCreateOrConnectWithoutProfileInput = {
    where: WorkforceEmployeeWhereUniqueInput
    create: XOR<WorkforceEmployeeCreateWithoutProfileInput, WorkforceEmployeeUncheckedCreateWithoutProfileInput>
  }

  export type WorkforceEmployeeCreateManyProfileInputEnvelope = {
    data: WorkforceEmployeeCreateManyProfileInput | WorkforceEmployeeCreateManyProfileInput[]
    skipDuplicates?: boolean
  }

  export type WorkforceTaskCreateWithoutAssigneeInput = {
    id?: string
    title: string
    description?: string | null
    priority?: $Enums.WorkforceTaskPriority
    status?: $Enums.WorkforceTaskStatus
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    team: WorkforceTeamCreateNestedOneWithoutTasksInput
    department?: WorkforceDepartmentCreateNestedOneWithoutTasksInput
    creator?: WorkforceProfileCreateNestedOneWithoutCreatedTasksInput
  }

  export type WorkforceTaskUncheckedCreateWithoutAssigneeInput = {
    id?: string
    teamId: string
    title: string
    description?: string | null
    priority?: $Enums.WorkforceTaskPriority
    status?: $Enums.WorkforceTaskStatus
    departmentId?: string | null
    createdById?: string | null
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkforceTaskCreateOrConnectWithoutAssigneeInput = {
    where: WorkforceTaskWhereUniqueInput
    create: XOR<WorkforceTaskCreateWithoutAssigneeInput, WorkforceTaskUncheckedCreateWithoutAssigneeInput>
  }

  export type WorkforceTaskCreateManyAssigneeInputEnvelope = {
    data: WorkforceTaskCreateManyAssigneeInput | WorkforceTaskCreateManyAssigneeInput[]
    skipDuplicates?: boolean
  }

  export type WorkforceTaskCreateWithoutCreatorInput = {
    id?: string
    title: string
    description?: string | null
    priority?: $Enums.WorkforceTaskPriority
    status?: $Enums.WorkforceTaskStatus
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    team: WorkforceTeamCreateNestedOneWithoutTasksInput
    department?: WorkforceDepartmentCreateNestedOneWithoutTasksInput
    assignee?: WorkforceProfileCreateNestedOneWithoutAssignedTasksInput
  }

  export type WorkforceTaskUncheckedCreateWithoutCreatorInput = {
    id?: string
    teamId: string
    title: string
    description?: string | null
    priority?: $Enums.WorkforceTaskPriority
    status?: $Enums.WorkforceTaskStatus
    departmentId?: string | null
    assigneeId?: string | null
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkforceTaskCreateOrConnectWithoutCreatorInput = {
    where: WorkforceTaskWhereUniqueInput
    create: XOR<WorkforceTaskCreateWithoutCreatorInput, WorkforceTaskUncheckedCreateWithoutCreatorInput>
  }

  export type WorkforceTaskCreateManyCreatorInputEnvelope = {
    data: WorkforceTaskCreateManyCreatorInput | WorkforceTaskCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type WorkforceNotificationCreateWithoutUserInput = {
    id?: string
    type: string
    title: string
    message: string
    data?: NullableJsonNullValueInput | InputJsonValue
    read?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    team?: WorkforceTeamCreateNestedOneWithoutNotificationsInput
  }

  export type WorkforceNotificationUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    title: string
    message: string
    data?: NullableJsonNullValueInput | InputJsonValue
    read?: boolean
    teamId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkforceNotificationCreateOrConnectWithoutUserInput = {
    where: WorkforceNotificationWhereUniqueInput
    create: XOR<WorkforceNotificationCreateWithoutUserInput, WorkforceNotificationUncheckedCreateWithoutUserInput>
  }

  export type WorkforceNotificationCreateManyUserInputEnvelope = {
    data: WorkforceNotificationCreateManyUserInput | WorkforceNotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WorkforceDepartmentCreateWithoutManagerInput = {
    id?: string
    name: string
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    team: WorkforceTeamCreateNestedOneWithoutDepartmentsInput
    employees?: WorkforceEmployeeCreateNestedManyWithoutDepartmentInput
    tasks?: WorkforceTaskCreateNestedManyWithoutDepartmentInput
  }

  export type WorkforceDepartmentUncheckedCreateWithoutManagerInput = {
    id?: string
    teamId: string
    name: string
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employees?: WorkforceEmployeeUncheckedCreateNestedManyWithoutDepartmentInput
    tasks?: WorkforceTaskUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type WorkforceDepartmentCreateOrConnectWithoutManagerInput = {
    where: WorkforceDepartmentWhereUniqueInput
    create: XOR<WorkforceDepartmentCreateWithoutManagerInput, WorkforceDepartmentUncheckedCreateWithoutManagerInput>
  }

  export type WorkforceDepartmentCreateManyManagerInputEnvelope = {
    data: WorkforceDepartmentCreateManyManagerInput | WorkforceDepartmentCreateManyManagerInput[]
    skipDuplicates?: boolean
  }

  export type WorkforceEmployeeCreateWithoutManagerInput = {
    id?: string
    position?: string | null
    joinDate?: Date | string | null
    salary?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.WorkforceEmployeeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    team: WorkforceTeamCreateNestedOneWithoutEmployeesInput
    profile: WorkforceProfileCreateNestedOneWithoutEmployeesInput
    department?: WorkforceDepartmentCreateNestedOneWithoutEmployeesInput
  }

  export type WorkforceEmployeeUncheckedCreateWithoutManagerInput = {
    id?: string
    teamId: string
    profileId: string
    departmentId?: string | null
    position?: string | null
    joinDate?: Date | string | null
    salary?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.WorkforceEmployeeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkforceEmployeeCreateOrConnectWithoutManagerInput = {
    where: WorkforceEmployeeWhereUniqueInput
    create: XOR<WorkforceEmployeeCreateWithoutManagerInput, WorkforceEmployeeUncheckedCreateWithoutManagerInput>
  }

  export type WorkforceEmployeeCreateManyManagerInputEnvelope = {
    data: WorkforceEmployeeCreateManyManagerInput | WorkforceEmployeeCreateManyManagerInput[]
    skipDuplicates?: boolean
  }

  export type WorkforceInvitationCreateWithoutInvitedByInput = {
    id?: string
    email: string
    role: string
    token: string
    expiresAt?: Date | string | null
    acceptedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    team: WorkforceTeamCreateNestedOneWithoutInvitationsInput
  }

  export type WorkforceInvitationUncheckedCreateWithoutInvitedByInput = {
    id?: string
    teamId: string
    email: string
    role: string
    token: string
    expiresAt?: Date | string | null
    acceptedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkforceInvitationCreateOrConnectWithoutInvitedByInput = {
    where: WorkforceInvitationWhereUniqueInput
    create: XOR<WorkforceInvitationCreateWithoutInvitedByInput, WorkforceInvitationUncheckedCreateWithoutInvitedByInput>
  }

  export type WorkforceInvitationCreateManyInvitedByInputEnvelope = {
    data: WorkforceInvitationCreateManyInvitedByInput | WorkforceInvitationCreateManyInvitedByInput[]
    skipDuplicates?: boolean
  }

  export type WorkforceUserUpsertWithoutProfileInput = {
    update: XOR<WorkforceUserUpdateWithoutProfileInput, WorkforceUserUncheckedUpdateWithoutProfileInput>
    create: XOR<WorkforceUserCreateWithoutProfileInput, WorkforceUserUncheckedCreateWithoutProfileInput>
    where?: WorkforceUserWhereInput
  }

  export type WorkforceUserUpdateToOneWithWhereWithoutProfileInput = {
    where?: WorkforceUserWhereInput
    data: XOR<WorkforceUserUpdateWithoutProfileInput, WorkforceUserUncheckedUpdateWithoutProfileInput>
  }

  export type WorkforceUserUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: WorkforceTeamMemberUpdateManyWithoutUserNestedInput
    ownedTeams?: WorkforceTeamUpdateManyWithoutOwnerNestedInput
  }

  export type WorkforceUserUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: WorkforceTeamMemberUncheckedUpdateManyWithoutUserNestedInput
    ownedTeams?: WorkforceTeamUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type WorkforceTeamUpsertWithoutProfilesInput = {
    update: XOR<WorkforceTeamUpdateWithoutProfilesInput, WorkforceTeamUncheckedUpdateWithoutProfilesInput>
    create: XOR<WorkforceTeamCreateWithoutProfilesInput, WorkforceTeamUncheckedCreateWithoutProfilesInput>
    where?: WorkforceTeamWhereInput
  }

  export type WorkforceTeamUpdateToOneWithWhereWithoutProfilesInput = {
    where?: WorkforceTeamWhereInput
    data: XOR<WorkforceTeamUpdateWithoutProfilesInput, WorkforceTeamUncheckedUpdateWithoutProfilesInput>
  }

  export type WorkforceTeamUpdateWithoutProfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: WorkforceUserUpdateOneRequiredWithoutOwnedTeamsNestedInput
    members?: WorkforceTeamMemberUpdateManyWithoutTeamNestedInput
    departments?: WorkforceDepartmentUpdateManyWithoutTeamNestedInput
    employees?: WorkforceEmployeeUpdateManyWithoutTeamNestedInput
    tasks?: WorkforceTaskUpdateManyWithoutTeamNestedInput
    invitations?: WorkforceInvitationUpdateManyWithoutTeamNestedInput
    notifications?: WorkforceNotificationUpdateManyWithoutTeamNestedInput
    roles?: WorkforceCustomRoleUpdateManyWithoutTeamNestedInput
  }

  export type WorkforceTeamUncheckedUpdateWithoutProfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: WorkforceTeamMemberUncheckedUpdateManyWithoutTeamNestedInput
    departments?: WorkforceDepartmentUncheckedUpdateManyWithoutTeamNestedInput
    employees?: WorkforceEmployeeUncheckedUpdateManyWithoutTeamNestedInput
    tasks?: WorkforceTaskUncheckedUpdateManyWithoutTeamNestedInput
    invitations?: WorkforceInvitationUncheckedUpdateManyWithoutTeamNestedInput
    notifications?: WorkforceNotificationUncheckedUpdateManyWithoutTeamNestedInput
    roles?: WorkforceCustomRoleUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type WorkforceEmployeeUpsertWithWhereUniqueWithoutProfileInput = {
    where: WorkforceEmployeeWhereUniqueInput
    update: XOR<WorkforceEmployeeUpdateWithoutProfileInput, WorkforceEmployeeUncheckedUpdateWithoutProfileInput>
    create: XOR<WorkforceEmployeeCreateWithoutProfileInput, WorkforceEmployeeUncheckedCreateWithoutProfileInput>
  }

  export type WorkforceEmployeeUpdateWithWhereUniqueWithoutProfileInput = {
    where: WorkforceEmployeeWhereUniqueInput
    data: XOR<WorkforceEmployeeUpdateWithoutProfileInput, WorkforceEmployeeUncheckedUpdateWithoutProfileInput>
  }

  export type WorkforceEmployeeUpdateManyWithWhereWithoutProfileInput = {
    where: WorkforceEmployeeScalarWhereInput
    data: XOR<WorkforceEmployeeUpdateManyMutationInput, WorkforceEmployeeUncheckedUpdateManyWithoutProfileInput>
  }

  export type WorkforceTaskUpsertWithWhereUniqueWithoutAssigneeInput = {
    where: WorkforceTaskWhereUniqueInput
    update: XOR<WorkforceTaskUpdateWithoutAssigneeInput, WorkforceTaskUncheckedUpdateWithoutAssigneeInput>
    create: XOR<WorkforceTaskCreateWithoutAssigneeInput, WorkforceTaskUncheckedCreateWithoutAssigneeInput>
  }

  export type WorkforceTaskUpdateWithWhereUniqueWithoutAssigneeInput = {
    where: WorkforceTaskWhereUniqueInput
    data: XOR<WorkforceTaskUpdateWithoutAssigneeInput, WorkforceTaskUncheckedUpdateWithoutAssigneeInput>
  }

  export type WorkforceTaskUpdateManyWithWhereWithoutAssigneeInput = {
    where: WorkforceTaskScalarWhereInput
    data: XOR<WorkforceTaskUpdateManyMutationInput, WorkforceTaskUncheckedUpdateManyWithoutAssigneeInput>
  }

  export type WorkforceTaskUpsertWithWhereUniqueWithoutCreatorInput = {
    where: WorkforceTaskWhereUniqueInput
    update: XOR<WorkforceTaskUpdateWithoutCreatorInput, WorkforceTaskUncheckedUpdateWithoutCreatorInput>
    create: XOR<WorkforceTaskCreateWithoutCreatorInput, WorkforceTaskUncheckedCreateWithoutCreatorInput>
  }

  export type WorkforceTaskUpdateWithWhereUniqueWithoutCreatorInput = {
    where: WorkforceTaskWhereUniqueInput
    data: XOR<WorkforceTaskUpdateWithoutCreatorInput, WorkforceTaskUncheckedUpdateWithoutCreatorInput>
  }

  export type WorkforceTaskUpdateManyWithWhereWithoutCreatorInput = {
    where: WorkforceTaskScalarWhereInput
    data: XOR<WorkforceTaskUpdateManyMutationInput, WorkforceTaskUncheckedUpdateManyWithoutCreatorInput>
  }

  export type WorkforceNotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: WorkforceNotificationWhereUniqueInput
    update: XOR<WorkforceNotificationUpdateWithoutUserInput, WorkforceNotificationUncheckedUpdateWithoutUserInput>
    create: XOR<WorkforceNotificationCreateWithoutUserInput, WorkforceNotificationUncheckedCreateWithoutUserInput>
  }

  export type WorkforceNotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: WorkforceNotificationWhereUniqueInput
    data: XOR<WorkforceNotificationUpdateWithoutUserInput, WorkforceNotificationUncheckedUpdateWithoutUserInput>
  }

  export type WorkforceNotificationUpdateManyWithWhereWithoutUserInput = {
    where: WorkforceNotificationScalarWhereInput
    data: XOR<WorkforceNotificationUpdateManyMutationInput, WorkforceNotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type WorkforceDepartmentUpsertWithWhereUniqueWithoutManagerInput = {
    where: WorkforceDepartmentWhereUniqueInput
    update: XOR<WorkforceDepartmentUpdateWithoutManagerInput, WorkforceDepartmentUncheckedUpdateWithoutManagerInput>
    create: XOR<WorkforceDepartmentCreateWithoutManagerInput, WorkforceDepartmentUncheckedCreateWithoutManagerInput>
  }

  export type WorkforceDepartmentUpdateWithWhereUniqueWithoutManagerInput = {
    where: WorkforceDepartmentWhereUniqueInput
    data: XOR<WorkforceDepartmentUpdateWithoutManagerInput, WorkforceDepartmentUncheckedUpdateWithoutManagerInput>
  }

  export type WorkforceDepartmentUpdateManyWithWhereWithoutManagerInput = {
    where: WorkforceDepartmentScalarWhereInput
    data: XOR<WorkforceDepartmentUpdateManyMutationInput, WorkforceDepartmentUncheckedUpdateManyWithoutManagerInput>
  }

  export type WorkforceEmployeeUpsertWithWhereUniqueWithoutManagerInput = {
    where: WorkforceEmployeeWhereUniqueInput
    update: XOR<WorkforceEmployeeUpdateWithoutManagerInput, WorkforceEmployeeUncheckedUpdateWithoutManagerInput>
    create: XOR<WorkforceEmployeeCreateWithoutManagerInput, WorkforceEmployeeUncheckedCreateWithoutManagerInput>
  }

  export type WorkforceEmployeeUpdateWithWhereUniqueWithoutManagerInput = {
    where: WorkforceEmployeeWhereUniqueInput
    data: XOR<WorkforceEmployeeUpdateWithoutManagerInput, WorkforceEmployeeUncheckedUpdateWithoutManagerInput>
  }

  export type WorkforceEmployeeUpdateManyWithWhereWithoutManagerInput = {
    where: WorkforceEmployeeScalarWhereInput
    data: XOR<WorkforceEmployeeUpdateManyMutationInput, WorkforceEmployeeUncheckedUpdateManyWithoutManagerInput>
  }

  export type WorkforceInvitationUpsertWithWhereUniqueWithoutInvitedByInput = {
    where: WorkforceInvitationWhereUniqueInput
    update: XOR<WorkforceInvitationUpdateWithoutInvitedByInput, WorkforceInvitationUncheckedUpdateWithoutInvitedByInput>
    create: XOR<WorkforceInvitationCreateWithoutInvitedByInput, WorkforceInvitationUncheckedCreateWithoutInvitedByInput>
  }

  export type WorkforceInvitationUpdateWithWhereUniqueWithoutInvitedByInput = {
    where: WorkforceInvitationWhereUniqueInput
    data: XOR<WorkforceInvitationUpdateWithoutInvitedByInput, WorkforceInvitationUncheckedUpdateWithoutInvitedByInput>
  }

  export type WorkforceInvitationUpdateManyWithWhereWithoutInvitedByInput = {
    where: WorkforceInvitationScalarWhereInput
    data: XOR<WorkforceInvitationUpdateManyMutationInput, WorkforceInvitationUncheckedUpdateManyWithoutInvitedByInput>
  }

  export type WorkforceUserCreateWithoutMembershipsInput = {
    id?: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    profile?: WorkforceProfileCreateNestedOneWithoutUserInput
    ownedTeams?: WorkforceTeamCreateNestedManyWithoutOwnerInput
  }

  export type WorkforceUserUncheckedCreateWithoutMembershipsInput = {
    id?: string
    email: string
    passwordHash: string
    profileId?: string | null
    createdAt?: Date | string
    ownedTeams?: WorkforceTeamUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type WorkforceUserCreateOrConnectWithoutMembershipsInput = {
    where: WorkforceUserWhereUniqueInput
    create: XOR<WorkforceUserCreateWithoutMembershipsInput, WorkforceUserUncheckedCreateWithoutMembershipsInput>
  }

  export type WorkforceTeamCreateWithoutMembersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: WorkforceUserCreateNestedOneWithoutOwnedTeamsInput
    profiles?: WorkforceProfileCreateNestedManyWithoutTeamInput
    departments?: WorkforceDepartmentCreateNestedManyWithoutTeamInput
    employees?: WorkforceEmployeeCreateNestedManyWithoutTeamInput
    tasks?: WorkforceTaskCreateNestedManyWithoutTeamInput
    invitations?: WorkforceInvitationCreateNestedManyWithoutTeamInput
    notifications?: WorkforceNotificationCreateNestedManyWithoutTeamInput
    roles?: WorkforceCustomRoleCreateNestedManyWithoutTeamInput
  }

  export type WorkforceTeamUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    profiles?: WorkforceProfileUncheckedCreateNestedManyWithoutTeamInput
    departments?: WorkforceDepartmentUncheckedCreateNestedManyWithoutTeamInput
    employees?: WorkforceEmployeeUncheckedCreateNestedManyWithoutTeamInput
    tasks?: WorkforceTaskUncheckedCreateNestedManyWithoutTeamInput
    invitations?: WorkforceInvitationUncheckedCreateNestedManyWithoutTeamInput
    notifications?: WorkforceNotificationUncheckedCreateNestedManyWithoutTeamInput
    roles?: WorkforceCustomRoleUncheckedCreateNestedManyWithoutTeamInput
  }

  export type WorkforceTeamCreateOrConnectWithoutMembersInput = {
    where: WorkforceTeamWhereUniqueInput
    create: XOR<WorkforceTeamCreateWithoutMembersInput, WorkforceTeamUncheckedCreateWithoutMembersInput>
  }

  export type WorkforceUserUpsertWithoutMembershipsInput = {
    update: XOR<WorkforceUserUpdateWithoutMembershipsInput, WorkforceUserUncheckedUpdateWithoutMembershipsInput>
    create: XOR<WorkforceUserCreateWithoutMembershipsInput, WorkforceUserUncheckedCreateWithoutMembershipsInput>
    where?: WorkforceUserWhereInput
  }

  export type WorkforceUserUpdateToOneWithWhereWithoutMembershipsInput = {
    where?: WorkforceUserWhereInput
    data: XOR<WorkforceUserUpdateWithoutMembershipsInput, WorkforceUserUncheckedUpdateWithoutMembershipsInput>
  }

  export type WorkforceUserUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: WorkforceProfileUpdateOneWithoutUserNestedInput
    ownedTeams?: WorkforceTeamUpdateManyWithoutOwnerNestedInput
  }

  export type WorkforceUserUncheckedUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    profileId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedTeams?: WorkforceTeamUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type WorkforceTeamUpsertWithoutMembersInput = {
    update: XOR<WorkforceTeamUpdateWithoutMembersInput, WorkforceTeamUncheckedUpdateWithoutMembersInput>
    create: XOR<WorkforceTeamCreateWithoutMembersInput, WorkforceTeamUncheckedCreateWithoutMembersInput>
    where?: WorkforceTeamWhereInput
  }

  export type WorkforceTeamUpdateToOneWithWhereWithoutMembersInput = {
    where?: WorkforceTeamWhereInput
    data: XOR<WorkforceTeamUpdateWithoutMembersInput, WorkforceTeamUncheckedUpdateWithoutMembersInput>
  }

  export type WorkforceTeamUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: WorkforceUserUpdateOneRequiredWithoutOwnedTeamsNestedInput
    profiles?: WorkforceProfileUpdateManyWithoutTeamNestedInput
    departments?: WorkforceDepartmentUpdateManyWithoutTeamNestedInput
    employees?: WorkforceEmployeeUpdateManyWithoutTeamNestedInput
    tasks?: WorkforceTaskUpdateManyWithoutTeamNestedInput
    invitations?: WorkforceInvitationUpdateManyWithoutTeamNestedInput
    notifications?: WorkforceNotificationUpdateManyWithoutTeamNestedInput
    roles?: WorkforceCustomRoleUpdateManyWithoutTeamNestedInput
  }

  export type WorkforceTeamUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profiles?: WorkforceProfileUncheckedUpdateManyWithoutTeamNestedInput
    departments?: WorkforceDepartmentUncheckedUpdateManyWithoutTeamNestedInput
    employees?: WorkforceEmployeeUncheckedUpdateManyWithoutTeamNestedInput
    tasks?: WorkforceTaskUncheckedUpdateManyWithoutTeamNestedInput
    invitations?: WorkforceInvitationUncheckedUpdateManyWithoutTeamNestedInput
    notifications?: WorkforceNotificationUncheckedUpdateManyWithoutTeamNestedInput
    roles?: WorkforceCustomRoleUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type WorkforceTeamCreateWithoutDepartmentsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: WorkforceUserCreateNestedOneWithoutOwnedTeamsInput
    members?: WorkforceTeamMemberCreateNestedManyWithoutTeamInput
    profiles?: WorkforceProfileCreateNestedManyWithoutTeamInput
    employees?: WorkforceEmployeeCreateNestedManyWithoutTeamInput
    tasks?: WorkforceTaskCreateNestedManyWithoutTeamInput
    invitations?: WorkforceInvitationCreateNestedManyWithoutTeamInput
    notifications?: WorkforceNotificationCreateNestedManyWithoutTeamInput
    roles?: WorkforceCustomRoleCreateNestedManyWithoutTeamInput
  }

  export type WorkforceTeamUncheckedCreateWithoutDepartmentsInput = {
    id?: string
    name: string
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: WorkforceTeamMemberUncheckedCreateNestedManyWithoutTeamInput
    profiles?: WorkforceProfileUncheckedCreateNestedManyWithoutTeamInput
    employees?: WorkforceEmployeeUncheckedCreateNestedManyWithoutTeamInput
    tasks?: WorkforceTaskUncheckedCreateNestedManyWithoutTeamInput
    invitations?: WorkforceInvitationUncheckedCreateNestedManyWithoutTeamInput
    notifications?: WorkforceNotificationUncheckedCreateNestedManyWithoutTeamInput
    roles?: WorkforceCustomRoleUncheckedCreateNestedManyWithoutTeamInput
  }

  export type WorkforceTeamCreateOrConnectWithoutDepartmentsInput = {
    where: WorkforceTeamWhereUniqueInput
    create: XOR<WorkforceTeamCreateWithoutDepartmentsInput, WorkforceTeamUncheckedCreateWithoutDepartmentsInput>
  }

  export type WorkforceProfileCreateWithoutManagedDepartmentsInput = {
    id?: string
    email: string
    firstName?: string | null
    lastName?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: WorkforceUserCreateNestedOneWithoutProfileInput
    team?: WorkforceTeamCreateNestedOneWithoutProfilesInput
    employees?: WorkforceEmployeeCreateNestedManyWithoutProfileInput
    assignedTasks?: WorkforceTaskCreateNestedManyWithoutAssigneeInput
    createdTasks?: WorkforceTaskCreateNestedManyWithoutCreatorInput
    notifications?: WorkforceNotificationCreateNestedManyWithoutUserInput
    managedEmployees?: WorkforceEmployeeCreateNestedManyWithoutManagerInput
    sentInvitations?: WorkforceInvitationCreateNestedManyWithoutInvitedByInput
  }

  export type WorkforceProfileUncheckedCreateWithoutManagedDepartmentsInput = {
    id?: string
    email: string
    firstName?: string | null
    lastName?: string | null
    role?: string
    teamId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: WorkforceUserUncheckedCreateNestedOneWithoutProfileInput
    employees?: WorkforceEmployeeUncheckedCreateNestedManyWithoutProfileInput
    assignedTasks?: WorkforceTaskUncheckedCreateNestedManyWithoutAssigneeInput
    createdTasks?: WorkforceTaskUncheckedCreateNestedManyWithoutCreatorInput
    notifications?: WorkforceNotificationUncheckedCreateNestedManyWithoutUserInput
    managedEmployees?: WorkforceEmployeeUncheckedCreateNestedManyWithoutManagerInput
    sentInvitations?: WorkforceInvitationUncheckedCreateNestedManyWithoutInvitedByInput
  }

  export type WorkforceProfileCreateOrConnectWithoutManagedDepartmentsInput = {
    where: WorkforceProfileWhereUniqueInput
    create: XOR<WorkforceProfileCreateWithoutManagedDepartmentsInput, WorkforceProfileUncheckedCreateWithoutManagedDepartmentsInput>
  }

  export type WorkforceEmployeeCreateWithoutDepartmentInput = {
    id?: string
    position?: string | null
    joinDate?: Date | string | null
    salary?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.WorkforceEmployeeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    team: WorkforceTeamCreateNestedOneWithoutEmployeesInput
    profile: WorkforceProfileCreateNestedOneWithoutEmployeesInput
    manager?: WorkforceProfileCreateNestedOneWithoutManagedEmployeesInput
  }

  export type WorkforceEmployeeUncheckedCreateWithoutDepartmentInput = {
    id?: string
    teamId: string
    profileId: string
    position?: string | null
    joinDate?: Date | string | null
    salary?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.WorkforceEmployeeStatus
    managerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkforceEmployeeCreateOrConnectWithoutDepartmentInput = {
    where: WorkforceEmployeeWhereUniqueInput
    create: XOR<WorkforceEmployeeCreateWithoutDepartmentInput, WorkforceEmployeeUncheckedCreateWithoutDepartmentInput>
  }

  export type WorkforceEmployeeCreateManyDepartmentInputEnvelope = {
    data: WorkforceEmployeeCreateManyDepartmentInput | WorkforceEmployeeCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type WorkforceTaskCreateWithoutDepartmentInput = {
    id?: string
    title: string
    description?: string | null
    priority?: $Enums.WorkforceTaskPriority
    status?: $Enums.WorkforceTaskStatus
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    team: WorkforceTeamCreateNestedOneWithoutTasksInput
    assignee?: WorkforceProfileCreateNestedOneWithoutAssignedTasksInput
    creator?: WorkforceProfileCreateNestedOneWithoutCreatedTasksInput
  }

  export type WorkforceTaskUncheckedCreateWithoutDepartmentInput = {
    id?: string
    teamId: string
    title: string
    description?: string | null
    priority?: $Enums.WorkforceTaskPriority
    status?: $Enums.WorkforceTaskStatus
    assigneeId?: string | null
    createdById?: string | null
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkforceTaskCreateOrConnectWithoutDepartmentInput = {
    where: WorkforceTaskWhereUniqueInput
    create: XOR<WorkforceTaskCreateWithoutDepartmentInput, WorkforceTaskUncheckedCreateWithoutDepartmentInput>
  }

  export type WorkforceTaskCreateManyDepartmentInputEnvelope = {
    data: WorkforceTaskCreateManyDepartmentInput | WorkforceTaskCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type WorkforceTeamUpsertWithoutDepartmentsInput = {
    update: XOR<WorkforceTeamUpdateWithoutDepartmentsInput, WorkforceTeamUncheckedUpdateWithoutDepartmentsInput>
    create: XOR<WorkforceTeamCreateWithoutDepartmentsInput, WorkforceTeamUncheckedCreateWithoutDepartmentsInput>
    where?: WorkforceTeamWhereInput
  }

  export type WorkforceTeamUpdateToOneWithWhereWithoutDepartmentsInput = {
    where?: WorkforceTeamWhereInput
    data: XOR<WorkforceTeamUpdateWithoutDepartmentsInput, WorkforceTeamUncheckedUpdateWithoutDepartmentsInput>
  }

  export type WorkforceTeamUpdateWithoutDepartmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: WorkforceUserUpdateOneRequiredWithoutOwnedTeamsNestedInput
    members?: WorkforceTeamMemberUpdateManyWithoutTeamNestedInput
    profiles?: WorkforceProfileUpdateManyWithoutTeamNestedInput
    employees?: WorkforceEmployeeUpdateManyWithoutTeamNestedInput
    tasks?: WorkforceTaskUpdateManyWithoutTeamNestedInput
    invitations?: WorkforceInvitationUpdateManyWithoutTeamNestedInput
    notifications?: WorkforceNotificationUpdateManyWithoutTeamNestedInput
    roles?: WorkforceCustomRoleUpdateManyWithoutTeamNestedInput
  }

  export type WorkforceTeamUncheckedUpdateWithoutDepartmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: WorkforceTeamMemberUncheckedUpdateManyWithoutTeamNestedInput
    profiles?: WorkforceProfileUncheckedUpdateManyWithoutTeamNestedInput
    employees?: WorkforceEmployeeUncheckedUpdateManyWithoutTeamNestedInput
    tasks?: WorkforceTaskUncheckedUpdateManyWithoutTeamNestedInput
    invitations?: WorkforceInvitationUncheckedUpdateManyWithoutTeamNestedInput
    notifications?: WorkforceNotificationUncheckedUpdateManyWithoutTeamNestedInput
    roles?: WorkforceCustomRoleUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type WorkforceProfileUpsertWithoutManagedDepartmentsInput = {
    update: XOR<WorkforceProfileUpdateWithoutManagedDepartmentsInput, WorkforceProfileUncheckedUpdateWithoutManagedDepartmentsInput>
    create: XOR<WorkforceProfileCreateWithoutManagedDepartmentsInput, WorkforceProfileUncheckedCreateWithoutManagedDepartmentsInput>
    where?: WorkforceProfileWhereInput
  }

  export type WorkforceProfileUpdateToOneWithWhereWithoutManagedDepartmentsInput = {
    where?: WorkforceProfileWhereInput
    data: XOR<WorkforceProfileUpdateWithoutManagedDepartmentsInput, WorkforceProfileUncheckedUpdateWithoutManagedDepartmentsInput>
  }

  export type WorkforceProfileUpdateWithoutManagedDepartmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: WorkforceUserUpdateOneWithoutProfileNestedInput
    team?: WorkforceTeamUpdateOneWithoutProfilesNestedInput
    employees?: WorkforceEmployeeUpdateManyWithoutProfileNestedInput
    assignedTasks?: WorkforceTaskUpdateManyWithoutAssigneeNestedInput
    createdTasks?: WorkforceTaskUpdateManyWithoutCreatorNestedInput
    notifications?: WorkforceNotificationUpdateManyWithoutUserNestedInput
    managedEmployees?: WorkforceEmployeeUpdateManyWithoutManagerNestedInput
    sentInvitations?: WorkforceInvitationUpdateManyWithoutInvitedByNestedInput
  }

  export type WorkforceProfileUncheckedUpdateWithoutManagedDepartmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: WorkforceUserUncheckedUpdateOneWithoutProfileNestedInput
    employees?: WorkforceEmployeeUncheckedUpdateManyWithoutProfileNestedInput
    assignedTasks?: WorkforceTaskUncheckedUpdateManyWithoutAssigneeNestedInput
    createdTasks?: WorkforceTaskUncheckedUpdateManyWithoutCreatorNestedInput
    notifications?: WorkforceNotificationUncheckedUpdateManyWithoutUserNestedInput
    managedEmployees?: WorkforceEmployeeUncheckedUpdateManyWithoutManagerNestedInput
    sentInvitations?: WorkforceInvitationUncheckedUpdateManyWithoutInvitedByNestedInput
  }

  export type WorkforceEmployeeUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: WorkforceEmployeeWhereUniqueInput
    update: XOR<WorkforceEmployeeUpdateWithoutDepartmentInput, WorkforceEmployeeUncheckedUpdateWithoutDepartmentInput>
    create: XOR<WorkforceEmployeeCreateWithoutDepartmentInput, WorkforceEmployeeUncheckedCreateWithoutDepartmentInput>
  }

  export type WorkforceEmployeeUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: WorkforceEmployeeWhereUniqueInput
    data: XOR<WorkforceEmployeeUpdateWithoutDepartmentInput, WorkforceEmployeeUncheckedUpdateWithoutDepartmentInput>
  }

  export type WorkforceEmployeeUpdateManyWithWhereWithoutDepartmentInput = {
    where: WorkforceEmployeeScalarWhereInput
    data: XOR<WorkforceEmployeeUpdateManyMutationInput, WorkforceEmployeeUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type WorkforceTaskUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: WorkforceTaskWhereUniqueInput
    update: XOR<WorkforceTaskUpdateWithoutDepartmentInput, WorkforceTaskUncheckedUpdateWithoutDepartmentInput>
    create: XOR<WorkforceTaskCreateWithoutDepartmentInput, WorkforceTaskUncheckedCreateWithoutDepartmentInput>
  }

  export type WorkforceTaskUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: WorkforceTaskWhereUniqueInput
    data: XOR<WorkforceTaskUpdateWithoutDepartmentInput, WorkforceTaskUncheckedUpdateWithoutDepartmentInput>
  }

  export type WorkforceTaskUpdateManyWithWhereWithoutDepartmentInput = {
    where: WorkforceTaskScalarWhereInput
    data: XOR<WorkforceTaskUpdateManyMutationInput, WorkforceTaskUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type WorkforceTeamCreateWithoutEmployeesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: WorkforceUserCreateNestedOneWithoutOwnedTeamsInput
    members?: WorkforceTeamMemberCreateNestedManyWithoutTeamInput
    profiles?: WorkforceProfileCreateNestedManyWithoutTeamInput
    departments?: WorkforceDepartmentCreateNestedManyWithoutTeamInput
    tasks?: WorkforceTaskCreateNestedManyWithoutTeamInput
    invitations?: WorkforceInvitationCreateNestedManyWithoutTeamInput
    notifications?: WorkforceNotificationCreateNestedManyWithoutTeamInput
    roles?: WorkforceCustomRoleCreateNestedManyWithoutTeamInput
  }

  export type WorkforceTeamUncheckedCreateWithoutEmployeesInput = {
    id?: string
    name: string
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: WorkforceTeamMemberUncheckedCreateNestedManyWithoutTeamInput
    profiles?: WorkforceProfileUncheckedCreateNestedManyWithoutTeamInput
    departments?: WorkforceDepartmentUncheckedCreateNestedManyWithoutTeamInput
    tasks?: WorkforceTaskUncheckedCreateNestedManyWithoutTeamInput
    invitations?: WorkforceInvitationUncheckedCreateNestedManyWithoutTeamInput
    notifications?: WorkforceNotificationUncheckedCreateNestedManyWithoutTeamInput
    roles?: WorkforceCustomRoleUncheckedCreateNestedManyWithoutTeamInput
  }

  export type WorkforceTeamCreateOrConnectWithoutEmployeesInput = {
    where: WorkforceTeamWhereUniqueInput
    create: XOR<WorkforceTeamCreateWithoutEmployeesInput, WorkforceTeamUncheckedCreateWithoutEmployeesInput>
  }

  export type WorkforceProfileCreateWithoutEmployeesInput = {
    id?: string
    email: string
    firstName?: string | null
    lastName?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: WorkforceUserCreateNestedOneWithoutProfileInput
    team?: WorkforceTeamCreateNestedOneWithoutProfilesInput
    assignedTasks?: WorkforceTaskCreateNestedManyWithoutAssigneeInput
    createdTasks?: WorkforceTaskCreateNestedManyWithoutCreatorInput
    notifications?: WorkforceNotificationCreateNestedManyWithoutUserInput
    managedDepartments?: WorkforceDepartmentCreateNestedManyWithoutManagerInput
    managedEmployees?: WorkforceEmployeeCreateNestedManyWithoutManagerInput
    sentInvitations?: WorkforceInvitationCreateNestedManyWithoutInvitedByInput
  }

  export type WorkforceProfileUncheckedCreateWithoutEmployeesInput = {
    id?: string
    email: string
    firstName?: string | null
    lastName?: string | null
    role?: string
    teamId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: WorkforceUserUncheckedCreateNestedOneWithoutProfileInput
    assignedTasks?: WorkforceTaskUncheckedCreateNestedManyWithoutAssigneeInput
    createdTasks?: WorkforceTaskUncheckedCreateNestedManyWithoutCreatorInput
    notifications?: WorkforceNotificationUncheckedCreateNestedManyWithoutUserInput
    managedDepartments?: WorkforceDepartmentUncheckedCreateNestedManyWithoutManagerInput
    managedEmployees?: WorkforceEmployeeUncheckedCreateNestedManyWithoutManagerInput
    sentInvitations?: WorkforceInvitationUncheckedCreateNestedManyWithoutInvitedByInput
  }

  export type WorkforceProfileCreateOrConnectWithoutEmployeesInput = {
    where: WorkforceProfileWhereUniqueInput
    create: XOR<WorkforceProfileCreateWithoutEmployeesInput, WorkforceProfileUncheckedCreateWithoutEmployeesInput>
  }

  export type WorkforceDepartmentCreateWithoutEmployeesInput = {
    id?: string
    name: string
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    team: WorkforceTeamCreateNestedOneWithoutDepartmentsInput
    manager?: WorkforceProfileCreateNestedOneWithoutManagedDepartmentsInput
    tasks?: WorkforceTaskCreateNestedManyWithoutDepartmentInput
  }

  export type WorkforceDepartmentUncheckedCreateWithoutEmployeesInput = {
    id?: string
    teamId: string
    name: string
    icon?: string | null
    managerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: WorkforceTaskUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type WorkforceDepartmentCreateOrConnectWithoutEmployeesInput = {
    where: WorkforceDepartmentWhereUniqueInput
    create: XOR<WorkforceDepartmentCreateWithoutEmployeesInput, WorkforceDepartmentUncheckedCreateWithoutEmployeesInput>
  }

  export type WorkforceProfileCreateWithoutManagedEmployeesInput = {
    id?: string
    email: string
    firstName?: string | null
    lastName?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: WorkforceUserCreateNestedOneWithoutProfileInput
    team?: WorkforceTeamCreateNestedOneWithoutProfilesInput
    employees?: WorkforceEmployeeCreateNestedManyWithoutProfileInput
    assignedTasks?: WorkforceTaskCreateNestedManyWithoutAssigneeInput
    createdTasks?: WorkforceTaskCreateNestedManyWithoutCreatorInput
    notifications?: WorkforceNotificationCreateNestedManyWithoutUserInput
    managedDepartments?: WorkforceDepartmentCreateNestedManyWithoutManagerInput
    sentInvitations?: WorkforceInvitationCreateNestedManyWithoutInvitedByInput
  }

  export type WorkforceProfileUncheckedCreateWithoutManagedEmployeesInput = {
    id?: string
    email: string
    firstName?: string | null
    lastName?: string | null
    role?: string
    teamId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: WorkforceUserUncheckedCreateNestedOneWithoutProfileInput
    employees?: WorkforceEmployeeUncheckedCreateNestedManyWithoutProfileInput
    assignedTasks?: WorkforceTaskUncheckedCreateNestedManyWithoutAssigneeInput
    createdTasks?: WorkforceTaskUncheckedCreateNestedManyWithoutCreatorInput
    notifications?: WorkforceNotificationUncheckedCreateNestedManyWithoutUserInput
    managedDepartments?: WorkforceDepartmentUncheckedCreateNestedManyWithoutManagerInput
    sentInvitations?: WorkforceInvitationUncheckedCreateNestedManyWithoutInvitedByInput
  }

  export type WorkforceProfileCreateOrConnectWithoutManagedEmployeesInput = {
    where: WorkforceProfileWhereUniqueInput
    create: XOR<WorkforceProfileCreateWithoutManagedEmployeesInput, WorkforceProfileUncheckedCreateWithoutManagedEmployeesInput>
  }

  export type WorkforceTeamUpsertWithoutEmployeesInput = {
    update: XOR<WorkforceTeamUpdateWithoutEmployeesInput, WorkforceTeamUncheckedUpdateWithoutEmployeesInput>
    create: XOR<WorkforceTeamCreateWithoutEmployeesInput, WorkforceTeamUncheckedCreateWithoutEmployeesInput>
    where?: WorkforceTeamWhereInput
  }

  export type WorkforceTeamUpdateToOneWithWhereWithoutEmployeesInput = {
    where?: WorkforceTeamWhereInput
    data: XOR<WorkforceTeamUpdateWithoutEmployeesInput, WorkforceTeamUncheckedUpdateWithoutEmployeesInput>
  }

  export type WorkforceTeamUpdateWithoutEmployeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: WorkforceUserUpdateOneRequiredWithoutOwnedTeamsNestedInput
    members?: WorkforceTeamMemberUpdateManyWithoutTeamNestedInput
    profiles?: WorkforceProfileUpdateManyWithoutTeamNestedInput
    departments?: WorkforceDepartmentUpdateManyWithoutTeamNestedInput
    tasks?: WorkforceTaskUpdateManyWithoutTeamNestedInput
    invitations?: WorkforceInvitationUpdateManyWithoutTeamNestedInput
    notifications?: WorkforceNotificationUpdateManyWithoutTeamNestedInput
    roles?: WorkforceCustomRoleUpdateManyWithoutTeamNestedInput
  }

  export type WorkforceTeamUncheckedUpdateWithoutEmployeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: WorkforceTeamMemberUncheckedUpdateManyWithoutTeamNestedInput
    profiles?: WorkforceProfileUncheckedUpdateManyWithoutTeamNestedInput
    departments?: WorkforceDepartmentUncheckedUpdateManyWithoutTeamNestedInput
    tasks?: WorkforceTaskUncheckedUpdateManyWithoutTeamNestedInput
    invitations?: WorkforceInvitationUncheckedUpdateManyWithoutTeamNestedInput
    notifications?: WorkforceNotificationUncheckedUpdateManyWithoutTeamNestedInput
    roles?: WorkforceCustomRoleUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type WorkforceProfileUpsertWithoutEmployeesInput = {
    update: XOR<WorkforceProfileUpdateWithoutEmployeesInput, WorkforceProfileUncheckedUpdateWithoutEmployeesInput>
    create: XOR<WorkforceProfileCreateWithoutEmployeesInput, WorkforceProfileUncheckedCreateWithoutEmployeesInput>
    where?: WorkforceProfileWhereInput
  }

  export type WorkforceProfileUpdateToOneWithWhereWithoutEmployeesInput = {
    where?: WorkforceProfileWhereInput
    data: XOR<WorkforceProfileUpdateWithoutEmployeesInput, WorkforceProfileUncheckedUpdateWithoutEmployeesInput>
  }

  export type WorkforceProfileUpdateWithoutEmployeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: WorkforceUserUpdateOneWithoutProfileNestedInput
    team?: WorkforceTeamUpdateOneWithoutProfilesNestedInput
    assignedTasks?: WorkforceTaskUpdateManyWithoutAssigneeNestedInput
    createdTasks?: WorkforceTaskUpdateManyWithoutCreatorNestedInput
    notifications?: WorkforceNotificationUpdateManyWithoutUserNestedInput
    managedDepartments?: WorkforceDepartmentUpdateManyWithoutManagerNestedInput
    managedEmployees?: WorkforceEmployeeUpdateManyWithoutManagerNestedInput
    sentInvitations?: WorkforceInvitationUpdateManyWithoutInvitedByNestedInput
  }

  export type WorkforceProfileUncheckedUpdateWithoutEmployeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: WorkforceUserUncheckedUpdateOneWithoutProfileNestedInput
    assignedTasks?: WorkforceTaskUncheckedUpdateManyWithoutAssigneeNestedInput
    createdTasks?: WorkforceTaskUncheckedUpdateManyWithoutCreatorNestedInput
    notifications?: WorkforceNotificationUncheckedUpdateManyWithoutUserNestedInput
    managedDepartments?: WorkforceDepartmentUncheckedUpdateManyWithoutManagerNestedInput
    managedEmployees?: WorkforceEmployeeUncheckedUpdateManyWithoutManagerNestedInput
    sentInvitations?: WorkforceInvitationUncheckedUpdateManyWithoutInvitedByNestedInput
  }

  export type WorkforceDepartmentUpsertWithoutEmployeesInput = {
    update: XOR<WorkforceDepartmentUpdateWithoutEmployeesInput, WorkforceDepartmentUncheckedUpdateWithoutEmployeesInput>
    create: XOR<WorkforceDepartmentCreateWithoutEmployeesInput, WorkforceDepartmentUncheckedCreateWithoutEmployeesInput>
    where?: WorkforceDepartmentWhereInput
  }

  export type WorkforceDepartmentUpdateToOneWithWhereWithoutEmployeesInput = {
    where?: WorkforceDepartmentWhereInput
    data: XOR<WorkforceDepartmentUpdateWithoutEmployeesInput, WorkforceDepartmentUncheckedUpdateWithoutEmployeesInput>
  }

  export type WorkforceDepartmentUpdateWithoutEmployeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: WorkforceTeamUpdateOneRequiredWithoutDepartmentsNestedInput
    manager?: WorkforceProfileUpdateOneWithoutManagedDepartmentsNestedInput
    tasks?: WorkforceTaskUpdateManyWithoutDepartmentNestedInput
  }

  export type WorkforceDepartmentUncheckedUpdateWithoutEmployeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: WorkforceTaskUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type WorkforceProfileUpsertWithoutManagedEmployeesInput = {
    update: XOR<WorkforceProfileUpdateWithoutManagedEmployeesInput, WorkforceProfileUncheckedUpdateWithoutManagedEmployeesInput>
    create: XOR<WorkforceProfileCreateWithoutManagedEmployeesInput, WorkforceProfileUncheckedCreateWithoutManagedEmployeesInput>
    where?: WorkforceProfileWhereInput
  }

  export type WorkforceProfileUpdateToOneWithWhereWithoutManagedEmployeesInput = {
    where?: WorkforceProfileWhereInput
    data: XOR<WorkforceProfileUpdateWithoutManagedEmployeesInput, WorkforceProfileUncheckedUpdateWithoutManagedEmployeesInput>
  }

  export type WorkforceProfileUpdateWithoutManagedEmployeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: WorkforceUserUpdateOneWithoutProfileNestedInput
    team?: WorkforceTeamUpdateOneWithoutProfilesNestedInput
    employees?: WorkforceEmployeeUpdateManyWithoutProfileNestedInput
    assignedTasks?: WorkforceTaskUpdateManyWithoutAssigneeNestedInput
    createdTasks?: WorkforceTaskUpdateManyWithoutCreatorNestedInput
    notifications?: WorkforceNotificationUpdateManyWithoutUserNestedInput
    managedDepartments?: WorkforceDepartmentUpdateManyWithoutManagerNestedInput
    sentInvitations?: WorkforceInvitationUpdateManyWithoutInvitedByNestedInput
  }

  export type WorkforceProfileUncheckedUpdateWithoutManagedEmployeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: WorkforceUserUncheckedUpdateOneWithoutProfileNestedInput
    employees?: WorkforceEmployeeUncheckedUpdateManyWithoutProfileNestedInput
    assignedTasks?: WorkforceTaskUncheckedUpdateManyWithoutAssigneeNestedInput
    createdTasks?: WorkforceTaskUncheckedUpdateManyWithoutCreatorNestedInput
    notifications?: WorkforceNotificationUncheckedUpdateManyWithoutUserNestedInput
    managedDepartments?: WorkforceDepartmentUncheckedUpdateManyWithoutManagerNestedInput
    sentInvitations?: WorkforceInvitationUncheckedUpdateManyWithoutInvitedByNestedInput
  }

  export type WorkforceTeamCreateWithoutTasksInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: WorkforceUserCreateNestedOneWithoutOwnedTeamsInput
    members?: WorkforceTeamMemberCreateNestedManyWithoutTeamInput
    profiles?: WorkforceProfileCreateNestedManyWithoutTeamInput
    departments?: WorkforceDepartmentCreateNestedManyWithoutTeamInput
    employees?: WorkforceEmployeeCreateNestedManyWithoutTeamInput
    invitations?: WorkforceInvitationCreateNestedManyWithoutTeamInput
    notifications?: WorkforceNotificationCreateNestedManyWithoutTeamInput
    roles?: WorkforceCustomRoleCreateNestedManyWithoutTeamInput
  }

  export type WorkforceTeamUncheckedCreateWithoutTasksInput = {
    id?: string
    name: string
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: WorkforceTeamMemberUncheckedCreateNestedManyWithoutTeamInput
    profiles?: WorkforceProfileUncheckedCreateNestedManyWithoutTeamInput
    departments?: WorkforceDepartmentUncheckedCreateNestedManyWithoutTeamInput
    employees?: WorkforceEmployeeUncheckedCreateNestedManyWithoutTeamInput
    invitations?: WorkforceInvitationUncheckedCreateNestedManyWithoutTeamInput
    notifications?: WorkforceNotificationUncheckedCreateNestedManyWithoutTeamInput
    roles?: WorkforceCustomRoleUncheckedCreateNestedManyWithoutTeamInput
  }

  export type WorkforceTeamCreateOrConnectWithoutTasksInput = {
    where: WorkforceTeamWhereUniqueInput
    create: XOR<WorkforceTeamCreateWithoutTasksInput, WorkforceTeamUncheckedCreateWithoutTasksInput>
  }

  export type WorkforceDepartmentCreateWithoutTasksInput = {
    id?: string
    name: string
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    team: WorkforceTeamCreateNestedOneWithoutDepartmentsInput
    manager?: WorkforceProfileCreateNestedOneWithoutManagedDepartmentsInput
    employees?: WorkforceEmployeeCreateNestedManyWithoutDepartmentInput
  }

  export type WorkforceDepartmentUncheckedCreateWithoutTasksInput = {
    id?: string
    teamId: string
    name: string
    icon?: string | null
    managerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employees?: WorkforceEmployeeUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type WorkforceDepartmentCreateOrConnectWithoutTasksInput = {
    where: WorkforceDepartmentWhereUniqueInput
    create: XOR<WorkforceDepartmentCreateWithoutTasksInput, WorkforceDepartmentUncheckedCreateWithoutTasksInput>
  }

  export type WorkforceProfileCreateWithoutAssignedTasksInput = {
    id?: string
    email: string
    firstName?: string | null
    lastName?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: WorkforceUserCreateNestedOneWithoutProfileInput
    team?: WorkforceTeamCreateNestedOneWithoutProfilesInput
    employees?: WorkforceEmployeeCreateNestedManyWithoutProfileInput
    createdTasks?: WorkforceTaskCreateNestedManyWithoutCreatorInput
    notifications?: WorkforceNotificationCreateNestedManyWithoutUserInput
    managedDepartments?: WorkforceDepartmentCreateNestedManyWithoutManagerInput
    managedEmployees?: WorkforceEmployeeCreateNestedManyWithoutManagerInput
    sentInvitations?: WorkforceInvitationCreateNestedManyWithoutInvitedByInput
  }

  export type WorkforceProfileUncheckedCreateWithoutAssignedTasksInput = {
    id?: string
    email: string
    firstName?: string | null
    lastName?: string | null
    role?: string
    teamId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: WorkforceUserUncheckedCreateNestedOneWithoutProfileInput
    employees?: WorkforceEmployeeUncheckedCreateNestedManyWithoutProfileInput
    createdTasks?: WorkforceTaskUncheckedCreateNestedManyWithoutCreatorInput
    notifications?: WorkforceNotificationUncheckedCreateNestedManyWithoutUserInput
    managedDepartments?: WorkforceDepartmentUncheckedCreateNestedManyWithoutManagerInput
    managedEmployees?: WorkforceEmployeeUncheckedCreateNestedManyWithoutManagerInput
    sentInvitations?: WorkforceInvitationUncheckedCreateNestedManyWithoutInvitedByInput
  }

  export type WorkforceProfileCreateOrConnectWithoutAssignedTasksInput = {
    where: WorkforceProfileWhereUniqueInput
    create: XOR<WorkforceProfileCreateWithoutAssignedTasksInput, WorkforceProfileUncheckedCreateWithoutAssignedTasksInput>
  }

  export type WorkforceProfileCreateWithoutCreatedTasksInput = {
    id?: string
    email: string
    firstName?: string | null
    lastName?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: WorkforceUserCreateNestedOneWithoutProfileInput
    team?: WorkforceTeamCreateNestedOneWithoutProfilesInput
    employees?: WorkforceEmployeeCreateNestedManyWithoutProfileInput
    assignedTasks?: WorkforceTaskCreateNestedManyWithoutAssigneeInput
    notifications?: WorkforceNotificationCreateNestedManyWithoutUserInput
    managedDepartments?: WorkforceDepartmentCreateNestedManyWithoutManagerInput
    managedEmployees?: WorkforceEmployeeCreateNestedManyWithoutManagerInput
    sentInvitations?: WorkforceInvitationCreateNestedManyWithoutInvitedByInput
  }

  export type WorkforceProfileUncheckedCreateWithoutCreatedTasksInput = {
    id?: string
    email: string
    firstName?: string | null
    lastName?: string | null
    role?: string
    teamId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: WorkforceUserUncheckedCreateNestedOneWithoutProfileInput
    employees?: WorkforceEmployeeUncheckedCreateNestedManyWithoutProfileInput
    assignedTasks?: WorkforceTaskUncheckedCreateNestedManyWithoutAssigneeInput
    notifications?: WorkforceNotificationUncheckedCreateNestedManyWithoutUserInput
    managedDepartments?: WorkforceDepartmentUncheckedCreateNestedManyWithoutManagerInput
    managedEmployees?: WorkforceEmployeeUncheckedCreateNestedManyWithoutManagerInput
    sentInvitations?: WorkforceInvitationUncheckedCreateNestedManyWithoutInvitedByInput
  }

  export type WorkforceProfileCreateOrConnectWithoutCreatedTasksInput = {
    where: WorkforceProfileWhereUniqueInput
    create: XOR<WorkforceProfileCreateWithoutCreatedTasksInput, WorkforceProfileUncheckedCreateWithoutCreatedTasksInput>
  }

  export type WorkforceTeamUpsertWithoutTasksInput = {
    update: XOR<WorkforceTeamUpdateWithoutTasksInput, WorkforceTeamUncheckedUpdateWithoutTasksInput>
    create: XOR<WorkforceTeamCreateWithoutTasksInput, WorkforceTeamUncheckedCreateWithoutTasksInput>
    where?: WorkforceTeamWhereInput
  }

  export type WorkforceTeamUpdateToOneWithWhereWithoutTasksInput = {
    where?: WorkforceTeamWhereInput
    data: XOR<WorkforceTeamUpdateWithoutTasksInput, WorkforceTeamUncheckedUpdateWithoutTasksInput>
  }

  export type WorkforceTeamUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: WorkforceUserUpdateOneRequiredWithoutOwnedTeamsNestedInput
    members?: WorkforceTeamMemberUpdateManyWithoutTeamNestedInput
    profiles?: WorkforceProfileUpdateManyWithoutTeamNestedInput
    departments?: WorkforceDepartmentUpdateManyWithoutTeamNestedInput
    employees?: WorkforceEmployeeUpdateManyWithoutTeamNestedInput
    invitations?: WorkforceInvitationUpdateManyWithoutTeamNestedInput
    notifications?: WorkforceNotificationUpdateManyWithoutTeamNestedInput
    roles?: WorkforceCustomRoleUpdateManyWithoutTeamNestedInput
  }

  export type WorkforceTeamUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: WorkforceTeamMemberUncheckedUpdateManyWithoutTeamNestedInput
    profiles?: WorkforceProfileUncheckedUpdateManyWithoutTeamNestedInput
    departments?: WorkforceDepartmentUncheckedUpdateManyWithoutTeamNestedInput
    employees?: WorkforceEmployeeUncheckedUpdateManyWithoutTeamNestedInput
    invitations?: WorkforceInvitationUncheckedUpdateManyWithoutTeamNestedInput
    notifications?: WorkforceNotificationUncheckedUpdateManyWithoutTeamNestedInput
    roles?: WorkforceCustomRoleUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type WorkforceDepartmentUpsertWithoutTasksInput = {
    update: XOR<WorkforceDepartmentUpdateWithoutTasksInput, WorkforceDepartmentUncheckedUpdateWithoutTasksInput>
    create: XOR<WorkforceDepartmentCreateWithoutTasksInput, WorkforceDepartmentUncheckedCreateWithoutTasksInput>
    where?: WorkforceDepartmentWhereInput
  }

  export type WorkforceDepartmentUpdateToOneWithWhereWithoutTasksInput = {
    where?: WorkforceDepartmentWhereInput
    data: XOR<WorkforceDepartmentUpdateWithoutTasksInput, WorkforceDepartmentUncheckedUpdateWithoutTasksInput>
  }

  export type WorkforceDepartmentUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: WorkforceTeamUpdateOneRequiredWithoutDepartmentsNestedInput
    manager?: WorkforceProfileUpdateOneWithoutManagedDepartmentsNestedInput
    employees?: WorkforceEmployeeUpdateManyWithoutDepartmentNestedInput
  }

  export type WorkforceDepartmentUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: WorkforceEmployeeUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type WorkforceProfileUpsertWithoutAssignedTasksInput = {
    update: XOR<WorkforceProfileUpdateWithoutAssignedTasksInput, WorkforceProfileUncheckedUpdateWithoutAssignedTasksInput>
    create: XOR<WorkforceProfileCreateWithoutAssignedTasksInput, WorkforceProfileUncheckedCreateWithoutAssignedTasksInput>
    where?: WorkforceProfileWhereInput
  }

  export type WorkforceProfileUpdateToOneWithWhereWithoutAssignedTasksInput = {
    where?: WorkforceProfileWhereInput
    data: XOR<WorkforceProfileUpdateWithoutAssignedTasksInput, WorkforceProfileUncheckedUpdateWithoutAssignedTasksInput>
  }

  export type WorkforceProfileUpdateWithoutAssignedTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: WorkforceUserUpdateOneWithoutProfileNestedInput
    team?: WorkforceTeamUpdateOneWithoutProfilesNestedInput
    employees?: WorkforceEmployeeUpdateManyWithoutProfileNestedInput
    createdTasks?: WorkforceTaskUpdateManyWithoutCreatorNestedInput
    notifications?: WorkforceNotificationUpdateManyWithoutUserNestedInput
    managedDepartments?: WorkforceDepartmentUpdateManyWithoutManagerNestedInput
    managedEmployees?: WorkforceEmployeeUpdateManyWithoutManagerNestedInput
    sentInvitations?: WorkforceInvitationUpdateManyWithoutInvitedByNestedInput
  }

  export type WorkforceProfileUncheckedUpdateWithoutAssignedTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: WorkforceUserUncheckedUpdateOneWithoutProfileNestedInput
    employees?: WorkforceEmployeeUncheckedUpdateManyWithoutProfileNestedInput
    createdTasks?: WorkforceTaskUncheckedUpdateManyWithoutCreatorNestedInput
    notifications?: WorkforceNotificationUncheckedUpdateManyWithoutUserNestedInput
    managedDepartments?: WorkforceDepartmentUncheckedUpdateManyWithoutManagerNestedInput
    managedEmployees?: WorkforceEmployeeUncheckedUpdateManyWithoutManagerNestedInput
    sentInvitations?: WorkforceInvitationUncheckedUpdateManyWithoutInvitedByNestedInput
  }

  export type WorkforceProfileUpsertWithoutCreatedTasksInput = {
    update: XOR<WorkforceProfileUpdateWithoutCreatedTasksInput, WorkforceProfileUncheckedUpdateWithoutCreatedTasksInput>
    create: XOR<WorkforceProfileCreateWithoutCreatedTasksInput, WorkforceProfileUncheckedCreateWithoutCreatedTasksInput>
    where?: WorkforceProfileWhereInput
  }

  export type WorkforceProfileUpdateToOneWithWhereWithoutCreatedTasksInput = {
    where?: WorkforceProfileWhereInput
    data: XOR<WorkforceProfileUpdateWithoutCreatedTasksInput, WorkforceProfileUncheckedUpdateWithoutCreatedTasksInput>
  }

  export type WorkforceProfileUpdateWithoutCreatedTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: WorkforceUserUpdateOneWithoutProfileNestedInput
    team?: WorkforceTeamUpdateOneWithoutProfilesNestedInput
    employees?: WorkforceEmployeeUpdateManyWithoutProfileNestedInput
    assignedTasks?: WorkforceTaskUpdateManyWithoutAssigneeNestedInput
    notifications?: WorkforceNotificationUpdateManyWithoutUserNestedInput
    managedDepartments?: WorkforceDepartmentUpdateManyWithoutManagerNestedInput
    managedEmployees?: WorkforceEmployeeUpdateManyWithoutManagerNestedInput
    sentInvitations?: WorkforceInvitationUpdateManyWithoutInvitedByNestedInput
  }

  export type WorkforceProfileUncheckedUpdateWithoutCreatedTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: WorkforceUserUncheckedUpdateOneWithoutProfileNestedInput
    employees?: WorkforceEmployeeUncheckedUpdateManyWithoutProfileNestedInput
    assignedTasks?: WorkforceTaskUncheckedUpdateManyWithoutAssigneeNestedInput
    notifications?: WorkforceNotificationUncheckedUpdateManyWithoutUserNestedInput
    managedDepartments?: WorkforceDepartmentUncheckedUpdateManyWithoutManagerNestedInput
    managedEmployees?: WorkforceEmployeeUncheckedUpdateManyWithoutManagerNestedInput
    sentInvitations?: WorkforceInvitationUncheckedUpdateManyWithoutInvitedByNestedInput
  }

  export type WorkforceTeamCreateWithoutInvitationsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: WorkforceUserCreateNestedOneWithoutOwnedTeamsInput
    members?: WorkforceTeamMemberCreateNestedManyWithoutTeamInput
    profiles?: WorkforceProfileCreateNestedManyWithoutTeamInput
    departments?: WorkforceDepartmentCreateNestedManyWithoutTeamInput
    employees?: WorkforceEmployeeCreateNestedManyWithoutTeamInput
    tasks?: WorkforceTaskCreateNestedManyWithoutTeamInput
    notifications?: WorkforceNotificationCreateNestedManyWithoutTeamInput
    roles?: WorkforceCustomRoleCreateNestedManyWithoutTeamInput
  }

  export type WorkforceTeamUncheckedCreateWithoutInvitationsInput = {
    id?: string
    name: string
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: WorkforceTeamMemberUncheckedCreateNestedManyWithoutTeamInput
    profiles?: WorkforceProfileUncheckedCreateNestedManyWithoutTeamInput
    departments?: WorkforceDepartmentUncheckedCreateNestedManyWithoutTeamInput
    employees?: WorkforceEmployeeUncheckedCreateNestedManyWithoutTeamInput
    tasks?: WorkforceTaskUncheckedCreateNestedManyWithoutTeamInput
    notifications?: WorkforceNotificationUncheckedCreateNestedManyWithoutTeamInput
    roles?: WorkforceCustomRoleUncheckedCreateNestedManyWithoutTeamInput
  }

  export type WorkforceTeamCreateOrConnectWithoutInvitationsInput = {
    where: WorkforceTeamWhereUniqueInput
    create: XOR<WorkforceTeamCreateWithoutInvitationsInput, WorkforceTeamUncheckedCreateWithoutInvitationsInput>
  }

  export type WorkforceProfileCreateWithoutSentInvitationsInput = {
    id?: string
    email: string
    firstName?: string | null
    lastName?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: WorkforceUserCreateNestedOneWithoutProfileInput
    team?: WorkforceTeamCreateNestedOneWithoutProfilesInput
    employees?: WorkforceEmployeeCreateNestedManyWithoutProfileInput
    assignedTasks?: WorkforceTaskCreateNestedManyWithoutAssigneeInput
    createdTasks?: WorkforceTaskCreateNestedManyWithoutCreatorInput
    notifications?: WorkforceNotificationCreateNestedManyWithoutUserInput
    managedDepartments?: WorkforceDepartmentCreateNestedManyWithoutManagerInput
    managedEmployees?: WorkforceEmployeeCreateNestedManyWithoutManagerInput
  }

  export type WorkforceProfileUncheckedCreateWithoutSentInvitationsInput = {
    id?: string
    email: string
    firstName?: string | null
    lastName?: string | null
    role?: string
    teamId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: WorkforceUserUncheckedCreateNestedOneWithoutProfileInput
    employees?: WorkforceEmployeeUncheckedCreateNestedManyWithoutProfileInput
    assignedTasks?: WorkforceTaskUncheckedCreateNestedManyWithoutAssigneeInput
    createdTasks?: WorkforceTaskUncheckedCreateNestedManyWithoutCreatorInput
    notifications?: WorkforceNotificationUncheckedCreateNestedManyWithoutUserInput
    managedDepartments?: WorkforceDepartmentUncheckedCreateNestedManyWithoutManagerInput
    managedEmployees?: WorkforceEmployeeUncheckedCreateNestedManyWithoutManagerInput
  }

  export type WorkforceProfileCreateOrConnectWithoutSentInvitationsInput = {
    where: WorkforceProfileWhereUniqueInput
    create: XOR<WorkforceProfileCreateWithoutSentInvitationsInput, WorkforceProfileUncheckedCreateWithoutSentInvitationsInput>
  }

  export type WorkforceTeamUpsertWithoutInvitationsInput = {
    update: XOR<WorkforceTeamUpdateWithoutInvitationsInput, WorkforceTeamUncheckedUpdateWithoutInvitationsInput>
    create: XOR<WorkforceTeamCreateWithoutInvitationsInput, WorkforceTeamUncheckedCreateWithoutInvitationsInput>
    where?: WorkforceTeamWhereInput
  }

  export type WorkforceTeamUpdateToOneWithWhereWithoutInvitationsInput = {
    where?: WorkforceTeamWhereInput
    data: XOR<WorkforceTeamUpdateWithoutInvitationsInput, WorkforceTeamUncheckedUpdateWithoutInvitationsInput>
  }

  export type WorkforceTeamUpdateWithoutInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: WorkforceUserUpdateOneRequiredWithoutOwnedTeamsNestedInput
    members?: WorkforceTeamMemberUpdateManyWithoutTeamNestedInput
    profiles?: WorkforceProfileUpdateManyWithoutTeamNestedInput
    departments?: WorkforceDepartmentUpdateManyWithoutTeamNestedInput
    employees?: WorkforceEmployeeUpdateManyWithoutTeamNestedInput
    tasks?: WorkforceTaskUpdateManyWithoutTeamNestedInput
    notifications?: WorkforceNotificationUpdateManyWithoutTeamNestedInput
    roles?: WorkforceCustomRoleUpdateManyWithoutTeamNestedInput
  }

  export type WorkforceTeamUncheckedUpdateWithoutInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: WorkforceTeamMemberUncheckedUpdateManyWithoutTeamNestedInput
    profiles?: WorkforceProfileUncheckedUpdateManyWithoutTeamNestedInput
    departments?: WorkforceDepartmentUncheckedUpdateManyWithoutTeamNestedInput
    employees?: WorkforceEmployeeUncheckedUpdateManyWithoutTeamNestedInput
    tasks?: WorkforceTaskUncheckedUpdateManyWithoutTeamNestedInput
    notifications?: WorkforceNotificationUncheckedUpdateManyWithoutTeamNestedInput
    roles?: WorkforceCustomRoleUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type WorkforceProfileUpsertWithoutSentInvitationsInput = {
    update: XOR<WorkforceProfileUpdateWithoutSentInvitationsInput, WorkforceProfileUncheckedUpdateWithoutSentInvitationsInput>
    create: XOR<WorkforceProfileCreateWithoutSentInvitationsInput, WorkforceProfileUncheckedCreateWithoutSentInvitationsInput>
    where?: WorkforceProfileWhereInput
  }

  export type WorkforceProfileUpdateToOneWithWhereWithoutSentInvitationsInput = {
    where?: WorkforceProfileWhereInput
    data: XOR<WorkforceProfileUpdateWithoutSentInvitationsInput, WorkforceProfileUncheckedUpdateWithoutSentInvitationsInput>
  }

  export type WorkforceProfileUpdateWithoutSentInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: WorkforceUserUpdateOneWithoutProfileNestedInput
    team?: WorkforceTeamUpdateOneWithoutProfilesNestedInput
    employees?: WorkforceEmployeeUpdateManyWithoutProfileNestedInput
    assignedTasks?: WorkforceTaskUpdateManyWithoutAssigneeNestedInput
    createdTasks?: WorkforceTaskUpdateManyWithoutCreatorNestedInput
    notifications?: WorkforceNotificationUpdateManyWithoutUserNestedInput
    managedDepartments?: WorkforceDepartmentUpdateManyWithoutManagerNestedInput
    managedEmployees?: WorkforceEmployeeUpdateManyWithoutManagerNestedInput
  }

  export type WorkforceProfileUncheckedUpdateWithoutSentInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: WorkforceUserUncheckedUpdateOneWithoutProfileNestedInput
    employees?: WorkforceEmployeeUncheckedUpdateManyWithoutProfileNestedInput
    assignedTasks?: WorkforceTaskUncheckedUpdateManyWithoutAssigneeNestedInput
    createdTasks?: WorkforceTaskUncheckedUpdateManyWithoutCreatorNestedInput
    notifications?: WorkforceNotificationUncheckedUpdateManyWithoutUserNestedInput
    managedDepartments?: WorkforceDepartmentUncheckedUpdateManyWithoutManagerNestedInput
    managedEmployees?: WorkforceEmployeeUncheckedUpdateManyWithoutManagerNestedInput
  }

  export type WorkforceProfileCreateWithoutNotificationsInput = {
    id?: string
    email: string
    firstName?: string | null
    lastName?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: WorkforceUserCreateNestedOneWithoutProfileInput
    team?: WorkforceTeamCreateNestedOneWithoutProfilesInput
    employees?: WorkforceEmployeeCreateNestedManyWithoutProfileInput
    assignedTasks?: WorkforceTaskCreateNestedManyWithoutAssigneeInput
    createdTasks?: WorkforceTaskCreateNestedManyWithoutCreatorInput
    managedDepartments?: WorkforceDepartmentCreateNestedManyWithoutManagerInput
    managedEmployees?: WorkforceEmployeeCreateNestedManyWithoutManagerInput
    sentInvitations?: WorkforceInvitationCreateNestedManyWithoutInvitedByInput
  }

  export type WorkforceProfileUncheckedCreateWithoutNotificationsInput = {
    id?: string
    email: string
    firstName?: string | null
    lastName?: string | null
    role?: string
    teamId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: WorkforceUserUncheckedCreateNestedOneWithoutProfileInput
    employees?: WorkforceEmployeeUncheckedCreateNestedManyWithoutProfileInput
    assignedTasks?: WorkforceTaskUncheckedCreateNestedManyWithoutAssigneeInput
    createdTasks?: WorkforceTaskUncheckedCreateNestedManyWithoutCreatorInput
    managedDepartments?: WorkforceDepartmentUncheckedCreateNestedManyWithoutManagerInput
    managedEmployees?: WorkforceEmployeeUncheckedCreateNestedManyWithoutManagerInput
    sentInvitations?: WorkforceInvitationUncheckedCreateNestedManyWithoutInvitedByInput
  }

  export type WorkforceProfileCreateOrConnectWithoutNotificationsInput = {
    where: WorkforceProfileWhereUniqueInput
    create: XOR<WorkforceProfileCreateWithoutNotificationsInput, WorkforceProfileUncheckedCreateWithoutNotificationsInput>
  }

  export type WorkforceTeamCreateWithoutNotificationsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: WorkforceUserCreateNestedOneWithoutOwnedTeamsInput
    members?: WorkforceTeamMemberCreateNestedManyWithoutTeamInput
    profiles?: WorkforceProfileCreateNestedManyWithoutTeamInput
    departments?: WorkforceDepartmentCreateNestedManyWithoutTeamInput
    employees?: WorkforceEmployeeCreateNestedManyWithoutTeamInput
    tasks?: WorkforceTaskCreateNestedManyWithoutTeamInput
    invitations?: WorkforceInvitationCreateNestedManyWithoutTeamInput
    roles?: WorkforceCustomRoleCreateNestedManyWithoutTeamInput
  }

  export type WorkforceTeamUncheckedCreateWithoutNotificationsInput = {
    id?: string
    name: string
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: WorkforceTeamMemberUncheckedCreateNestedManyWithoutTeamInput
    profiles?: WorkforceProfileUncheckedCreateNestedManyWithoutTeamInput
    departments?: WorkforceDepartmentUncheckedCreateNestedManyWithoutTeamInput
    employees?: WorkforceEmployeeUncheckedCreateNestedManyWithoutTeamInput
    tasks?: WorkforceTaskUncheckedCreateNestedManyWithoutTeamInput
    invitations?: WorkforceInvitationUncheckedCreateNestedManyWithoutTeamInput
    roles?: WorkforceCustomRoleUncheckedCreateNestedManyWithoutTeamInput
  }

  export type WorkforceTeamCreateOrConnectWithoutNotificationsInput = {
    where: WorkforceTeamWhereUniqueInput
    create: XOR<WorkforceTeamCreateWithoutNotificationsInput, WorkforceTeamUncheckedCreateWithoutNotificationsInput>
  }

  export type WorkforceProfileUpsertWithoutNotificationsInput = {
    update: XOR<WorkforceProfileUpdateWithoutNotificationsInput, WorkforceProfileUncheckedUpdateWithoutNotificationsInput>
    create: XOR<WorkforceProfileCreateWithoutNotificationsInput, WorkforceProfileUncheckedCreateWithoutNotificationsInput>
    where?: WorkforceProfileWhereInput
  }

  export type WorkforceProfileUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: WorkforceProfileWhereInput
    data: XOR<WorkforceProfileUpdateWithoutNotificationsInput, WorkforceProfileUncheckedUpdateWithoutNotificationsInput>
  }

  export type WorkforceProfileUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: WorkforceUserUpdateOneWithoutProfileNestedInput
    team?: WorkforceTeamUpdateOneWithoutProfilesNestedInput
    employees?: WorkforceEmployeeUpdateManyWithoutProfileNestedInput
    assignedTasks?: WorkforceTaskUpdateManyWithoutAssigneeNestedInput
    createdTasks?: WorkforceTaskUpdateManyWithoutCreatorNestedInput
    managedDepartments?: WorkforceDepartmentUpdateManyWithoutManagerNestedInput
    managedEmployees?: WorkforceEmployeeUpdateManyWithoutManagerNestedInput
    sentInvitations?: WorkforceInvitationUpdateManyWithoutInvitedByNestedInput
  }

  export type WorkforceProfileUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: WorkforceUserUncheckedUpdateOneWithoutProfileNestedInput
    employees?: WorkforceEmployeeUncheckedUpdateManyWithoutProfileNestedInput
    assignedTasks?: WorkforceTaskUncheckedUpdateManyWithoutAssigneeNestedInput
    createdTasks?: WorkforceTaskUncheckedUpdateManyWithoutCreatorNestedInput
    managedDepartments?: WorkforceDepartmentUncheckedUpdateManyWithoutManagerNestedInput
    managedEmployees?: WorkforceEmployeeUncheckedUpdateManyWithoutManagerNestedInput
    sentInvitations?: WorkforceInvitationUncheckedUpdateManyWithoutInvitedByNestedInput
  }

  export type WorkforceTeamUpsertWithoutNotificationsInput = {
    update: XOR<WorkforceTeamUpdateWithoutNotificationsInput, WorkforceTeamUncheckedUpdateWithoutNotificationsInput>
    create: XOR<WorkforceTeamCreateWithoutNotificationsInput, WorkforceTeamUncheckedCreateWithoutNotificationsInput>
    where?: WorkforceTeamWhereInput
  }

  export type WorkforceTeamUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: WorkforceTeamWhereInput
    data: XOR<WorkforceTeamUpdateWithoutNotificationsInput, WorkforceTeamUncheckedUpdateWithoutNotificationsInput>
  }

  export type WorkforceTeamUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: WorkforceUserUpdateOneRequiredWithoutOwnedTeamsNestedInput
    members?: WorkforceTeamMemberUpdateManyWithoutTeamNestedInput
    profiles?: WorkforceProfileUpdateManyWithoutTeamNestedInput
    departments?: WorkforceDepartmentUpdateManyWithoutTeamNestedInput
    employees?: WorkforceEmployeeUpdateManyWithoutTeamNestedInput
    tasks?: WorkforceTaskUpdateManyWithoutTeamNestedInput
    invitations?: WorkforceInvitationUpdateManyWithoutTeamNestedInput
    roles?: WorkforceCustomRoleUpdateManyWithoutTeamNestedInput
  }

  export type WorkforceTeamUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: WorkforceTeamMemberUncheckedUpdateManyWithoutTeamNestedInput
    profiles?: WorkforceProfileUncheckedUpdateManyWithoutTeamNestedInput
    departments?: WorkforceDepartmentUncheckedUpdateManyWithoutTeamNestedInput
    employees?: WorkforceEmployeeUncheckedUpdateManyWithoutTeamNestedInput
    tasks?: WorkforceTaskUncheckedUpdateManyWithoutTeamNestedInput
    invitations?: WorkforceInvitationUncheckedUpdateManyWithoutTeamNestedInput
    roles?: WorkforceCustomRoleUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type WorkforceTeamCreateWithoutRolesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: WorkforceUserCreateNestedOneWithoutOwnedTeamsInput
    members?: WorkforceTeamMemberCreateNestedManyWithoutTeamInput
    profiles?: WorkforceProfileCreateNestedManyWithoutTeamInput
    departments?: WorkforceDepartmentCreateNestedManyWithoutTeamInput
    employees?: WorkforceEmployeeCreateNestedManyWithoutTeamInput
    tasks?: WorkforceTaskCreateNestedManyWithoutTeamInput
    invitations?: WorkforceInvitationCreateNestedManyWithoutTeamInput
    notifications?: WorkforceNotificationCreateNestedManyWithoutTeamInput
  }

  export type WorkforceTeamUncheckedCreateWithoutRolesInput = {
    id?: string
    name: string
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: WorkforceTeamMemberUncheckedCreateNestedManyWithoutTeamInput
    profiles?: WorkforceProfileUncheckedCreateNestedManyWithoutTeamInput
    departments?: WorkforceDepartmentUncheckedCreateNestedManyWithoutTeamInput
    employees?: WorkforceEmployeeUncheckedCreateNestedManyWithoutTeamInput
    tasks?: WorkforceTaskUncheckedCreateNestedManyWithoutTeamInput
    invitations?: WorkforceInvitationUncheckedCreateNestedManyWithoutTeamInput
    notifications?: WorkforceNotificationUncheckedCreateNestedManyWithoutTeamInput
  }

  export type WorkforceTeamCreateOrConnectWithoutRolesInput = {
    where: WorkforceTeamWhereUniqueInput
    create: XOR<WorkforceTeamCreateWithoutRolesInput, WorkforceTeamUncheckedCreateWithoutRolesInput>
  }

  export type WorkforceTeamUpsertWithoutRolesInput = {
    update: XOR<WorkforceTeamUpdateWithoutRolesInput, WorkforceTeamUncheckedUpdateWithoutRolesInput>
    create: XOR<WorkforceTeamCreateWithoutRolesInput, WorkforceTeamUncheckedCreateWithoutRolesInput>
    where?: WorkforceTeamWhereInput
  }

  export type WorkforceTeamUpdateToOneWithWhereWithoutRolesInput = {
    where?: WorkforceTeamWhereInput
    data: XOR<WorkforceTeamUpdateWithoutRolesInput, WorkforceTeamUncheckedUpdateWithoutRolesInput>
  }

  export type WorkforceTeamUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: WorkforceUserUpdateOneRequiredWithoutOwnedTeamsNestedInput
    members?: WorkforceTeamMemberUpdateManyWithoutTeamNestedInput
    profiles?: WorkforceProfileUpdateManyWithoutTeamNestedInput
    departments?: WorkforceDepartmentUpdateManyWithoutTeamNestedInput
    employees?: WorkforceEmployeeUpdateManyWithoutTeamNestedInput
    tasks?: WorkforceTaskUpdateManyWithoutTeamNestedInput
    invitations?: WorkforceInvitationUpdateManyWithoutTeamNestedInput
    notifications?: WorkforceNotificationUpdateManyWithoutTeamNestedInput
  }

  export type WorkforceTeamUncheckedUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: WorkforceTeamMemberUncheckedUpdateManyWithoutTeamNestedInput
    profiles?: WorkforceProfileUncheckedUpdateManyWithoutTeamNestedInput
    departments?: WorkforceDepartmentUncheckedUpdateManyWithoutTeamNestedInput
    employees?: WorkforceEmployeeUncheckedUpdateManyWithoutTeamNestedInput
    tasks?: WorkforceTaskUncheckedUpdateManyWithoutTeamNestedInput
    invitations?: WorkforceInvitationUncheckedUpdateManyWithoutTeamNestedInput
    notifications?: WorkforceNotificationUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type WorkforceTeamMemberCreateManyUserInput = {
    id?: string
    teamId: string
    role?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkforceTeamCreateManyOwnerInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkforceTeamMemberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: WorkforceTeamUpdateOneRequiredWithoutMembersNestedInput
  }

  export type WorkforceTeamMemberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkforceTeamMemberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkforceTeamUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: WorkforceTeamMemberUpdateManyWithoutTeamNestedInput
    profiles?: WorkforceProfileUpdateManyWithoutTeamNestedInput
    departments?: WorkforceDepartmentUpdateManyWithoutTeamNestedInput
    employees?: WorkforceEmployeeUpdateManyWithoutTeamNestedInput
    tasks?: WorkforceTaskUpdateManyWithoutTeamNestedInput
    invitations?: WorkforceInvitationUpdateManyWithoutTeamNestedInput
    notifications?: WorkforceNotificationUpdateManyWithoutTeamNestedInput
    roles?: WorkforceCustomRoleUpdateManyWithoutTeamNestedInput
  }

  export type WorkforceTeamUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: WorkforceTeamMemberUncheckedUpdateManyWithoutTeamNestedInput
    profiles?: WorkforceProfileUncheckedUpdateManyWithoutTeamNestedInput
    departments?: WorkforceDepartmentUncheckedUpdateManyWithoutTeamNestedInput
    employees?: WorkforceEmployeeUncheckedUpdateManyWithoutTeamNestedInput
    tasks?: WorkforceTaskUncheckedUpdateManyWithoutTeamNestedInput
    invitations?: WorkforceInvitationUncheckedUpdateManyWithoutTeamNestedInput
    notifications?: WorkforceNotificationUncheckedUpdateManyWithoutTeamNestedInput
    roles?: WorkforceCustomRoleUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type WorkforceTeamUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkforceTeamMemberCreateManyTeamInput = {
    id?: string
    userId: string
    role?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkforceProfileCreateManyTeamInput = {
    id?: string
    email: string
    firstName?: string | null
    lastName?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkforceDepartmentCreateManyTeamInput = {
    id?: string
    name: string
    icon?: string | null
    managerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkforceEmployeeCreateManyTeamInput = {
    id?: string
    profileId: string
    departmentId?: string | null
    position?: string | null
    joinDate?: Date | string | null
    salary?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.WorkforceEmployeeStatus
    managerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkforceTaskCreateManyTeamInput = {
    id?: string
    title: string
    description?: string | null
    priority?: $Enums.WorkforceTaskPriority
    status?: $Enums.WorkforceTaskStatus
    departmentId?: string | null
    assigneeId?: string | null
    createdById?: string | null
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkforceInvitationCreateManyTeamInput = {
    id?: string
    email: string
    role: string
    token: string
    expiresAt?: Date | string | null
    invitedById: string
    acceptedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkforceNotificationCreateManyTeamInput = {
    id?: string
    userId: string
    type: string
    title: string
    message: string
    data?: NullableJsonNullValueInput | InputJsonValue
    read?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkforceCustomRoleCreateManyTeamInput = {
    id?: string
    name: string
    label: string
    permissions?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkforceTeamMemberUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: WorkforceUserUpdateOneRequiredWithoutMembershipsNestedInput
  }

  export type WorkforceTeamMemberUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkforceTeamMemberUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkforceProfileUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: WorkforceUserUpdateOneWithoutProfileNestedInput
    employees?: WorkforceEmployeeUpdateManyWithoutProfileNestedInput
    assignedTasks?: WorkforceTaskUpdateManyWithoutAssigneeNestedInput
    createdTasks?: WorkforceTaskUpdateManyWithoutCreatorNestedInput
    notifications?: WorkforceNotificationUpdateManyWithoutUserNestedInput
    managedDepartments?: WorkforceDepartmentUpdateManyWithoutManagerNestedInput
    managedEmployees?: WorkforceEmployeeUpdateManyWithoutManagerNestedInput
    sentInvitations?: WorkforceInvitationUpdateManyWithoutInvitedByNestedInput
  }

  export type WorkforceProfileUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: WorkforceUserUncheckedUpdateOneWithoutProfileNestedInput
    employees?: WorkforceEmployeeUncheckedUpdateManyWithoutProfileNestedInput
    assignedTasks?: WorkforceTaskUncheckedUpdateManyWithoutAssigneeNestedInput
    createdTasks?: WorkforceTaskUncheckedUpdateManyWithoutCreatorNestedInput
    notifications?: WorkforceNotificationUncheckedUpdateManyWithoutUserNestedInput
    managedDepartments?: WorkforceDepartmentUncheckedUpdateManyWithoutManagerNestedInput
    managedEmployees?: WorkforceEmployeeUncheckedUpdateManyWithoutManagerNestedInput
    sentInvitations?: WorkforceInvitationUncheckedUpdateManyWithoutInvitedByNestedInput
  }

  export type WorkforceProfileUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkforceDepartmentUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    manager?: WorkforceProfileUpdateOneWithoutManagedDepartmentsNestedInput
    employees?: WorkforceEmployeeUpdateManyWithoutDepartmentNestedInput
    tasks?: WorkforceTaskUpdateManyWithoutDepartmentNestedInput
  }

  export type WorkforceDepartmentUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: WorkforceEmployeeUncheckedUpdateManyWithoutDepartmentNestedInput
    tasks?: WorkforceTaskUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type WorkforceDepartmentUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkforceEmployeeUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    joinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    salary?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumWorkforceEmployeeStatusFieldUpdateOperationsInput | $Enums.WorkforceEmployeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: WorkforceProfileUpdateOneRequiredWithoutEmployeesNestedInput
    department?: WorkforceDepartmentUpdateOneWithoutEmployeesNestedInput
    manager?: WorkforceProfileUpdateOneWithoutManagedEmployeesNestedInput
  }

  export type WorkforceEmployeeUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    joinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    salary?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumWorkforceEmployeeStatusFieldUpdateOperationsInput | $Enums.WorkforceEmployeeStatus
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkforceEmployeeUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    joinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    salary?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumWorkforceEmployeeStatusFieldUpdateOperationsInput | $Enums.WorkforceEmployeeStatus
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkforceTaskUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumWorkforceTaskPriorityFieldUpdateOperationsInput | $Enums.WorkforceTaskPriority
    status?: EnumWorkforceTaskStatusFieldUpdateOperationsInput | $Enums.WorkforceTaskStatus
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: WorkforceDepartmentUpdateOneWithoutTasksNestedInput
    assignee?: WorkforceProfileUpdateOneWithoutAssignedTasksNestedInput
    creator?: WorkforceProfileUpdateOneWithoutCreatedTasksNestedInput
  }

  export type WorkforceTaskUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumWorkforceTaskPriorityFieldUpdateOperationsInput | $Enums.WorkforceTaskPriority
    status?: EnumWorkforceTaskStatusFieldUpdateOperationsInput | $Enums.WorkforceTaskStatus
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkforceTaskUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumWorkforceTaskPriorityFieldUpdateOperationsInput | $Enums.WorkforceTaskPriority
    status?: EnumWorkforceTaskStatusFieldUpdateOperationsInput | $Enums.WorkforceTaskStatus
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkforceInvitationUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitedBy?: WorkforceProfileUpdateOneRequiredWithoutSentInvitationsNestedInput
  }

  export type WorkforceInvitationUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invitedById?: StringFieldUpdateOperationsInput | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkforceInvitationUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invitedById?: StringFieldUpdateOperationsInput | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkforceNotificationUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: WorkforceProfileUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type WorkforceNotificationUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkforceNotificationUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkforceCustomRoleUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    permissions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkforceCustomRoleUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    permissions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkforceCustomRoleUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    permissions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkforceEmployeeCreateManyProfileInput = {
    id?: string
    teamId: string
    departmentId?: string | null
    position?: string | null
    joinDate?: Date | string | null
    salary?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.WorkforceEmployeeStatus
    managerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkforceTaskCreateManyAssigneeInput = {
    id?: string
    teamId: string
    title: string
    description?: string | null
    priority?: $Enums.WorkforceTaskPriority
    status?: $Enums.WorkforceTaskStatus
    departmentId?: string | null
    createdById?: string | null
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkforceTaskCreateManyCreatorInput = {
    id?: string
    teamId: string
    title: string
    description?: string | null
    priority?: $Enums.WorkforceTaskPriority
    status?: $Enums.WorkforceTaskStatus
    departmentId?: string | null
    assigneeId?: string | null
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkforceNotificationCreateManyUserInput = {
    id?: string
    type: string
    title: string
    message: string
    data?: NullableJsonNullValueInput | InputJsonValue
    read?: boolean
    teamId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkforceDepartmentCreateManyManagerInput = {
    id?: string
    teamId: string
    name: string
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkforceEmployeeCreateManyManagerInput = {
    id?: string
    teamId: string
    profileId: string
    departmentId?: string | null
    position?: string | null
    joinDate?: Date | string | null
    salary?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.WorkforceEmployeeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkforceInvitationCreateManyInvitedByInput = {
    id?: string
    teamId: string
    email: string
    role: string
    token: string
    expiresAt?: Date | string | null
    acceptedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkforceEmployeeUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    joinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    salary?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumWorkforceEmployeeStatusFieldUpdateOperationsInput | $Enums.WorkforceEmployeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: WorkforceTeamUpdateOneRequiredWithoutEmployeesNestedInput
    department?: WorkforceDepartmentUpdateOneWithoutEmployeesNestedInput
    manager?: WorkforceProfileUpdateOneWithoutManagedEmployeesNestedInput
  }

  export type WorkforceEmployeeUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    joinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    salary?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumWorkforceEmployeeStatusFieldUpdateOperationsInput | $Enums.WorkforceEmployeeStatus
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkforceEmployeeUncheckedUpdateManyWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    joinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    salary?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumWorkforceEmployeeStatusFieldUpdateOperationsInput | $Enums.WorkforceEmployeeStatus
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkforceTaskUpdateWithoutAssigneeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumWorkforceTaskPriorityFieldUpdateOperationsInput | $Enums.WorkforceTaskPriority
    status?: EnumWorkforceTaskStatusFieldUpdateOperationsInput | $Enums.WorkforceTaskStatus
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: WorkforceTeamUpdateOneRequiredWithoutTasksNestedInput
    department?: WorkforceDepartmentUpdateOneWithoutTasksNestedInput
    creator?: WorkforceProfileUpdateOneWithoutCreatedTasksNestedInput
  }

  export type WorkforceTaskUncheckedUpdateWithoutAssigneeInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumWorkforceTaskPriorityFieldUpdateOperationsInput | $Enums.WorkforceTaskPriority
    status?: EnumWorkforceTaskStatusFieldUpdateOperationsInput | $Enums.WorkforceTaskStatus
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkforceTaskUncheckedUpdateManyWithoutAssigneeInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumWorkforceTaskPriorityFieldUpdateOperationsInput | $Enums.WorkforceTaskPriority
    status?: EnumWorkforceTaskStatusFieldUpdateOperationsInput | $Enums.WorkforceTaskStatus
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkforceTaskUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumWorkforceTaskPriorityFieldUpdateOperationsInput | $Enums.WorkforceTaskPriority
    status?: EnumWorkforceTaskStatusFieldUpdateOperationsInput | $Enums.WorkforceTaskStatus
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: WorkforceTeamUpdateOneRequiredWithoutTasksNestedInput
    department?: WorkforceDepartmentUpdateOneWithoutTasksNestedInput
    assignee?: WorkforceProfileUpdateOneWithoutAssignedTasksNestedInput
  }

  export type WorkforceTaskUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumWorkforceTaskPriorityFieldUpdateOperationsInput | $Enums.WorkforceTaskPriority
    status?: EnumWorkforceTaskStatusFieldUpdateOperationsInput | $Enums.WorkforceTaskStatus
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkforceTaskUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumWorkforceTaskPriorityFieldUpdateOperationsInput | $Enums.WorkforceTaskPriority
    status?: EnumWorkforceTaskStatusFieldUpdateOperationsInput | $Enums.WorkforceTaskStatus
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkforceNotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: WorkforceTeamUpdateOneWithoutNotificationsNestedInput
  }

  export type WorkforceNotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    read?: BoolFieldUpdateOperationsInput | boolean
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkforceNotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    read?: BoolFieldUpdateOperationsInput | boolean
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkforceDepartmentUpdateWithoutManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: WorkforceTeamUpdateOneRequiredWithoutDepartmentsNestedInput
    employees?: WorkforceEmployeeUpdateManyWithoutDepartmentNestedInput
    tasks?: WorkforceTaskUpdateManyWithoutDepartmentNestedInput
  }

  export type WorkforceDepartmentUncheckedUpdateWithoutManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: WorkforceEmployeeUncheckedUpdateManyWithoutDepartmentNestedInput
    tasks?: WorkforceTaskUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type WorkforceDepartmentUncheckedUpdateManyWithoutManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkforceEmployeeUpdateWithoutManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    joinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    salary?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumWorkforceEmployeeStatusFieldUpdateOperationsInput | $Enums.WorkforceEmployeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: WorkforceTeamUpdateOneRequiredWithoutEmployeesNestedInput
    profile?: WorkforceProfileUpdateOneRequiredWithoutEmployeesNestedInput
    department?: WorkforceDepartmentUpdateOneWithoutEmployeesNestedInput
  }

  export type WorkforceEmployeeUncheckedUpdateWithoutManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    joinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    salary?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumWorkforceEmployeeStatusFieldUpdateOperationsInput | $Enums.WorkforceEmployeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkforceEmployeeUncheckedUpdateManyWithoutManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    joinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    salary?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumWorkforceEmployeeStatusFieldUpdateOperationsInput | $Enums.WorkforceEmployeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkforceInvitationUpdateWithoutInvitedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: WorkforceTeamUpdateOneRequiredWithoutInvitationsNestedInput
  }

  export type WorkforceInvitationUncheckedUpdateWithoutInvitedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkforceInvitationUncheckedUpdateManyWithoutInvitedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkforceEmployeeCreateManyDepartmentInput = {
    id?: string
    teamId: string
    profileId: string
    position?: string | null
    joinDate?: Date | string | null
    salary?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.WorkforceEmployeeStatus
    managerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkforceTaskCreateManyDepartmentInput = {
    id?: string
    teamId: string
    title: string
    description?: string | null
    priority?: $Enums.WorkforceTaskPriority
    status?: $Enums.WorkforceTaskStatus
    assigneeId?: string | null
    createdById?: string | null
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkforceEmployeeUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    joinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    salary?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumWorkforceEmployeeStatusFieldUpdateOperationsInput | $Enums.WorkforceEmployeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: WorkforceTeamUpdateOneRequiredWithoutEmployeesNestedInput
    profile?: WorkforceProfileUpdateOneRequiredWithoutEmployeesNestedInput
    manager?: WorkforceProfileUpdateOneWithoutManagedEmployeesNestedInput
  }

  export type WorkforceEmployeeUncheckedUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    joinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    salary?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumWorkforceEmployeeStatusFieldUpdateOperationsInput | $Enums.WorkforceEmployeeStatus
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkforceEmployeeUncheckedUpdateManyWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    joinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    salary?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumWorkforceEmployeeStatusFieldUpdateOperationsInput | $Enums.WorkforceEmployeeStatus
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkforceTaskUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumWorkforceTaskPriorityFieldUpdateOperationsInput | $Enums.WorkforceTaskPriority
    status?: EnumWorkforceTaskStatusFieldUpdateOperationsInput | $Enums.WorkforceTaskStatus
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: WorkforceTeamUpdateOneRequiredWithoutTasksNestedInput
    assignee?: WorkforceProfileUpdateOneWithoutAssignedTasksNestedInput
    creator?: WorkforceProfileUpdateOneWithoutCreatedTasksNestedInput
  }

  export type WorkforceTaskUncheckedUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumWorkforceTaskPriorityFieldUpdateOperationsInput | $Enums.WorkforceTaskPriority
    status?: EnumWorkforceTaskStatusFieldUpdateOperationsInput | $Enums.WorkforceTaskStatus
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkforceTaskUncheckedUpdateManyWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumWorkforceTaskPriorityFieldUpdateOperationsInput | $Enums.WorkforceTaskPriority
    status?: EnumWorkforceTaskStatusFieldUpdateOperationsInput | $Enums.WorkforceTaskStatus
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}