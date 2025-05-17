
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Friend
 * 
 */
export type Friend = $Result.DefaultSelection<Prisma.$FriendPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model PostPreference
 * 
 */
export type PostPreference = $Result.DefaultSelection<Prisma.$PostPreferencePayload>
/**
 * Model CommentPreference
 * 
 */
export type CommentPreference = $Result.DefaultSelection<Prisma.$CommentPreferencePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.friend`: Exposes CRUD operations for the **Friend** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Friends
    * const friends = await prisma.friend.findMany()
    * ```
    */
  get friend(): Prisma.FriendDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postPreference`: Exposes CRUD operations for the **PostPreference** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostPreferences
    * const postPreferences = await prisma.postPreference.findMany()
    * ```
    */
  get postPreference(): Prisma.PostPreferenceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.commentPreference`: Exposes CRUD operations for the **CommentPreference** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CommentPreferences
    * const commentPreferences = await prisma.commentPreference.findMany()
    * ```
    */
  get commentPreference(): Prisma.CommentPreferenceDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    User: 'User',
    Friend: 'Friend',
    Post: 'Post',
    Comment: 'Comment',
    PostPreference: 'PostPreference',
    CommentPreference: 'CommentPreference'
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
      modelProps: "user" | "friend" | "post" | "comment" | "postPreference" | "commentPreference"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Friend: {
        payload: Prisma.$FriendPayload<ExtArgs>
        fields: Prisma.FriendFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FriendFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FriendFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>
          }
          findFirst: {
            args: Prisma.FriendFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FriendFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>
          }
          findMany: {
            args: Prisma.FriendFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>[]
          }
          create: {
            args: Prisma.FriendCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>
          }
          createMany: {
            args: Prisma.FriendCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FriendCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>[]
          }
          delete: {
            args: Prisma.FriendDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>
          }
          update: {
            args: Prisma.FriendUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>
          }
          deleteMany: {
            args: Prisma.FriendDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FriendUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FriendUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>[]
          }
          upsert: {
            args: Prisma.FriendUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>
          }
          aggregate: {
            args: Prisma.FriendAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFriend>
          }
          groupBy: {
            args: Prisma.FriendGroupByArgs<ExtArgs>
            result: $Utils.Optional<FriendGroupByOutputType>[]
          }
          count: {
            args: Prisma.FriendCountArgs<ExtArgs>
            result: $Utils.Optional<FriendCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      PostPreference: {
        payload: Prisma.$PostPreferencePayload<ExtArgs>
        fields: Prisma.PostPreferenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostPreferenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPreferencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostPreferenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPreferencePayload>
          }
          findFirst: {
            args: Prisma.PostPreferenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPreferencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostPreferenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPreferencePayload>
          }
          findMany: {
            args: Prisma.PostPreferenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPreferencePayload>[]
          }
          create: {
            args: Prisma.PostPreferenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPreferencePayload>
          }
          createMany: {
            args: Prisma.PostPreferenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostPreferenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPreferencePayload>[]
          }
          delete: {
            args: Prisma.PostPreferenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPreferencePayload>
          }
          update: {
            args: Prisma.PostPreferenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPreferencePayload>
          }
          deleteMany: {
            args: Prisma.PostPreferenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostPreferenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostPreferenceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPreferencePayload>[]
          }
          upsert: {
            args: Prisma.PostPreferenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPreferencePayload>
          }
          aggregate: {
            args: Prisma.PostPreferenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostPreference>
          }
          groupBy: {
            args: Prisma.PostPreferenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostPreferenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostPreferenceCountArgs<ExtArgs>
            result: $Utils.Optional<PostPreferenceCountAggregateOutputType> | number
          }
        }
      }
      CommentPreference: {
        payload: Prisma.$CommentPreferencePayload<ExtArgs>
        fields: Prisma.CommentPreferenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentPreferenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPreferencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentPreferenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPreferencePayload>
          }
          findFirst: {
            args: Prisma.CommentPreferenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPreferencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentPreferenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPreferencePayload>
          }
          findMany: {
            args: Prisma.CommentPreferenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPreferencePayload>[]
          }
          create: {
            args: Prisma.CommentPreferenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPreferencePayload>
          }
          createMany: {
            args: Prisma.CommentPreferenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentPreferenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPreferencePayload>[]
          }
          delete: {
            args: Prisma.CommentPreferenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPreferencePayload>
          }
          update: {
            args: Prisma.CommentPreferenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPreferencePayload>
          }
          deleteMany: {
            args: Prisma.CommentPreferenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentPreferenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentPreferenceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPreferencePayload>[]
          }
          upsert: {
            args: Prisma.CommentPreferenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPreferencePayload>
          }
          aggregate: {
            args: Prisma.CommentPreferenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommentPreference>
          }
          groupBy: {
            args: Prisma.CommentPreferenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentPreferenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentPreferenceCountArgs<ExtArgs>
            result: $Utils.Optional<CommentPreferenceCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    user?: UserOmit
    friend?: FriendOmit
    post?: PostOmit
    comment?: CommentOmit
    postPreference?: PostPreferenceOmit
    commentPreference?: CommentPreferenceOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    user1: number
    user2: number
    posts: number
    comments: number
    commentPreferences: number
    postPreference: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user1?: boolean | UserCountOutputTypeCountUser1Args
    user2?: boolean | UserCountOutputTypeCountUser2Args
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
    commentPreferences?: boolean | UserCountOutputTypeCountCommentPreferencesArgs
    postPreference?: boolean | UserCountOutputTypeCountPostPreferenceArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUser1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUser2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentPreferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentPreferenceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostPreferenceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostPreferenceWhereInput
  }


  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    preferences: number
    comments: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    preferences?: boolean | PostCountOutputTypeCountPreferencesArgs
    comments?: boolean | PostCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes
  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountPreferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostPreferenceWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }


  /**
   * Count Type CommentCountOutputType
   */

  export type CommentCountOutputType = {
    preferences: number
  }

  export type CommentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    preferences?: boolean | CommentCountOutputTypeCountPreferencesArgs
  }

  // Custom InputTypes
  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentCountOutputType
     */
    select?: CommentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeCountPreferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentPreferenceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    user_id: string | null
    name: string | null
    email: string | null
    address: string | null
    image: string | null
    phone: string | null
  }

  export type UserMaxAggregateOutputType = {
    user_id: string | null
    name: string | null
    email: string | null
    address: string | null
    image: string | null
    phone: string | null
  }

  export type UserCountAggregateOutputType = {
    user_id: number
    name: number
    email: number
    address: number
    image: number
    phone: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    user_id?: true
    name?: true
    email?: true
    address?: true
    image?: true
    phone?: true
  }

  export type UserMaxAggregateInputType = {
    user_id?: true
    name?: true
    email?: true
    address?: true
    image?: true
    phone?: true
  }

  export type UserCountAggregateInputType = {
    user_id?: true
    name?: true
    email?: true
    address?: true
    image?: true
    phone?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    user_id: string
    name: string
    email: string
    address: string | null
    image: string
    phone: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    name?: boolean
    email?: boolean
    address?: boolean
    image?: boolean
    phone?: boolean
    user1?: boolean | User$user1Args<ExtArgs>
    user2?: boolean | User$user2Args<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    commentPreferences?: boolean | User$commentPreferencesArgs<ExtArgs>
    postPreference?: boolean | User$postPreferenceArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    name?: boolean
    email?: boolean
    address?: boolean
    image?: boolean
    phone?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    name?: boolean
    email?: boolean
    address?: boolean
    image?: boolean
    phone?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    user_id?: boolean
    name?: boolean
    email?: boolean
    address?: boolean
    image?: boolean
    phone?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "name" | "email" | "address" | "image" | "phone", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user1?: boolean | User$user1Args<ExtArgs>
    user2?: boolean | User$user2Args<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    commentPreferences?: boolean | User$commentPreferencesArgs<ExtArgs>
    postPreference?: boolean | User$postPreferenceArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      user1: Prisma.$FriendPayload<ExtArgs>[]
      user2: Prisma.$FriendPayload<ExtArgs>[]
      posts: Prisma.$PostPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      commentPreferences: Prisma.$CommentPreferencePayload<ExtArgs>[]
      postPreference: Prisma.$PostPreferencePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: string
      name: string
      email: string
      address: string | null
      image: string
      phone: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const userWithUser_idOnly = await prisma.user.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `user_id`
     * const userWithUser_idOnly = await prisma.user.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `user_id`
     * const userWithUser_idOnly = await prisma.user.updateManyAndReturn({
     *   select: { user_id: true },
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user1<T extends User$user1Args<ExtArgs> = {}>(args?: Subset<T, User$user1Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user2<T extends User$user2Args<ExtArgs> = {}>(args?: Subset<T, User$user2Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    commentPreferences<T extends User$commentPreferencesArgs<ExtArgs> = {}>(args?: Subset<T, User$commentPreferencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPreferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    postPreference<T extends User$postPreferenceArgs<ExtArgs> = {}>(args?: Subset<T, User$postPreferenceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPreferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly user_id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly address: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.user1
   */
  export type User$user1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    where?: FriendWhereInput
    orderBy?: FriendOrderByWithRelationInput | FriendOrderByWithRelationInput[]
    cursor?: FriendWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendScalarFieldEnum | FriendScalarFieldEnum[]
  }

  /**
   * User.user2
   */
  export type User$user2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    where?: FriendWhereInput
    orderBy?: FriendOrderByWithRelationInput | FriendOrderByWithRelationInput[]
    cursor?: FriendWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendScalarFieldEnum | FriendScalarFieldEnum[]
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * User.comments
   */
  export type User$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * User.commentPreferences
   */
  export type User$commentPreferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentPreference
     */
    select?: CommentPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentPreference
     */
    omit?: CommentPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentPreferenceInclude<ExtArgs> | null
    where?: CommentPreferenceWhereInput
    orderBy?: CommentPreferenceOrderByWithRelationInput | CommentPreferenceOrderByWithRelationInput[]
    cursor?: CommentPreferenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentPreferenceScalarFieldEnum | CommentPreferenceScalarFieldEnum[]
  }

  /**
   * User.postPreference
   */
  export type User$postPreferenceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostPreference
     */
    select?: PostPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostPreference
     */
    omit?: PostPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostPreferenceInclude<ExtArgs> | null
    where?: PostPreferenceWhereInput
    orderBy?: PostPreferenceOrderByWithRelationInput | PostPreferenceOrderByWithRelationInput[]
    cursor?: PostPreferenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostPreferenceScalarFieldEnum | PostPreferenceScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Friend
   */

  export type AggregateFriend = {
    _count: FriendCountAggregateOutputType | null
    _min: FriendMinAggregateOutputType | null
    _max: FriendMaxAggregateOutputType | null
  }

  export type FriendMinAggregateOutputType = {
    friend_id: string | null
    user1_id: string | null
    user2_id: string | null
    mutual: boolean | null
  }

  export type FriendMaxAggregateOutputType = {
    friend_id: string | null
    user1_id: string | null
    user2_id: string | null
    mutual: boolean | null
  }

  export type FriendCountAggregateOutputType = {
    friend_id: number
    user1_id: number
    user2_id: number
    mutual: number
    _all: number
  }


  export type FriendMinAggregateInputType = {
    friend_id?: true
    user1_id?: true
    user2_id?: true
    mutual?: true
  }

  export type FriendMaxAggregateInputType = {
    friend_id?: true
    user1_id?: true
    user2_id?: true
    mutual?: true
  }

  export type FriendCountAggregateInputType = {
    friend_id?: true
    user1_id?: true
    user2_id?: true
    mutual?: true
    _all?: true
  }

  export type FriendAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Friend to aggregate.
     */
    where?: FriendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friends to fetch.
     */
    orderBy?: FriendOrderByWithRelationInput | FriendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FriendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Friends
    **/
    _count?: true | FriendCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FriendMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FriendMaxAggregateInputType
  }

  export type GetFriendAggregateType<T extends FriendAggregateArgs> = {
        [P in keyof T & keyof AggregateFriend]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFriend[P]>
      : GetScalarType<T[P], AggregateFriend[P]>
  }




  export type FriendGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendWhereInput
    orderBy?: FriendOrderByWithAggregationInput | FriendOrderByWithAggregationInput[]
    by: FriendScalarFieldEnum[] | FriendScalarFieldEnum
    having?: FriendScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FriendCountAggregateInputType | true
    _min?: FriendMinAggregateInputType
    _max?: FriendMaxAggregateInputType
  }

  export type FriendGroupByOutputType = {
    friend_id: string
    user1_id: string
    user2_id: string
    mutual: boolean
    _count: FriendCountAggregateOutputType | null
    _min: FriendMinAggregateOutputType | null
    _max: FriendMaxAggregateOutputType | null
  }

  type GetFriendGroupByPayload<T extends FriendGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FriendGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FriendGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FriendGroupByOutputType[P]>
            : GetScalarType<T[P], FriendGroupByOutputType[P]>
        }
      >
    >


  export type FriendSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    friend_id?: boolean
    user1_id?: boolean
    user2_id?: boolean
    mutual?: boolean
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friend"]>

  export type FriendSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    friend_id?: boolean
    user1_id?: boolean
    user2_id?: boolean
    mutual?: boolean
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friend"]>

  export type FriendSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    friend_id?: boolean
    user1_id?: boolean
    user2_id?: boolean
    mutual?: boolean
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friend"]>

  export type FriendSelectScalar = {
    friend_id?: boolean
    user1_id?: boolean
    user2_id?: boolean
    mutual?: boolean
  }

  export type FriendOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"friend_id" | "user1_id" | "user2_id" | "mutual", ExtArgs["result"]["friend"]>
  export type FriendInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FriendIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FriendIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FriendPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Friend"
    objects: {
      user1: Prisma.$UserPayload<ExtArgs>
      user2: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      friend_id: string
      user1_id: string
      user2_id: string
      mutual: boolean
    }, ExtArgs["result"]["friend"]>
    composites: {}
  }

  type FriendGetPayload<S extends boolean | null | undefined | FriendDefaultArgs> = $Result.GetResult<Prisma.$FriendPayload, S>

  type FriendCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FriendFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FriendCountAggregateInputType | true
    }

  export interface FriendDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Friend'], meta: { name: 'Friend' } }
    /**
     * Find zero or one Friend that matches the filter.
     * @param {FriendFindUniqueArgs} args - Arguments to find a Friend
     * @example
     * // Get one Friend
     * const friend = await prisma.friend.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FriendFindUniqueArgs>(args: SelectSubset<T, FriendFindUniqueArgs<ExtArgs>>): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Friend that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FriendFindUniqueOrThrowArgs} args - Arguments to find a Friend
     * @example
     * // Get one Friend
     * const friend = await prisma.friend.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FriendFindUniqueOrThrowArgs>(args: SelectSubset<T, FriendFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Friend that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendFindFirstArgs} args - Arguments to find a Friend
     * @example
     * // Get one Friend
     * const friend = await prisma.friend.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FriendFindFirstArgs>(args?: SelectSubset<T, FriendFindFirstArgs<ExtArgs>>): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Friend that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendFindFirstOrThrowArgs} args - Arguments to find a Friend
     * @example
     * // Get one Friend
     * const friend = await prisma.friend.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FriendFindFirstOrThrowArgs>(args?: SelectSubset<T, FriendFindFirstOrThrowArgs<ExtArgs>>): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Friends that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Friends
     * const friends = await prisma.friend.findMany()
     * 
     * // Get first 10 Friends
     * const friends = await prisma.friend.findMany({ take: 10 })
     * 
     * // Only select the `friend_id`
     * const friendWithFriend_idOnly = await prisma.friend.findMany({ select: { friend_id: true } })
     * 
     */
    findMany<T extends FriendFindManyArgs>(args?: SelectSubset<T, FriendFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Friend.
     * @param {FriendCreateArgs} args - Arguments to create a Friend.
     * @example
     * // Create one Friend
     * const Friend = await prisma.friend.create({
     *   data: {
     *     // ... data to create a Friend
     *   }
     * })
     * 
     */
    create<T extends FriendCreateArgs>(args: SelectSubset<T, FriendCreateArgs<ExtArgs>>): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Friends.
     * @param {FriendCreateManyArgs} args - Arguments to create many Friends.
     * @example
     * // Create many Friends
     * const friend = await prisma.friend.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FriendCreateManyArgs>(args?: SelectSubset<T, FriendCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Friends and returns the data saved in the database.
     * @param {FriendCreateManyAndReturnArgs} args - Arguments to create many Friends.
     * @example
     * // Create many Friends
     * const friend = await prisma.friend.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Friends and only return the `friend_id`
     * const friendWithFriend_idOnly = await prisma.friend.createManyAndReturn({
     *   select: { friend_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FriendCreateManyAndReturnArgs>(args?: SelectSubset<T, FriendCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Friend.
     * @param {FriendDeleteArgs} args - Arguments to delete one Friend.
     * @example
     * // Delete one Friend
     * const Friend = await prisma.friend.delete({
     *   where: {
     *     // ... filter to delete one Friend
     *   }
     * })
     * 
     */
    delete<T extends FriendDeleteArgs>(args: SelectSubset<T, FriendDeleteArgs<ExtArgs>>): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Friend.
     * @param {FriendUpdateArgs} args - Arguments to update one Friend.
     * @example
     * // Update one Friend
     * const friend = await prisma.friend.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FriendUpdateArgs>(args: SelectSubset<T, FriendUpdateArgs<ExtArgs>>): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Friends.
     * @param {FriendDeleteManyArgs} args - Arguments to filter Friends to delete.
     * @example
     * // Delete a few Friends
     * const { count } = await prisma.friend.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FriendDeleteManyArgs>(args?: SelectSubset<T, FriendDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Friends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Friends
     * const friend = await prisma.friend.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FriendUpdateManyArgs>(args: SelectSubset<T, FriendUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Friends and returns the data updated in the database.
     * @param {FriendUpdateManyAndReturnArgs} args - Arguments to update many Friends.
     * @example
     * // Update many Friends
     * const friend = await prisma.friend.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Friends and only return the `friend_id`
     * const friendWithFriend_idOnly = await prisma.friend.updateManyAndReturn({
     *   select: { friend_id: true },
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
    updateManyAndReturn<T extends FriendUpdateManyAndReturnArgs>(args: SelectSubset<T, FriendUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Friend.
     * @param {FriendUpsertArgs} args - Arguments to update or create a Friend.
     * @example
     * // Update or create a Friend
     * const friend = await prisma.friend.upsert({
     *   create: {
     *     // ... data to create a Friend
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Friend we want to update
     *   }
     * })
     */
    upsert<T extends FriendUpsertArgs>(args: SelectSubset<T, FriendUpsertArgs<ExtArgs>>): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Friends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendCountArgs} args - Arguments to filter Friends to count.
     * @example
     * // Count the number of Friends
     * const count = await prisma.friend.count({
     *   where: {
     *     // ... the filter for the Friends we want to count
     *   }
     * })
    **/
    count<T extends FriendCountArgs>(
      args?: Subset<T, FriendCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FriendCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Friend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FriendAggregateArgs>(args: Subset<T, FriendAggregateArgs>): Prisma.PrismaPromise<GetFriendAggregateType<T>>

    /**
     * Group by Friend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendGroupByArgs} args - Group by arguments.
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
      T extends FriendGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FriendGroupByArgs['orderBy'] }
        : { orderBy?: FriendGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FriendGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFriendGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Friend model
   */
  readonly fields: FriendFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Friend.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FriendClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user1<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user2<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Friend model
   */
  interface FriendFieldRefs {
    readonly friend_id: FieldRef<"Friend", 'String'>
    readonly user1_id: FieldRef<"Friend", 'String'>
    readonly user2_id: FieldRef<"Friend", 'String'>
    readonly mutual: FieldRef<"Friend", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Friend findUnique
   */
  export type FriendFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * Filter, which Friend to fetch.
     */
    where: FriendWhereUniqueInput
  }

  /**
   * Friend findUniqueOrThrow
   */
  export type FriendFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * Filter, which Friend to fetch.
     */
    where: FriendWhereUniqueInput
  }

  /**
   * Friend findFirst
   */
  export type FriendFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * Filter, which Friend to fetch.
     */
    where?: FriendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friends to fetch.
     */
    orderBy?: FriendOrderByWithRelationInput | FriendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Friends.
     */
    cursor?: FriendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Friends.
     */
    distinct?: FriendScalarFieldEnum | FriendScalarFieldEnum[]
  }

  /**
   * Friend findFirstOrThrow
   */
  export type FriendFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * Filter, which Friend to fetch.
     */
    where?: FriendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friends to fetch.
     */
    orderBy?: FriendOrderByWithRelationInput | FriendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Friends.
     */
    cursor?: FriendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Friends.
     */
    distinct?: FriendScalarFieldEnum | FriendScalarFieldEnum[]
  }

  /**
   * Friend findMany
   */
  export type FriendFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * Filter, which Friends to fetch.
     */
    where?: FriendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friends to fetch.
     */
    orderBy?: FriendOrderByWithRelationInput | FriendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Friends.
     */
    cursor?: FriendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friends.
     */
    skip?: number
    distinct?: FriendScalarFieldEnum | FriendScalarFieldEnum[]
  }

  /**
   * Friend create
   */
  export type FriendCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * The data needed to create a Friend.
     */
    data: XOR<FriendCreateInput, FriendUncheckedCreateInput>
  }

  /**
   * Friend createMany
   */
  export type FriendCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Friends.
     */
    data: FriendCreateManyInput | FriendCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Friend createManyAndReturn
   */
  export type FriendCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * The data used to create many Friends.
     */
    data: FriendCreateManyInput | FriendCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Friend update
   */
  export type FriendUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * The data needed to update a Friend.
     */
    data: XOR<FriendUpdateInput, FriendUncheckedUpdateInput>
    /**
     * Choose, which Friend to update.
     */
    where: FriendWhereUniqueInput
  }

  /**
   * Friend updateMany
   */
  export type FriendUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Friends.
     */
    data: XOR<FriendUpdateManyMutationInput, FriendUncheckedUpdateManyInput>
    /**
     * Filter which Friends to update
     */
    where?: FriendWhereInput
    /**
     * Limit how many Friends to update.
     */
    limit?: number
  }

  /**
   * Friend updateManyAndReturn
   */
  export type FriendUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * The data used to update Friends.
     */
    data: XOR<FriendUpdateManyMutationInput, FriendUncheckedUpdateManyInput>
    /**
     * Filter which Friends to update
     */
    where?: FriendWhereInput
    /**
     * Limit how many Friends to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Friend upsert
   */
  export type FriendUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * The filter to search for the Friend to update in case it exists.
     */
    where: FriendWhereUniqueInput
    /**
     * In case the Friend found by the `where` argument doesn't exist, create a new Friend with this data.
     */
    create: XOR<FriendCreateInput, FriendUncheckedCreateInput>
    /**
     * In case the Friend was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FriendUpdateInput, FriendUncheckedUpdateInput>
  }

  /**
   * Friend delete
   */
  export type FriendDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * Filter which Friend to delete.
     */
    where: FriendWhereUniqueInput
  }

  /**
   * Friend deleteMany
   */
  export type FriendDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Friends to delete
     */
    where?: FriendWhereInput
    /**
     * Limit how many Friends to delete.
     */
    limit?: number
  }

  /**
   * Friend without action
   */
  export type FriendDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostMinAggregateOutputType = {
    post_id: string | null
    userId: string | null
    image: string | null
    message: string | null
  }

  export type PostMaxAggregateOutputType = {
    post_id: string | null
    userId: string | null
    image: string | null
    message: string | null
  }

  export type PostCountAggregateOutputType = {
    post_id: number
    userId: number
    image: number
    message: number
    _all: number
  }


  export type PostMinAggregateInputType = {
    post_id?: true
    userId?: true
    image?: true
    message?: true
  }

  export type PostMaxAggregateInputType = {
    post_id?: true
    userId?: true
    image?: true
    message?: true
  }

  export type PostCountAggregateInputType = {
    post_id?: true
    userId?: true
    image?: true
    message?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    post_id: string
    userId: string
    image: string | null
    message: string | null
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    post_id?: boolean
    userId?: boolean
    image?: boolean
    message?: boolean
    preferences?: boolean | Post$preferencesArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    comments?: boolean | Post$commentsArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    post_id?: boolean
    userId?: boolean
    image?: boolean
    message?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    post_id?: boolean
    userId?: boolean
    image?: boolean
    message?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    post_id?: boolean
    userId?: boolean
    image?: boolean
    message?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"post_id" | "userId" | "image" | "message", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    preferences?: boolean | Post$preferencesArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    comments?: boolean | Post$commentsArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      preferences: Prisma.$PostPreferencePayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
      comments: Prisma.$CommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      post_id: string
      userId: string
      image: string | null
      message: string | null
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `post_id`
     * const postWithPost_idOnly = await prisma.post.findMany({ select: { post_id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `post_id`
     * const postWithPost_idOnly = await prisma.post.createManyAndReturn({
     *   select: { post_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `post_id`
     * const postWithPost_idOnly = await prisma.post.updateManyAndReturn({
     *   select: { post_id: true },
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
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
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
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    preferences<T extends Post$preferencesArgs<ExtArgs> = {}>(args?: Subset<T, Post$preferencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPreferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comments<T extends Post$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Post$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly post_id: FieldRef<"Post", 'String'>
    readonly userId: FieldRef<"Post", 'String'>
    readonly image: FieldRef<"Post", 'String'>
    readonly message: FieldRef<"Post", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post.preferences
   */
  export type Post$preferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostPreference
     */
    select?: PostPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostPreference
     */
    omit?: PostPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostPreferenceInclude<ExtArgs> | null
    where?: PostPreferenceWhereInput
    orderBy?: PostPreferenceOrderByWithRelationInput | PostPreferenceOrderByWithRelationInput[]
    cursor?: PostPreferenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostPreferenceScalarFieldEnum | PostPreferenceScalarFieldEnum[]
  }

  /**
   * Post.comments
   */
  export type Post$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentMinAggregateOutputType = {
    comment_id: string | null
    message: string | null
    userId: string | null
    postId: string | null
  }

  export type CommentMaxAggregateOutputType = {
    comment_id: string | null
    message: string | null
    userId: string | null
    postId: string | null
  }

  export type CommentCountAggregateOutputType = {
    comment_id: number
    message: number
    userId: number
    postId: number
    _all: number
  }


  export type CommentMinAggregateInputType = {
    comment_id?: true
    message?: true
    userId?: true
    postId?: true
  }

  export type CommentMaxAggregateInputType = {
    comment_id?: true
    message?: true
    userId?: true
    postId?: true
  }

  export type CommentCountAggregateInputType = {
    comment_id?: true
    message?: true
    userId?: true
    postId?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    comment_id: string
    message: string
    userId: string
    postId: string
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    comment_id?: boolean
    message?: boolean
    userId?: boolean
    postId?: boolean
    preferences?: boolean | Comment$preferencesArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    comment_id?: boolean
    message?: boolean
    userId?: boolean
    postId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    comment_id?: boolean
    message?: boolean
    userId?: boolean
    postId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    comment_id?: boolean
    message?: boolean
    userId?: boolean
    postId?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"comment_id" | "message" | "userId" | "postId", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    preferences?: boolean | Comment$preferencesArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      preferences: Prisma.$CommentPreferencePayload<ExtArgs>[]
      post: Prisma.$PostPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      comment_id: string
      message: string
      userId: string
      postId: string
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `comment_id`
     * const commentWithComment_idOnly = await prisma.comment.findMany({ select: { comment_id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `comment_id`
     * const commentWithComment_idOnly = await prisma.comment.createManyAndReturn({
     *   select: { comment_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `comment_id`
     * const commentWithComment_idOnly = await prisma.comment.updateManyAndReturn({
     *   select: { comment_id: true },
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
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
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
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    preferences<T extends Comment$preferencesArgs<ExtArgs> = {}>(args?: Subset<T, Comment$preferencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPreferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly comment_id: FieldRef<"Comment", 'String'>
    readonly message: FieldRef<"Comment", 'String'>
    readonly userId: FieldRef<"Comment", 'String'>
    readonly postId: FieldRef<"Comment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment.preferences
   */
  export type Comment$preferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentPreference
     */
    select?: CommentPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentPreference
     */
    omit?: CommentPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentPreferenceInclude<ExtArgs> | null
    where?: CommentPreferenceWhereInput
    orderBy?: CommentPreferenceOrderByWithRelationInput | CommentPreferenceOrderByWithRelationInput[]
    cursor?: CommentPreferenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentPreferenceScalarFieldEnum | CommentPreferenceScalarFieldEnum[]
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model PostPreference
   */

  export type AggregatePostPreference = {
    _count: PostPreferenceCountAggregateOutputType | null
    _min: PostPreferenceMinAggregateOutputType | null
    _max: PostPreferenceMaxAggregateOutputType | null
  }

  export type PostPreferenceMinAggregateOutputType = {
    post_preference_id: string | null
    userId: string | null
    postId: string | null
    preference: boolean | null
  }

  export type PostPreferenceMaxAggregateOutputType = {
    post_preference_id: string | null
    userId: string | null
    postId: string | null
    preference: boolean | null
  }

  export type PostPreferenceCountAggregateOutputType = {
    post_preference_id: number
    userId: number
    postId: number
    preference: number
    _all: number
  }


  export type PostPreferenceMinAggregateInputType = {
    post_preference_id?: true
    userId?: true
    postId?: true
    preference?: true
  }

  export type PostPreferenceMaxAggregateInputType = {
    post_preference_id?: true
    userId?: true
    postId?: true
    preference?: true
  }

  export type PostPreferenceCountAggregateInputType = {
    post_preference_id?: true
    userId?: true
    postId?: true
    preference?: true
    _all?: true
  }

  export type PostPreferenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostPreference to aggregate.
     */
    where?: PostPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostPreferences to fetch.
     */
    orderBy?: PostPreferenceOrderByWithRelationInput | PostPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostPreferences
    **/
    _count?: true | PostPreferenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostPreferenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostPreferenceMaxAggregateInputType
  }

  export type GetPostPreferenceAggregateType<T extends PostPreferenceAggregateArgs> = {
        [P in keyof T & keyof AggregatePostPreference]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostPreference[P]>
      : GetScalarType<T[P], AggregatePostPreference[P]>
  }




  export type PostPreferenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostPreferenceWhereInput
    orderBy?: PostPreferenceOrderByWithAggregationInput | PostPreferenceOrderByWithAggregationInput[]
    by: PostPreferenceScalarFieldEnum[] | PostPreferenceScalarFieldEnum
    having?: PostPreferenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostPreferenceCountAggregateInputType | true
    _min?: PostPreferenceMinAggregateInputType
    _max?: PostPreferenceMaxAggregateInputType
  }

  export type PostPreferenceGroupByOutputType = {
    post_preference_id: string
    userId: string
    postId: string
    preference: boolean
    _count: PostPreferenceCountAggregateOutputType | null
    _min: PostPreferenceMinAggregateOutputType | null
    _max: PostPreferenceMaxAggregateOutputType | null
  }

  type GetPostPreferenceGroupByPayload<T extends PostPreferenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostPreferenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostPreferenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostPreferenceGroupByOutputType[P]>
            : GetScalarType<T[P], PostPreferenceGroupByOutputType[P]>
        }
      >
    >


  export type PostPreferenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    post_preference_id?: boolean
    userId?: boolean
    postId?: boolean
    preference?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postPreference"]>

  export type PostPreferenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    post_preference_id?: boolean
    userId?: boolean
    postId?: boolean
    preference?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postPreference"]>

  export type PostPreferenceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    post_preference_id?: boolean
    userId?: boolean
    postId?: boolean
    preference?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postPreference"]>

  export type PostPreferenceSelectScalar = {
    post_preference_id?: boolean
    userId?: boolean
    postId?: boolean
    preference?: boolean
  }

  export type PostPreferenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"post_preference_id" | "userId" | "postId" | "preference", ExtArgs["result"]["postPreference"]>
  export type PostPreferenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type PostPreferenceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type PostPreferenceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }

  export type $PostPreferencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostPreference"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      post: Prisma.$PostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      post_preference_id: string
      userId: string
      postId: string
      preference: boolean
    }, ExtArgs["result"]["postPreference"]>
    composites: {}
  }

  type PostPreferenceGetPayload<S extends boolean | null | undefined | PostPreferenceDefaultArgs> = $Result.GetResult<Prisma.$PostPreferencePayload, S>

  type PostPreferenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostPreferenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostPreferenceCountAggregateInputType | true
    }

  export interface PostPreferenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostPreference'], meta: { name: 'PostPreference' } }
    /**
     * Find zero or one PostPreference that matches the filter.
     * @param {PostPreferenceFindUniqueArgs} args - Arguments to find a PostPreference
     * @example
     * // Get one PostPreference
     * const postPreference = await prisma.postPreference.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostPreferenceFindUniqueArgs>(args: SelectSubset<T, PostPreferenceFindUniqueArgs<ExtArgs>>): Prisma__PostPreferenceClient<$Result.GetResult<Prisma.$PostPreferencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PostPreference that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostPreferenceFindUniqueOrThrowArgs} args - Arguments to find a PostPreference
     * @example
     * // Get one PostPreference
     * const postPreference = await prisma.postPreference.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostPreferenceFindUniqueOrThrowArgs>(args: SelectSubset<T, PostPreferenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostPreferenceClient<$Result.GetResult<Prisma.$PostPreferencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostPreference that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostPreferenceFindFirstArgs} args - Arguments to find a PostPreference
     * @example
     * // Get one PostPreference
     * const postPreference = await prisma.postPreference.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostPreferenceFindFirstArgs>(args?: SelectSubset<T, PostPreferenceFindFirstArgs<ExtArgs>>): Prisma__PostPreferenceClient<$Result.GetResult<Prisma.$PostPreferencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostPreference that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostPreferenceFindFirstOrThrowArgs} args - Arguments to find a PostPreference
     * @example
     * // Get one PostPreference
     * const postPreference = await prisma.postPreference.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostPreferenceFindFirstOrThrowArgs>(args?: SelectSubset<T, PostPreferenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostPreferenceClient<$Result.GetResult<Prisma.$PostPreferencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PostPreferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostPreferenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostPreferences
     * const postPreferences = await prisma.postPreference.findMany()
     * 
     * // Get first 10 PostPreferences
     * const postPreferences = await prisma.postPreference.findMany({ take: 10 })
     * 
     * // Only select the `post_preference_id`
     * const postPreferenceWithPost_preference_idOnly = await prisma.postPreference.findMany({ select: { post_preference_id: true } })
     * 
     */
    findMany<T extends PostPreferenceFindManyArgs>(args?: SelectSubset<T, PostPreferenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPreferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PostPreference.
     * @param {PostPreferenceCreateArgs} args - Arguments to create a PostPreference.
     * @example
     * // Create one PostPreference
     * const PostPreference = await prisma.postPreference.create({
     *   data: {
     *     // ... data to create a PostPreference
     *   }
     * })
     * 
     */
    create<T extends PostPreferenceCreateArgs>(args: SelectSubset<T, PostPreferenceCreateArgs<ExtArgs>>): Prisma__PostPreferenceClient<$Result.GetResult<Prisma.$PostPreferencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PostPreferences.
     * @param {PostPreferenceCreateManyArgs} args - Arguments to create many PostPreferences.
     * @example
     * // Create many PostPreferences
     * const postPreference = await prisma.postPreference.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostPreferenceCreateManyArgs>(args?: SelectSubset<T, PostPreferenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PostPreferences and returns the data saved in the database.
     * @param {PostPreferenceCreateManyAndReturnArgs} args - Arguments to create many PostPreferences.
     * @example
     * // Create many PostPreferences
     * const postPreference = await prisma.postPreference.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PostPreferences and only return the `post_preference_id`
     * const postPreferenceWithPost_preference_idOnly = await prisma.postPreference.createManyAndReturn({
     *   select: { post_preference_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostPreferenceCreateManyAndReturnArgs>(args?: SelectSubset<T, PostPreferenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPreferencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PostPreference.
     * @param {PostPreferenceDeleteArgs} args - Arguments to delete one PostPreference.
     * @example
     * // Delete one PostPreference
     * const PostPreference = await prisma.postPreference.delete({
     *   where: {
     *     // ... filter to delete one PostPreference
     *   }
     * })
     * 
     */
    delete<T extends PostPreferenceDeleteArgs>(args: SelectSubset<T, PostPreferenceDeleteArgs<ExtArgs>>): Prisma__PostPreferenceClient<$Result.GetResult<Prisma.$PostPreferencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PostPreference.
     * @param {PostPreferenceUpdateArgs} args - Arguments to update one PostPreference.
     * @example
     * // Update one PostPreference
     * const postPreference = await prisma.postPreference.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostPreferenceUpdateArgs>(args: SelectSubset<T, PostPreferenceUpdateArgs<ExtArgs>>): Prisma__PostPreferenceClient<$Result.GetResult<Prisma.$PostPreferencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PostPreferences.
     * @param {PostPreferenceDeleteManyArgs} args - Arguments to filter PostPreferences to delete.
     * @example
     * // Delete a few PostPreferences
     * const { count } = await prisma.postPreference.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostPreferenceDeleteManyArgs>(args?: SelectSubset<T, PostPreferenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostPreferenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostPreferences
     * const postPreference = await prisma.postPreference.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostPreferenceUpdateManyArgs>(args: SelectSubset<T, PostPreferenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostPreferences and returns the data updated in the database.
     * @param {PostPreferenceUpdateManyAndReturnArgs} args - Arguments to update many PostPreferences.
     * @example
     * // Update many PostPreferences
     * const postPreference = await prisma.postPreference.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PostPreferences and only return the `post_preference_id`
     * const postPreferenceWithPost_preference_idOnly = await prisma.postPreference.updateManyAndReturn({
     *   select: { post_preference_id: true },
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
    updateManyAndReturn<T extends PostPreferenceUpdateManyAndReturnArgs>(args: SelectSubset<T, PostPreferenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPreferencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PostPreference.
     * @param {PostPreferenceUpsertArgs} args - Arguments to update or create a PostPreference.
     * @example
     * // Update or create a PostPreference
     * const postPreference = await prisma.postPreference.upsert({
     *   create: {
     *     // ... data to create a PostPreference
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostPreference we want to update
     *   }
     * })
     */
    upsert<T extends PostPreferenceUpsertArgs>(args: SelectSubset<T, PostPreferenceUpsertArgs<ExtArgs>>): Prisma__PostPreferenceClient<$Result.GetResult<Prisma.$PostPreferencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PostPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostPreferenceCountArgs} args - Arguments to filter PostPreferences to count.
     * @example
     * // Count the number of PostPreferences
     * const count = await prisma.postPreference.count({
     *   where: {
     *     // ... the filter for the PostPreferences we want to count
     *   }
     * })
    **/
    count<T extends PostPreferenceCountArgs>(
      args?: Subset<T, PostPreferenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostPreferenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostPreference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostPreferenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostPreferenceAggregateArgs>(args: Subset<T, PostPreferenceAggregateArgs>): Prisma.PrismaPromise<GetPostPreferenceAggregateType<T>>

    /**
     * Group by PostPreference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostPreferenceGroupByArgs} args - Group by arguments.
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
      T extends PostPreferenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostPreferenceGroupByArgs['orderBy'] }
        : { orderBy?: PostPreferenceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostPreferenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostPreferenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostPreference model
   */
  readonly fields: PostPreferenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostPreference.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostPreferenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PostPreference model
   */
  interface PostPreferenceFieldRefs {
    readonly post_preference_id: FieldRef<"PostPreference", 'String'>
    readonly userId: FieldRef<"PostPreference", 'String'>
    readonly postId: FieldRef<"PostPreference", 'String'>
    readonly preference: FieldRef<"PostPreference", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * PostPreference findUnique
   */
  export type PostPreferenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostPreference
     */
    select?: PostPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostPreference
     */
    omit?: PostPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which PostPreference to fetch.
     */
    where: PostPreferenceWhereUniqueInput
  }

  /**
   * PostPreference findUniqueOrThrow
   */
  export type PostPreferenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostPreference
     */
    select?: PostPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostPreference
     */
    omit?: PostPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which PostPreference to fetch.
     */
    where: PostPreferenceWhereUniqueInput
  }

  /**
   * PostPreference findFirst
   */
  export type PostPreferenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostPreference
     */
    select?: PostPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostPreference
     */
    omit?: PostPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which PostPreference to fetch.
     */
    where?: PostPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostPreferences to fetch.
     */
    orderBy?: PostPreferenceOrderByWithRelationInput | PostPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostPreferences.
     */
    cursor?: PostPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostPreferences.
     */
    distinct?: PostPreferenceScalarFieldEnum | PostPreferenceScalarFieldEnum[]
  }

  /**
   * PostPreference findFirstOrThrow
   */
  export type PostPreferenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostPreference
     */
    select?: PostPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostPreference
     */
    omit?: PostPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which PostPreference to fetch.
     */
    where?: PostPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostPreferences to fetch.
     */
    orderBy?: PostPreferenceOrderByWithRelationInput | PostPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostPreferences.
     */
    cursor?: PostPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostPreferences.
     */
    distinct?: PostPreferenceScalarFieldEnum | PostPreferenceScalarFieldEnum[]
  }

  /**
   * PostPreference findMany
   */
  export type PostPreferenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostPreference
     */
    select?: PostPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostPreference
     */
    omit?: PostPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which PostPreferences to fetch.
     */
    where?: PostPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostPreferences to fetch.
     */
    orderBy?: PostPreferenceOrderByWithRelationInput | PostPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostPreferences.
     */
    cursor?: PostPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostPreferences.
     */
    skip?: number
    distinct?: PostPreferenceScalarFieldEnum | PostPreferenceScalarFieldEnum[]
  }

  /**
   * PostPreference create
   */
  export type PostPreferenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostPreference
     */
    select?: PostPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostPreference
     */
    omit?: PostPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostPreferenceInclude<ExtArgs> | null
    /**
     * The data needed to create a PostPreference.
     */
    data: XOR<PostPreferenceCreateInput, PostPreferenceUncheckedCreateInput>
  }

  /**
   * PostPreference createMany
   */
  export type PostPreferenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostPreferences.
     */
    data: PostPreferenceCreateManyInput | PostPreferenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostPreference createManyAndReturn
   */
  export type PostPreferenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostPreference
     */
    select?: PostPreferenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostPreference
     */
    omit?: PostPreferenceOmit<ExtArgs> | null
    /**
     * The data used to create many PostPreferences.
     */
    data: PostPreferenceCreateManyInput | PostPreferenceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostPreferenceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostPreference update
   */
  export type PostPreferenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostPreference
     */
    select?: PostPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostPreference
     */
    omit?: PostPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostPreferenceInclude<ExtArgs> | null
    /**
     * The data needed to update a PostPreference.
     */
    data: XOR<PostPreferenceUpdateInput, PostPreferenceUncheckedUpdateInput>
    /**
     * Choose, which PostPreference to update.
     */
    where: PostPreferenceWhereUniqueInput
  }

  /**
   * PostPreference updateMany
   */
  export type PostPreferenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostPreferences.
     */
    data: XOR<PostPreferenceUpdateManyMutationInput, PostPreferenceUncheckedUpdateManyInput>
    /**
     * Filter which PostPreferences to update
     */
    where?: PostPreferenceWhereInput
    /**
     * Limit how many PostPreferences to update.
     */
    limit?: number
  }

  /**
   * PostPreference updateManyAndReturn
   */
  export type PostPreferenceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostPreference
     */
    select?: PostPreferenceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostPreference
     */
    omit?: PostPreferenceOmit<ExtArgs> | null
    /**
     * The data used to update PostPreferences.
     */
    data: XOR<PostPreferenceUpdateManyMutationInput, PostPreferenceUncheckedUpdateManyInput>
    /**
     * Filter which PostPreferences to update
     */
    where?: PostPreferenceWhereInput
    /**
     * Limit how many PostPreferences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostPreferenceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostPreference upsert
   */
  export type PostPreferenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostPreference
     */
    select?: PostPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostPreference
     */
    omit?: PostPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostPreferenceInclude<ExtArgs> | null
    /**
     * The filter to search for the PostPreference to update in case it exists.
     */
    where: PostPreferenceWhereUniqueInput
    /**
     * In case the PostPreference found by the `where` argument doesn't exist, create a new PostPreference with this data.
     */
    create: XOR<PostPreferenceCreateInput, PostPreferenceUncheckedCreateInput>
    /**
     * In case the PostPreference was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostPreferenceUpdateInput, PostPreferenceUncheckedUpdateInput>
  }

  /**
   * PostPreference delete
   */
  export type PostPreferenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostPreference
     */
    select?: PostPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostPreference
     */
    omit?: PostPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostPreferenceInclude<ExtArgs> | null
    /**
     * Filter which PostPreference to delete.
     */
    where: PostPreferenceWhereUniqueInput
  }

  /**
   * PostPreference deleteMany
   */
  export type PostPreferenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostPreferences to delete
     */
    where?: PostPreferenceWhereInput
    /**
     * Limit how many PostPreferences to delete.
     */
    limit?: number
  }

  /**
   * PostPreference without action
   */
  export type PostPreferenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostPreference
     */
    select?: PostPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostPreference
     */
    omit?: PostPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostPreferenceInclude<ExtArgs> | null
  }


  /**
   * Model CommentPreference
   */

  export type AggregateCommentPreference = {
    _count: CommentPreferenceCountAggregateOutputType | null
    _min: CommentPreferenceMinAggregateOutputType | null
    _max: CommentPreferenceMaxAggregateOutputType | null
  }

  export type CommentPreferenceMinAggregateOutputType = {
    comment_preference_id: string | null
    userId: string | null
    commentId: string | null
    preference: boolean | null
  }

  export type CommentPreferenceMaxAggregateOutputType = {
    comment_preference_id: string | null
    userId: string | null
    commentId: string | null
    preference: boolean | null
  }

  export type CommentPreferenceCountAggregateOutputType = {
    comment_preference_id: number
    userId: number
    commentId: number
    preference: number
    _all: number
  }


  export type CommentPreferenceMinAggregateInputType = {
    comment_preference_id?: true
    userId?: true
    commentId?: true
    preference?: true
  }

  export type CommentPreferenceMaxAggregateInputType = {
    comment_preference_id?: true
    userId?: true
    commentId?: true
    preference?: true
  }

  export type CommentPreferenceCountAggregateInputType = {
    comment_preference_id?: true
    userId?: true
    commentId?: true
    preference?: true
    _all?: true
  }

  export type CommentPreferenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommentPreference to aggregate.
     */
    where?: CommentPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommentPreferences to fetch.
     */
    orderBy?: CommentPreferenceOrderByWithRelationInput | CommentPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommentPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommentPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CommentPreferences
    **/
    _count?: true | CommentPreferenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentPreferenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentPreferenceMaxAggregateInputType
  }

  export type GetCommentPreferenceAggregateType<T extends CommentPreferenceAggregateArgs> = {
        [P in keyof T & keyof AggregateCommentPreference]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommentPreference[P]>
      : GetScalarType<T[P], AggregateCommentPreference[P]>
  }




  export type CommentPreferenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentPreferenceWhereInput
    orderBy?: CommentPreferenceOrderByWithAggregationInput | CommentPreferenceOrderByWithAggregationInput[]
    by: CommentPreferenceScalarFieldEnum[] | CommentPreferenceScalarFieldEnum
    having?: CommentPreferenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentPreferenceCountAggregateInputType | true
    _min?: CommentPreferenceMinAggregateInputType
    _max?: CommentPreferenceMaxAggregateInputType
  }

  export type CommentPreferenceGroupByOutputType = {
    comment_preference_id: string
    userId: string
    commentId: string
    preference: boolean
    _count: CommentPreferenceCountAggregateOutputType | null
    _min: CommentPreferenceMinAggregateOutputType | null
    _max: CommentPreferenceMaxAggregateOutputType | null
  }

  type GetCommentPreferenceGroupByPayload<T extends CommentPreferenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentPreferenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentPreferenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentPreferenceGroupByOutputType[P]>
            : GetScalarType<T[P], CommentPreferenceGroupByOutputType[P]>
        }
      >
    >


  export type CommentPreferenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    comment_preference_id?: boolean
    userId?: boolean
    commentId?: boolean
    preference?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    comment?: boolean | CommentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commentPreference"]>

  export type CommentPreferenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    comment_preference_id?: boolean
    userId?: boolean
    commentId?: boolean
    preference?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    comment?: boolean | CommentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commentPreference"]>

  export type CommentPreferenceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    comment_preference_id?: boolean
    userId?: boolean
    commentId?: boolean
    preference?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    comment?: boolean | CommentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commentPreference"]>

  export type CommentPreferenceSelectScalar = {
    comment_preference_id?: boolean
    userId?: boolean
    commentId?: boolean
    preference?: boolean
  }

  export type CommentPreferenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"comment_preference_id" | "userId" | "commentId" | "preference", ExtArgs["result"]["commentPreference"]>
  export type CommentPreferenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    comment?: boolean | CommentDefaultArgs<ExtArgs>
  }
  export type CommentPreferenceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    comment?: boolean | CommentDefaultArgs<ExtArgs>
  }
  export type CommentPreferenceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    comment?: boolean | CommentDefaultArgs<ExtArgs>
  }

  export type $CommentPreferencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CommentPreference"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      comment: Prisma.$CommentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      comment_preference_id: string
      userId: string
      commentId: string
      preference: boolean
    }, ExtArgs["result"]["commentPreference"]>
    composites: {}
  }

  type CommentPreferenceGetPayload<S extends boolean | null | undefined | CommentPreferenceDefaultArgs> = $Result.GetResult<Prisma.$CommentPreferencePayload, S>

  type CommentPreferenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentPreferenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentPreferenceCountAggregateInputType | true
    }

  export interface CommentPreferenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CommentPreference'], meta: { name: 'CommentPreference' } }
    /**
     * Find zero or one CommentPreference that matches the filter.
     * @param {CommentPreferenceFindUniqueArgs} args - Arguments to find a CommentPreference
     * @example
     * // Get one CommentPreference
     * const commentPreference = await prisma.commentPreference.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentPreferenceFindUniqueArgs>(args: SelectSubset<T, CommentPreferenceFindUniqueArgs<ExtArgs>>): Prisma__CommentPreferenceClient<$Result.GetResult<Prisma.$CommentPreferencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CommentPreference that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentPreferenceFindUniqueOrThrowArgs} args - Arguments to find a CommentPreference
     * @example
     * // Get one CommentPreference
     * const commentPreference = await prisma.commentPreference.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentPreferenceFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentPreferenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentPreferenceClient<$Result.GetResult<Prisma.$CommentPreferencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommentPreference that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentPreferenceFindFirstArgs} args - Arguments to find a CommentPreference
     * @example
     * // Get one CommentPreference
     * const commentPreference = await prisma.commentPreference.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentPreferenceFindFirstArgs>(args?: SelectSubset<T, CommentPreferenceFindFirstArgs<ExtArgs>>): Prisma__CommentPreferenceClient<$Result.GetResult<Prisma.$CommentPreferencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommentPreference that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentPreferenceFindFirstOrThrowArgs} args - Arguments to find a CommentPreference
     * @example
     * // Get one CommentPreference
     * const commentPreference = await prisma.commentPreference.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentPreferenceFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentPreferenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentPreferenceClient<$Result.GetResult<Prisma.$CommentPreferencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CommentPreferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentPreferenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CommentPreferences
     * const commentPreferences = await prisma.commentPreference.findMany()
     * 
     * // Get first 10 CommentPreferences
     * const commentPreferences = await prisma.commentPreference.findMany({ take: 10 })
     * 
     * // Only select the `comment_preference_id`
     * const commentPreferenceWithComment_preference_idOnly = await prisma.commentPreference.findMany({ select: { comment_preference_id: true } })
     * 
     */
    findMany<T extends CommentPreferenceFindManyArgs>(args?: SelectSubset<T, CommentPreferenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPreferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CommentPreference.
     * @param {CommentPreferenceCreateArgs} args - Arguments to create a CommentPreference.
     * @example
     * // Create one CommentPreference
     * const CommentPreference = await prisma.commentPreference.create({
     *   data: {
     *     // ... data to create a CommentPreference
     *   }
     * })
     * 
     */
    create<T extends CommentPreferenceCreateArgs>(args: SelectSubset<T, CommentPreferenceCreateArgs<ExtArgs>>): Prisma__CommentPreferenceClient<$Result.GetResult<Prisma.$CommentPreferencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CommentPreferences.
     * @param {CommentPreferenceCreateManyArgs} args - Arguments to create many CommentPreferences.
     * @example
     * // Create many CommentPreferences
     * const commentPreference = await prisma.commentPreference.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentPreferenceCreateManyArgs>(args?: SelectSubset<T, CommentPreferenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CommentPreferences and returns the data saved in the database.
     * @param {CommentPreferenceCreateManyAndReturnArgs} args - Arguments to create many CommentPreferences.
     * @example
     * // Create many CommentPreferences
     * const commentPreference = await prisma.commentPreference.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CommentPreferences and only return the `comment_preference_id`
     * const commentPreferenceWithComment_preference_idOnly = await prisma.commentPreference.createManyAndReturn({
     *   select: { comment_preference_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentPreferenceCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentPreferenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPreferencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CommentPreference.
     * @param {CommentPreferenceDeleteArgs} args - Arguments to delete one CommentPreference.
     * @example
     * // Delete one CommentPreference
     * const CommentPreference = await prisma.commentPreference.delete({
     *   where: {
     *     // ... filter to delete one CommentPreference
     *   }
     * })
     * 
     */
    delete<T extends CommentPreferenceDeleteArgs>(args: SelectSubset<T, CommentPreferenceDeleteArgs<ExtArgs>>): Prisma__CommentPreferenceClient<$Result.GetResult<Prisma.$CommentPreferencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CommentPreference.
     * @param {CommentPreferenceUpdateArgs} args - Arguments to update one CommentPreference.
     * @example
     * // Update one CommentPreference
     * const commentPreference = await prisma.commentPreference.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentPreferenceUpdateArgs>(args: SelectSubset<T, CommentPreferenceUpdateArgs<ExtArgs>>): Prisma__CommentPreferenceClient<$Result.GetResult<Prisma.$CommentPreferencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CommentPreferences.
     * @param {CommentPreferenceDeleteManyArgs} args - Arguments to filter CommentPreferences to delete.
     * @example
     * // Delete a few CommentPreferences
     * const { count } = await prisma.commentPreference.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentPreferenceDeleteManyArgs>(args?: SelectSubset<T, CommentPreferenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommentPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentPreferenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CommentPreferences
     * const commentPreference = await prisma.commentPreference.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentPreferenceUpdateManyArgs>(args: SelectSubset<T, CommentPreferenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommentPreferences and returns the data updated in the database.
     * @param {CommentPreferenceUpdateManyAndReturnArgs} args - Arguments to update many CommentPreferences.
     * @example
     * // Update many CommentPreferences
     * const commentPreference = await prisma.commentPreference.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CommentPreferences and only return the `comment_preference_id`
     * const commentPreferenceWithComment_preference_idOnly = await prisma.commentPreference.updateManyAndReturn({
     *   select: { comment_preference_id: true },
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
    updateManyAndReturn<T extends CommentPreferenceUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentPreferenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPreferencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CommentPreference.
     * @param {CommentPreferenceUpsertArgs} args - Arguments to update or create a CommentPreference.
     * @example
     * // Update or create a CommentPreference
     * const commentPreference = await prisma.commentPreference.upsert({
     *   create: {
     *     // ... data to create a CommentPreference
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CommentPreference we want to update
     *   }
     * })
     */
    upsert<T extends CommentPreferenceUpsertArgs>(args: SelectSubset<T, CommentPreferenceUpsertArgs<ExtArgs>>): Prisma__CommentPreferenceClient<$Result.GetResult<Prisma.$CommentPreferencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CommentPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentPreferenceCountArgs} args - Arguments to filter CommentPreferences to count.
     * @example
     * // Count the number of CommentPreferences
     * const count = await prisma.commentPreference.count({
     *   where: {
     *     // ... the filter for the CommentPreferences we want to count
     *   }
     * })
    **/
    count<T extends CommentPreferenceCountArgs>(
      args?: Subset<T, CommentPreferenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentPreferenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CommentPreference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentPreferenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentPreferenceAggregateArgs>(args: Subset<T, CommentPreferenceAggregateArgs>): Prisma.PrismaPromise<GetCommentPreferenceAggregateType<T>>

    /**
     * Group by CommentPreference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentPreferenceGroupByArgs} args - Group by arguments.
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
      T extends CommentPreferenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentPreferenceGroupByArgs['orderBy'] }
        : { orderBy?: CommentPreferenceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommentPreferenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentPreferenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CommentPreference model
   */
  readonly fields: CommentPreferenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CommentPreference.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentPreferenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comment<T extends CommentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CommentDefaultArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CommentPreference model
   */
  interface CommentPreferenceFieldRefs {
    readonly comment_preference_id: FieldRef<"CommentPreference", 'String'>
    readonly userId: FieldRef<"CommentPreference", 'String'>
    readonly commentId: FieldRef<"CommentPreference", 'String'>
    readonly preference: FieldRef<"CommentPreference", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * CommentPreference findUnique
   */
  export type CommentPreferenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentPreference
     */
    select?: CommentPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentPreference
     */
    omit?: CommentPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which CommentPreference to fetch.
     */
    where: CommentPreferenceWhereUniqueInput
  }

  /**
   * CommentPreference findUniqueOrThrow
   */
  export type CommentPreferenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentPreference
     */
    select?: CommentPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentPreference
     */
    omit?: CommentPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which CommentPreference to fetch.
     */
    where: CommentPreferenceWhereUniqueInput
  }

  /**
   * CommentPreference findFirst
   */
  export type CommentPreferenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentPreference
     */
    select?: CommentPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentPreference
     */
    omit?: CommentPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which CommentPreference to fetch.
     */
    where?: CommentPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommentPreferences to fetch.
     */
    orderBy?: CommentPreferenceOrderByWithRelationInput | CommentPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommentPreferences.
     */
    cursor?: CommentPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommentPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommentPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommentPreferences.
     */
    distinct?: CommentPreferenceScalarFieldEnum | CommentPreferenceScalarFieldEnum[]
  }

  /**
   * CommentPreference findFirstOrThrow
   */
  export type CommentPreferenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentPreference
     */
    select?: CommentPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentPreference
     */
    omit?: CommentPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which CommentPreference to fetch.
     */
    where?: CommentPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommentPreferences to fetch.
     */
    orderBy?: CommentPreferenceOrderByWithRelationInput | CommentPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommentPreferences.
     */
    cursor?: CommentPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommentPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommentPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommentPreferences.
     */
    distinct?: CommentPreferenceScalarFieldEnum | CommentPreferenceScalarFieldEnum[]
  }

  /**
   * CommentPreference findMany
   */
  export type CommentPreferenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentPreference
     */
    select?: CommentPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentPreference
     */
    omit?: CommentPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which CommentPreferences to fetch.
     */
    where?: CommentPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommentPreferences to fetch.
     */
    orderBy?: CommentPreferenceOrderByWithRelationInput | CommentPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CommentPreferences.
     */
    cursor?: CommentPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommentPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommentPreferences.
     */
    skip?: number
    distinct?: CommentPreferenceScalarFieldEnum | CommentPreferenceScalarFieldEnum[]
  }

  /**
   * CommentPreference create
   */
  export type CommentPreferenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentPreference
     */
    select?: CommentPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentPreference
     */
    omit?: CommentPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentPreferenceInclude<ExtArgs> | null
    /**
     * The data needed to create a CommentPreference.
     */
    data: XOR<CommentPreferenceCreateInput, CommentPreferenceUncheckedCreateInput>
  }

  /**
   * CommentPreference createMany
   */
  export type CommentPreferenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CommentPreferences.
     */
    data: CommentPreferenceCreateManyInput | CommentPreferenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CommentPreference createManyAndReturn
   */
  export type CommentPreferenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentPreference
     */
    select?: CommentPreferenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommentPreference
     */
    omit?: CommentPreferenceOmit<ExtArgs> | null
    /**
     * The data used to create many CommentPreferences.
     */
    data: CommentPreferenceCreateManyInput | CommentPreferenceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentPreferenceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CommentPreference update
   */
  export type CommentPreferenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentPreference
     */
    select?: CommentPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentPreference
     */
    omit?: CommentPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentPreferenceInclude<ExtArgs> | null
    /**
     * The data needed to update a CommentPreference.
     */
    data: XOR<CommentPreferenceUpdateInput, CommentPreferenceUncheckedUpdateInput>
    /**
     * Choose, which CommentPreference to update.
     */
    where: CommentPreferenceWhereUniqueInput
  }

  /**
   * CommentPreference updateMany
   */
  export type CommentPreferenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CommentPreferences.
     */
    data: XOR<CommentPreferenceUpdateManyMutationInput, CommentPreferenceUncheckedUpdateManyInput>
    /**
     * Filter which CommentPreferences to update
     */
    where?: CommentPreferenceWhereInput
    /**
     * Limit how many CommentPreferences to update.
     */
    limit?: number
  }

  /**
   * CommentPreference updateManyAndReturn
   */
  export type CommentPreferenceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentPreference
     */
    select?: CommentPreferenceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommentPreference
     */
    omit?: CommentPreferenceOmit<ExtArgs> | null
    /**
     * The data used to update CommentPreferences.
     */
    data: XOR<CommentPreferenceUpdateManyMutationInput, CommentPreferenceUncheckedUpdateManyInput>
    /**
     * Filter which CommentPreferences to update
     */
    where?: CommentPreferenceWhereInput
    /**
     * Limit how many CommentPreferences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentPreferenceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CommentPreference upsert
   */
  export type CommentPreferenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentPreference
     */
    select?: CommentPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentPreference
     */
    omit?: CommentPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentPreferenceInclude<ExtArgs> | null
    /**
     * The filter to search for the CommentPreference to update in case it exists.
     */
    where: CommentPreferenceWhereUniqueInput
    /**
     * In case the CommentPreference found by the `where` argument doesn't exist, create a new CommentPreference with this data.
     */
    create: XOR<CommentPreferenceCreateInput, CommentPreferenceUncheckedCreateInput>
    /**
     * In case the CommentPreference was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentPreferenceUpdateInput, CommentPreferenceUncheckedUpdateInput>
  }

  /**
   * CommentPreference delete
   */
  export type CommentPreferenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentPreference
     */
    select?: CommentPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentPreference
     */
    omit?: CommentPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentPreferenceInclude<ExtArgs> | null
    /**
     * Filter which CommentPreference to delete.
     */
    where: CommentPreferenceWhereUniqueInput
  }

  /**
   * CommentPreference deleteMany
   */
  export type CommentPreferenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommentPreferences to delete
     */
    where?: CommentPreferenceWhereInput
    /**
     * Limit how many CommentPreferences to delete.
     */
    limit?: number
  }

  /**
   * CommentPreference without action
   */
  export type CommentPreferenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentPreference
     */
    select?: CommentPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentPreference
     */
    omit?: CommentPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentPreferenceInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    user_id: 'user_id',
    name: 'name',
    email: 'email',
    address: 'address',
    image: 'image',
    phone: 'phone'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FriendScalarFieldEnum: {
    friend_id: 'friend_id',
    user1_id: 'user1_id',
    user2_id: 'user2_id',
    mutual: 'mutual'
  };

  export type FriendScalarFieldEnum = (typeof FriendScalarFieldEnum)[keyof typeof FriendScalarFieldEnum]


  export const PostScalarFieldEnum: {
    post_id: 'post_id',
    userId: 'userId',
    image: 'image',
    message: 'message'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    comment_id: 'comment_id',
    message: 'message',
    userId: 'userId',
    postId: 'postId'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const PostPreferenceScalarFieldEnum: {
    post_preference_id: 'post_preference_id',
    userId: 'userId',
    postId: 'postId',
    preference: 'preference'
  };

  export type PostPreferenceScalarFieldEnum = (typeof PostPreferenceScalarFieldEnum)[keyof typeof PostPreferenceScalarFieldEnum]


  export const CommentPreferenceScalarFieldEnum: {
    comment_preference_id: 'comment_preference_id',
    userId: 'userId',
    commentId: 'commentId',
    preference: 'preference'
  };

  export type CommentPreferenceScalarFieldEnum = (typeof CommentPreferenceScalarFieldEnum)[keyof typeof CommentPreferenceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    user_id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    address?: StringNullableFilter<"User"> | string | null
    image?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    user1?: FriendListRelationFilter
    user2?: FriendListRelationFilter
    posts?: PostListRelationFilter
    comments?: CommentListRelationFilter
    commentPreferences?: CommentPreferenceListRelationFilter
    postPreference?: PostPreferenceListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address?: SortOrderInput | SortOrder
    image?: SortOrder
    phone?: SortOrderInput | SortOrder
    user1?: FriendOrderByRelationAggregateInput
    user2?: FriendOrderByRelationAggregateInput
    posts?: PostOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    commentPreferences?: CommentPreferenceOrderByRelationAggregateInput
    postPreference?: PostPreferenceOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    user_id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    address?: StringNullableFilter<"User"> | string | null
    image?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    user1?: FriendListRelationFilter
    user2?: FriendListRelationFilter
    posts?: PostListRelationFilter
    comments?: CommentListRelationFilter
    commentPreferences?: CommentPreferenceListRelationFilter
    postPreference?: PostPreferenceListRelationFilter
  }, "user_id" | "email">

  export type UserOrderByWithAggregationInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address?: SortOrderInput | SortOrder
    image?: SortOrder
    phone?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    user_id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    address?: StringNullableWithAggregatesFilter<"User"> | string | null
    image?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type FriendWhereInput = {
    AND?: FriendWhereInput | FriendWhereInput[]
    OR?: FriendWhereInput[]
    NOT?: FriendWhereInput | FriendWhereInput[]
    friend_id?: StringFilter<"Friend"> | string
    user1_id?: StringFilter<"Friend"> | string
    user2_id?: StringFilter<"Friend"> | string
    mutual?: BoolFilter<"Friend"> | boolean
    user1?: XOR<UserScalarRelationFilter, UserWhereInput>
    user2?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FriendOrderByWithRelationInput = {
    friend_id?: SortOrder
    user1_id?: SortOrder
    user2_id?: SortOrder
    mutual?: SortOrder
    user1?: UserOrderByWithRelationInput
    user2?: UserOrderByWithRelationInput
  }

  export type FriendWhereUniqueInput = Prisma.AtLeast<{
    friend_id?: string
    AND?: FriendWhereInput | FriendWhereInput[]
    OR?: FriendWhereInput[]
    NOT?: FriendWhereInput | FriendWhereInput[]
    user1_id?: StringFilter<"Friend"> | string
    user2_id?: StringFilter<"Friend"> | string
    mutual?: BoolFilter<"Friend"> | boolean
    user1?: XOR<UserScalarRelationFilter, UserWhereInput>
    user2?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "friend_id">

  export type FriendOrderByWithAggregationInput = {
    friend_id?: SortOrder
    user1_id?: SortOrder
    user2_id?: SortOrder
    mutual?: SortOrder
    _count?: FriendCountOrderByAggregateInput
    _max?: FriendMaxOrderByAggregateInput
    _min?: FriendMinOrderByAggregateInput
  }

  export type FriendScalarWhereWithAggregatesInput = {
    AND?: FriendScalarWhereWithAggregatesInput | FriendScalarWhereWithAggregatesInput[]
    OR?: FriendScalarWhereWithAggregatesInput[]
    NOT?: FriendScalarWhereWithAggregatesInput | FriendScalarWhereWithAggregatesInput[]
    friend_id?: StringWithAggregatesFilter<"Friend"> | string
    user1_id?: StringWithAggregatesFilter<"Friend"> | string
    user2_id?: StringWithAggregatesFilter<"Friend"> | string
    mutual?: BoolWithAggregatesFilter<"Friend"> | boolean
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    post_id?: StringFilter<"Post"> | string
    userId?: StringFilter<"Post"> | string
    image?: StringNullableFilter<"Post"> | string | null
    message?: StringNullableFilter<"Post"> | string | null
    preferences?: PostPreferenceListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    comments?: CommentListRelationFilter
  }

  export type PostOrderByWithRelationInput = {
    post_id?: SortOrder
    userId?: SortOrder
    image?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    preferences?: PostPreferenceOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
    comments?: CommentOrderByRelationAggregateInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    post_id?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    userId?: StringFilter<"Post"> | string
    image?: StringNullableFilter<"Post"> | string | null
    message?: StringNullableFilter<"Post"> | string | null
    preferences?: PostPreferenceListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    comments?: CommentListRelationFilter
  }, "post_id">

  export type PostOrderByWithAggregationInput = {
    post_id?: SortOrder
    userId?: SortOrder
    image?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    _count?: PostCountOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    post_id?: StringWithAggregatesFilter<"Post"> | string
    userId?: StringWithAggregatesFilter<"Post"> | string
    image?: StringNullableWithAggregatesFilter<"Post"> | string | null
    message?: StringNullableWithAggregatesFilter<"Post"> | string | null
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    comment_id?: StringFilter<"Comment"> | string
    message?: StringFilter<"Comment"> | string
    userId?: StringFilter<"Comment"> | string
    postId?: StringFilter<"Comment"> | string
    preferences?: CommentPreferenceListRelationFilter
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CommentOrderByWithRelationInput = {
    comment_id?: SortOrder
    message?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    preferences?: CommentPreferenceOrderByRelationAggregateInput
    post?: PostOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    comment_id?: string
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    message?: StringFilter<"Comment"> | string
    userId?: StringFilter<"Comment"> | string
    postId?: StringFilter<"Comment"> | string
    preferences?: CommentPreferenceListRelationFilter
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "comment_id">

  export type CommentOrderByWithAggregationInput = {
    comment_id?: SortOrder
    message?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    comment_id?: StringWithAggregatesFilter<"Comment"> | string
    message?: StringWithAggregatesFilter<"Comment"> | string
    userId?: StringWithAggregatesFilter<"Comment"> | string
    postId?: StringWithAggregatesFilter<"Comment"> | string
  }

  export type PostPreferenceWhereInput = {
    AND?: PostPreferenceWhereInput | PostPreferenceWhereInput[]
    OR?: PostPreferenceWhereInput[]
    NOT?: PostPreferenceWhereInput | PostPreferenceWhereInput[]
    post_preference_id?: StringFilter<"PostPreference"> | string
    userId?: StringFilter<"PostPreference"> | string
    postId?: StringFilter<"PostPreference"> | string
    preference?: BoolFilter<"PostPreference"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }

  export type PostPreferenceOrderByWithRelationInput = {
    post_preference_id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    preference?: SortOrder
    user?: UserOrderByWithRelationInput
    post?: PostOrderByWithRelationInput
  }

  export type PostPreferenceWhereUniqueInput = Prisma.AtLeast<{
    post_preference_id?: string
    AND?: PostPreferenceWhereInput | PostPreferenceWhereInput[]
    OR?: PostPreferenceWhereInput[]
    NOT?: PostPreferenceWhereInput | PostPreferenceWhereInput[]
    userId?: StringFilter<"PostPreference"> | string
    postId?: StringFilter<"PostPreference"> | string
    preference?: BoolFilter<"PostPreference"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }, "post_preference_id">

  export type PostPreferenceOrderByWithAggregationInput = {
    post_preference_id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    preference?: SortOrder
    _count?: PostPreferenceCountOrderByAggregateInput
    _max?: PostPreferenceMaxOrderByAggregateInput
    _min?: PostPreferenceMinOrderByAggregateInput
  }

  export type PostPreferenceScalarWhereWithAggregatesInput = {
    AND?: PostPreferenceScalarWhereWithAggregatesInput | PostPreferenceScalarWhereWithAggregatesInput[]
    OR?: PostPreferenceScalarWhereWithAggregatesInput[]
    NOT?: PostPreferenceScalarWhereWithAggregatesInput | PostPreferenceScalarWhereWithAggregatesInput[]
    post_preference_id?: StringWithAggregatesFilter<"PostPreference"> | string
    userId?: StringWithAggregatesFilter<"PostPreference"> | string
    postId?: StringWithAggregatesFilter<"PostPreference"> | string
    preference?: BoolWithAggregatesFilter<"PostPreference"> | boolean
  }

  export type CommentPreferenceWhereInput = {
    AND?: CommentPreferenceWhereInput | CommentPreferenceWhereInput[]
    OR?: CommentPreferenceWhereInput[]
    NOT?: CommentPreferenceWhereInput | CommentPreferenceWhereInput[]
    comment_preference_id?: StringFilter<"CommentPreference"> | string
    userId?: StringFilter<"CommentPreference"> | string
    commentId?: StringFilter<"CommentPreference"> | string
    preference?: BoolFilter<"CommentPreference"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    comment?: XOR<CommentScalarRelationFilter, CommentWhereInput>
  }

  export type CommentPreferenceOrderByWithRelationInput = {
    comment_preference_id?: SortOrder
    userId?: SortOrder
    commentId?: SortOrder
    preference?: SortOrder
    user?: UserOrderByWithRelationInput
    comment?: CommentOrderByWithRelationInput
  }

  export type CommentPreferenceWhereUniqueInput = Prisma.AtLeast<{
    comment_preference_id?: string
    AND?: CommentPreferenceWhereInput | CommentPreferenceWhereInput[]
    OR?: CommentPreferenceWhereInput[]
    NOT?: CommentPreferenceWhereInput | CommentPreferenceWhereInput[]
    userId?: StringFilter<"CommentPreference"> | string
    commentId?: StringFilter<"CommentPreference"> | string
    preference?: BoolFilter<"CommentPreference"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    comment?: XOR<CommentScalarRelationFilter, CommentWhereInput>
  }, "comment_preference_id">

  export type CommentPreferenceOrderByWithAggregationInput = {
    comment_preference_id?: SortOrder
    userId?: SortOrder
    commentId?: SortOrder
    preference?: SortOrder
    _count?: CommentPreferenceCountOrderByAggregateInput
    _max?: CommentPreferenceMaxOrderByAggregateInput
    _min?: CommentPreferenceMinOrderByAggregateInput
  }

  export type CommentPreferenceScalarWhereWithAggregatesInput = {
    AND?: CommentPreferenceScalarWhereWithAggregatesInput | CommentPreferenceScalarWhereWithAggregatesInput[]
    OR?: CommentPreferenceScalarWhereWithAggregatesInput[]
    NOT?: CommentPreferenceScalarWhereWithAggregatesInput | CommentPreferenceScalarWhereWithAggregatesInput[]
    comment_preference_id?: StringWithAggregatesFilter<"CommentPreference"> | string
    userId?: StringWithAggregatesFilter<"CommentPreference"> | string
    commentId?: StringWithAggregatesFilter<"CommentPreference"> | string
    preference?: BoolWithAggregatesFilter<"CommentPreference"> | boolean
  }

  export type UserCreateInput = {
    user_id?: string
    name: string
    email: string
    address?: string | null
    image: string
    phone?: string | null
    user1?: FriendCreateNestedManyWithoutUser1Input
    user2?: FriendCreateNestedManyWithoutUser2Input
    posts?: PostCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    commentPreferences?: CommentPreferenceCreateNestedManyWithoutUserInput
    postPreference?: PostPreferenceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    user_id?: string
    name: string
    email: string
    address?: string | null
    image: string
    phone?: string | null
    user1?: FriendUncheckedCreateNestedManyWithoutUser1Input
    user2?: FriendUncheckedCreateNestedManyWithoutUser2Input
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    commentPreferences?: CommentPreferenceUncheckedCreateNestedManyWithoutUserInput
    postPreference?: PostPreferenceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    user1?: FriendUpdateManyWithoutUser1NestedInput
    user2?: FriendUpdateManyWithoutUser2NestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    commentPreferences?: CommentPreferenceUpdateManyWithoutUserNestedInput
    postPreference?: PostPreferenceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    user1?: FriendUncheckedUpdateManyWithoutUser1NestedInput
    user2?: FriendUncheckedUpdateManyWithoutUser2NestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    commentPreferences?: CommentPreferenceUncheckedUpdateManyWithoutUserNestedInput
    postPreference?: PostPreferenceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    user_id?: string
    name: string
    email: string
    address?: string | null
    image: string
    phone?: string | null
  }

  export type UserUpdateManyMutationInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FriendCreateInput = {
    friend_id?: string
    mutual: boolean
    user1: UserCreateNestedOneWithoutUser1Input
    user2: UserCreateNestedOneWithoutUser2Input
  }

  export type FriendUncheckedCreateInput = {
    friend_id?: string
    user1_id: string
    user2_id: string
    mutual: boolean
  }

  export type FriendUpdateInput = {
    friend_id?: StringFieldUpdateOperationsInput | string
    mutual?: BoolFieldUpdateOperationsInput | boolean
    user1?: UserUpdateOneRequiredWithoutUser1NestedInput
    user2?: UserUpdateOneRequiredWithoutUser2NestedInput
  }

  export type FriendUncheckedUpdateInput = {
    friend_id?: StringFieldUpdateOperationsInput | string
    user1_id?: StringFieldUpdateOperationsInput | string
    user2_id?: StringFieldUpdateOperationsInput | string
    mutual?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FriendCreateManyInput = {
    friend_id?: string
    user1_id: string
    user2_id: string
    mutual: boolean
  }

  export type FriendUpdateManyMutationInput = {
    friend_id?: StringFieldUpdateOperationsInput | string
    mutual?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FriendUncheckedUpdateManyInput = {
    friend_id?: StringFieldUpdateOperationsInput | string
    user1_id?: StringFieldUpdateOperationsInput | string
    user2_id?: StringFieldUpdateOperationsInput | string
    mutual?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PostCreateInput = {
    post_id?: string
    image?: string | null
    message?: string | null
    preferences?: PostPreferenceCreateNestedManyWithoutPostInput
    user: UserCreateNestedOneWithoutPostsInput
    comments?: CommentCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    post_id?: string
    userId: string
    image?: string | null
    message?: string | null
    preferences?: PostPreferenceUncheckedCreateNestedManyWithoutPostInput
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: PostPreferenceUpdateManyWithoutPostNestedInput
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    comments?: CommentUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: PostPreferenceUncheckedUpdateManyWithoutPostNestedInput
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateManyInput = {
    post_id?: string
    userId: string
    image?: string | null
    message?: string | null
  }

  export type PostUpdateManyMutationInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostUncheckedUpdateManyInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommentCreateInput = {
    comment_id?: string
    message: string
    preferences?: CommentPreferenceCreateNestedManyWithoutCommentInput
    post: PostCreateNestedOneWithoutCommentsInput
    user: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    comment_id?: string
    message: string
    userId: string
    postId: string
    preferences?: CommentPreferenceUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentUpdateInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    preferences?: CommentPreferenceUpdateManyWithoutCommentNestedInput
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    preferences?: CommentPreferenceUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentCreateManyInput = {
    comment_id?: string
    message: string
    userId: string
    postId: string
  }

  export type CommentUpdateManyMutationInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type CommentUncheckedUpdateManyInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type PostPreferenceCreateInput = {
    post_preference_id?: string
    preference: boolean
    user: UserCreateNestedOneWithoutPostPreferenceInput
    post: PostCreateNestedOneWithoutPreferencesInput
  }

  export type PostPreferenceUncheckedCreateInput = {
    post_preference_id?: string
    userId: string
    postId: string
    preference: boolean
  }

  export type PostPreferenceUpdateInput = {
    post_preference_id?: StringFieldUpdateOperationsInput | string
    preference?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutPostPreferenceNestedInput
    post?: PostUpdateOneRequiredWithoutPreferencesNestedInput
  }

  export type PostPreferenceUncheckedUpdateInput = {
    post_preference_id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    preference?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PostPreferenceCreateManyInput = {
    post_preference_id?: string
    userId: string
    postId: string
    preference: boolean
  }

  export type PostPreferenceUpdateManyMutationInput = {
    post_preference_id?: StringFieldUpdateOperationsInput | string
    preference?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PostPreferenceUncheckedUpdateManyInput = {
    post_preference_id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    preference?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CommentPreferenceCreateInput = {
    comment_preference_id?: string
    preference: boolean
    user: UserCreateNestedOneWithoutCommentPreferencesInput
    comment: CommentCreateNestedOneWithoutPreferencesInput
  }

  export type CommentPreferenceUncheckedCreateInput = {
    comment_preference_id?: string
    userId: string
    commentId: string
    preference: boolean
  }

  export type CommentPreferenceUpdateInput = {
    comment_preference_id?: StringFieldUpdateOperationsInput | string
    preference?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutCommentPreferencesNestedInput
    comment?: CommentUpdateOneRequiredWithoutPreferencesNestedInput
  }

  export type CommentPreferenceUncheckedUpdateInput = {
    comment_preference_id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    commentId?: StringFieldUpdateOperationsInput | string
    preference?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CommentPreferenceCreateManyInput = {
    comment_preference_id?: string
    userId: string
    commentId: string
    preference: boolean
  }

  export type CommentPreferenceUpdateManyMutationInput = {
    comment_preference_id?: StringFieldUpdateOperationsInput | string
    preference?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CommentPreferenceUncheckedUpdateManyInput = {
    comment_preference_id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    commentId?: StringFieldUpdateOperationsInput | string
    preference?: BoolFieldUpdateOperationsInput | boolean
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

  export type FriendListRelationFilter = {
    every?: FriendWhereInput
    some?: FriendWhereInput
    none?: FriendWhereInput
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type CommentPreferenceListRelationFilter = {
    every?: CommentPreferenceWhereInput
    some?: CommentPreferenceWhereInput
    none?: CommentPreferenceWhereInput
  }

  export type PostPreferenceListRelationFilter = {
    every?: PostPreferenceWhereInput
    some?: PostPreferenceWhereInput
    none?: PostPreferenceWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FriendOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentPreferenceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostPreferenceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address?: SortOrder
    image?: SortOrder
    phone?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address?: SortOrder
    image?: SortOrder
    phone?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address?: SortOrder
    image?: SortOrder
    phone?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type FriendCountOrderByAggregateInput = {
    friend_id?: SortOrder
    user1_id?: SortOrder
    user2_id?: SortOrder
    mutual?: SortOrder
  }

  export type FriendMaxOrderByAggregateInput = {
    friend_id?: SortOrder
    user1_id?: SortOrder
    user2_id?: SortOrder
    mutual?: SortOrder
  }

  export type FriendMinOrderByAggregateInput = {
    friend_id?: SortOrder
    user1_id?: SortOrder
    user2_id?: SortOrder
    mutual?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PostCountOrderByAggregateInput = {
    post_id?: SortOrder
    userId?: SortOrder
    image?: SortOrder
    message?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    post_id?: SortOrder
    userId?: SortOrder
    image?: SortOrder
    message?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    post_id?: SortOrder
    userId?: SortOrder
    image?: SortOrder
    message?: SortOrder
  }

  export type PostScalarRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type CommentCountOrderByAggregateInput = {
    comment_id?: SortOrder
    message?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    comment_id?: SortOrder
    message?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    comment_id?: SortOrder
    message?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type PostPreferenceCountOrderByAggregateInput = {
    post_preference_id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    preference?: SortOrder
  }

  export type PostPreferenceMaxOrderByAggregateInput = {
    post_preference_id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    preference?: SortOrder
  }

  export type PostPreferenceMinOrderByAggregateInput = {
    post_preference_id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    preference?: SortOrder
  }

  export type CommentScalarRelationFilter = {
    is?: CommentWhereInput
    isNot?: CommentWhereInput
  }

  export type CommentPreferenceCountOrderByAggregateInput = {
    comment_preference_id?: SortOrder
    userId?: SortOrder
    commentId?: SortOrder
    preference?: SortOrder
  }

  export type CommentPreferenceMaxOrderByAggregateInput = {
    comment_preference_id?: SortOrder
    userId?: SortOrder
    commentId?: SortOrder
    preference?: SortOrder
  }

  export type CommentPreferenceMinOrderByAggregateInput = {
    comment_preference_id?: SortOrder
    userId?: SortOrder
    commentId?: SortOrder
    preference?: SortOrder
  }

  export type FriendCreateNestedManyWithoutUser1Input = {
    create?: XOR<FriendCreateWithoutUser1Input, FriendUncheckedCreateWithoutUser1Input> | FriendCreateWithoutUser1Input[] | FriendUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: FriendCreateOrConnectWithoutUser1Input | FriendCreateOrConnectWithoutUser1Input[]
    createMany?: FriendCreateManyUser1InputEnvelope
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
  }

  export type FriendCreateNestedManyWithoutUser2Input = {
    create?: XOR<FriendCreateWithoutUser2Input, FriendUncheckedCreateWithoutUser2Input> | FriendCreateWithoutUser2Input[] | FriendUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: FriendCreateOrConnectWithoutUser2Input | FriendCreateOrConnectWithoutUser2Input[]
    createMany?: FriendCreateManyUser2InputEnvelope
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
  }

  export type PostCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type CommentPreferenceCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentPreferenceCreateWithoutUserInput, CommentPreferenceUncheckedCreateWithoutUserInput> | CommentPreferenceCreateWithoutUserInput[] | CommentPreferenceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentPreferenceCreateOrConnectWithoutUserInput | CommentPreferenceCreateOrConnectWithoutUserInput[]
    createMany?: CommentPreferenceCreateManyUserInputEnvelope
    connect?: CommentPreferenceWhereUniqueInput | CommentPreferenceWhereUniqueInput[]
  }

  export type PostPreferenceCreateNestedManyWithoutUserInput = {
    create?: XOR<PostPreferenceCreateWithoutUserInput, PostPreferenceUncheckedCreateWithoutUserInput> | PostPreferenceCreateWithoutUserInput[] | PostPreferenceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostPreferenceCreateOrConnectWithoutUserInput | PostPreferenceCreateOrConnectWithoutUserInput[]
    createMany?: PostPreferenceCreateManyUserInputEnvelope
    connect?: PostPreferenceWhereUniqueInput | PostPreferenceWhereUniqueInput[]
  }

  export type FriendUncheckedCreateNestedManyWithoutUser1Input = {
    create?: XOR<FriendCreateWithoutUser1Input, FriendUncheckedCreateWithoutUser1Input> | FriendCreateWithoutUser1Input[] | FriendUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: FriendCreateOrConnectWithoutUser1Input | FriendCreateOrConnectWithoutUser1Input[]
    createMany?: FriendCreateManyUser1InputEnvelope
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
  }

  export type FriendUncheckedCreateNestedManyWithoutUser2Input = {
    create?: XOR<FriendCreateWithoutUser2Input, FriendUncheckedCreateWithoutUser2Input> | FriendCreateWithoutUser2Input[] | FriendUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: FriendCreateOrConnectWithoutUser2Input | FriendCreateOrConnectWithoutUser2Input[]
    createMany?: FriendCreateManyUser2InputEnvelope
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type CommentPreferenceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentPreferenceCreateWithoutUserInput, CommentPreferenceUncheckedCreateWithoutUserInput> | CommentPreferenceCreateWithoutUserInput[] | CommentPreferenceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentPreferenceCreateOrConnectWithoutUserInput | CommentPreferenceCreateOrConnectWithoutUserInput[]
    createMany?: CommentPreferenceCreateManyUserInputEnvelope
    connect?: CommentPreferenceWhereUniqueInput | CommentPreferenceWhereUniqueInput[]
  }

  export type PostPreferenceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PostPreferenceCreateWithoutUserInput, PostPreferenceUncheckedCreateWithoutUserInput> | PostPreferenceCreateWithoutUserInput[] | PostPreferenceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostPreferenceCreateOrConnectWithoutUserInput | PostPreferenceCreateOrConnectWithoutUserInput[]
    createMany?: PostPreferenceCreateManyUserInputEnvelope
    connect?: PostPreferenceWhereUniqueInput | PostPreferenceWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FriendUpdateManyWithoutUser1NestedInput = {
    create?: XOR<FriendCreateWithoutUser1Input, FriendUncheckedCreateWithoutUser1Input> | FriendCreateWithoutUser1Input[] | FriendUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: FriendCreateOrConnectWithoutUser1Input | FriendCreateOrConnectWithoutUser1Input[]
    upsert?: FriendUpsertWithWhereUniqueWithoutUser1Input | FriendUpsertWithWhereUniqueWithoutUser1Input[]
    createMany?: FriendCreateManyUser1InputEnvelope
    set?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    disconnect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    delete?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    update?: FriendUpdateWithWhereUniqueWithoutUser1Input | FriendUpdateWithWhereUniqueWithoutUser1Input[]
    updateMany?: FriendUpdateManyWithWhereWithoutUser1Input | FriendUpdateManyWithWhereWithoutUser1Input[]
    deleteMany?: FriendScalarWhereInput | FriendScalarWhereInput[]
  }

  export type FriendUpdateManyWithoutUser2NestedInput = {
    create?: XOR<FriendCreateWithoutUser2Input, FriendUncheckedCreateWithoutUser2Input> | FriendCreateWithoutUser2Input[] | FriendUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: FriendCreateOrConnectWithoutUser2Input | FriendCreateOrConnectWithoutUser2Input[]
    upsert?: FriendUpsertWithWhereUniqueWithoutUser2Input | FriendUpsertWithWhereUniqueWithoutUser2Input[]
    createMany?: FriendCreateManyUser2InputEnvelope
    set?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    disconnect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    delete?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    update?: FriendUpdateWithWhereUniqueWithoutUser2Input | FriendUpdateWithWhereUniqueWithoutUser2Input[]
    updateMany?: FriendUpdateManyWithWhereWithoutUser2Input | FriendUpdateManyWithWhereWithoutUser2Input[]
    deleteMany?: FriendScalarWhereInput | FriendScalarWhereInput[]
  }

  export type PostUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutUserInput | PostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutUserInput | PostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostUpdateManyWithWhereWithoutUserInput | PostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type CommentPreferenceUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentPreferenceCreateWithoutUserInput, CommentPreferenceUncheckedCreateWithoutUserInput> | CommentPreferenceCreateWithoutUserInput[] | CommentPreferenceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentPreferenceCreateOrConnectWithoutUserInput | CommentPreferenceCreateOrConnectWithoutUserInput[]
    upsert?: CommentPreferenceUpsertWithWhereUniqueWithoutUserInput | CommentPreferenceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentPreferenceCreateManyUserInputEnvelope
    set?: CommentPreferenceWhereUniqueInput | CommentPreferenceWhereUniqueInput[]
    disconnect?: CommentPreferenceWhereUniqueInput | CommentPreferenceWhereUniqueInput[]
    delete?: CommentPreferenceWhereUniqueInput | CommentPreferenceWhereUniqueInput[]
    connect?: CommentPreferenceWhereUniqueInput | CommentPreferenceWhereUniqueInput[]
    update?: CommentPreferenceUpdateWithWhereUniqueWithoutUserInput | CommentPreferenceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentPreferenceUpdateManyWithWhereWithoutUserInput | CommentPreferenceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentPreferenceScalarWhereInput | CommentPreferenceScalarWhereInput[]
  }

  export type PostPreferenceUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostPreferenceCreateWithoutUserInput, PostPreferenceUncheckedCreateWithoutUserInput> | PostPreferenceCreateWithoutUserInput[] | PostPreferenceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostPreferenceCreateOrConnectWithoutUserInput | PostPreferenceCreateOrConnectWithoutUserInput[]
    upsert?: PostPreferenceUpsertWithWhereUniqueWithoutUserInput | PostPreferenceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostPreferenceCreateManyUserInputEnvelope
    set?: PostPreferenceWhereUniqueInput | PostPreferenceWhereUniqueInput[]
    disconnect?: PostPreferenceWhereUniqueInput | PostPreferenceWhereUniqueInput[]
    delete?: PostPreferenceWhereUniqueInput | PostPreferenceWhereUniqueInput[]
    connect?: PostPreferenceWhereUniqueInput | PostPreferenceWhereUniqueInput[]
    update?: PostPreferenceUpdateWithWhereUniqueWithoutUserInput | PostPreferenceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostPreferenceUpdateManyWithWhereWithoutUserInput | PostPreferenceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostPreferenceScalarWhereInput | PostPreferenceScalarWhereInput[]
  }

  export type FriendUncheckedUpdateManyWithoutUser1NestedInput = {
    create?: XOR<FriendCreateWithoutUser1Input, FriendUncheckedCreateWithoutUser1Input> | FriendCreateWithoutUser1Input[] | FriendUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: FriendCreateOrConnectWithoutUser1Input | FriendCreateOrConnectWithoutUser1Input[]
    upsert?: FriendUpsertWithWhereUniqueWithoutUser1Input | FriendUpsertWithWhereUniqueWithoutUser1Input[]
    createMany?: FriendCreateManyUser1InputEnvelope
    set?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    disconnect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    delete?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    update?: FriendUpdateWithWhereUniqueWithoutUser1Input | FriendUpdateWithWhereUniqueWithoutUser1Input[]
    updateMany?: FriendUpdateManyWithWhereWithoutUser1Input | FriendUpdateManyWithWhereWithoutUser1Input[]
    deleteMany?: FriendScalarWhereInput | FriendScalarWhereInput[]
  }

  export type FriendUncheckedUpdateManyWithoutUser2NestedInput = {
    create?: XOR<FriendCreateWithoutUser2Input, FriendUncheckedCreateWithoutUser2Input> | FriendCreateWithoutUser2Input[] | FriendUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: FriendCreateOrConnectWithoutUser2Input | FriendCreateOrConnectWithoutUser2Input[]
    upsert?: FriendUpsertWithWhereUniqueWithoutUser2Input | FriendUpsertWithWhereUniqueWithoutUser2Input[]
    createMany?: FriendCreateManyUser2InputEnvelope
    set?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    disconnect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    delete?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    update?: FriendUpdateWithWhereUniqueWithoutUser2Input | FriendUpdateWithWhereUniqueWithoutUser2Input[]
    updateMany?: FriendUpdateManyWithWhereWithoutUser2Input | FriendUpdateManyWithWhereWithoutUser2Input[]
    deleteMany?: FriendScalarWhereInput | FriendScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutUserInput | PostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutUserInput | PostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostUpdateManyWithWhereWithoutUserInput | PostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type CommentPreferenceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentPreferenceCreateWithoutUserInput, CommentPreferenceUncheckedCreateWithoutUserInput> | CommentPreferenceCreateWithoutUserInput[] | CommentPreferenceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentPreferenceCreateOrConnectWithoutUserInput | CommentPreferenceCreateOrConnectWithoutUserInput[]
    upsert?: CommentPreferenceUpsertWithWhereUniqueWithoutUserInput | CommentPreferenceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentPreferenceCreateManyUserInputEnvelope
    set?: CommentPreferenceWhereUniqueInput | CommentPreferenceWhereUniqueInput[]
    disconnect?: CommentPreferenceWhereUniqueInput | CommentPreferenceWhereUniqueInput[]
    delete?: CommentPreferenceWhereUniqueInput | CommentPreferenceWhereUniqueInput[]
    connect?: CommentPreferenceWhereUniqueInput | CommentPreferenceWhereUniqueInput[]
    update?: CommentPreferenceUpdateWithWhereUniqueWithoutUserInput | CommentPreferenceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentPreferenceUpdateManyWithWhereWithoutUserInput | CommentPreferenceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentPreferenceScalarWhereInput | CommentPreferenceScalarWhereInput[]
  }

  export type PostPreferenceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostPreferenceCreateWithoutUserInput, PostPreferenceUncheckedCreateWithoutUserInput> | PostPreferenceCreateWithoutUserInput[] | PostPreferenceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostPreferenceCreateOrConnectWithoutUserInput | PostPreferenceCreateOrConnectWithoutUserInput[]
    upsert?: PostPreferenceUpsertWithWhereUniqueWithoutUserInput | PostPreferenceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostPreferenceCreateManyUserInputEnvelope
    set?: PostPreferenceWhereUniqueInput | PostPreferenceWhereUniqueInput[]
    disconnect?: PostPreferenceWhereUniqueInput | PostPreferenceWhereUniqueInput[]
    delete?: PostPreferenceWhereUniqueInput | PostPreferenceWhereUniqueInput[]
    connect?: PostPreferenceWhereUniqueInput | PostPreferenceWhereUniqueInput[]
    update?: PostPreferenceUpdateWithWhereUniqueWithoutUserInput | PostPreferenceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostPreferenceUpdateManyWithWhereWithoutUserInput | PostPreferenceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostPreferenceScalarWhereInput | PostPreferenceScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUser1Input = {
    create?: XOR<UserCreateWithoutUser1Input, UserUncheckedCreateWithoutUser1Input>
    connectOrCreate?: UserCreateOrConnectWithoutUser1Input
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUser2Input = {
    create?: XOR<UserCreateWithoutUser2Input, UserUncheckedCreateWithoutUser2Input>
    connectOrCreate?: UserCreateOrConnectWithoutUser2Input
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutUser1NestedInput = {
    create?: XOR<UserCreateWithoutUser1Input, UserUncheckedCreateWithoutUser1Input>
    connectOrCreate?: UserCreateOrConnectWithoutUser1Input
    upsert?: UserUpsertWithoutUser1Input
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUser1Input, UserUpdateWithoutUser1Input>, UserUncheckedUpdateWithoutUser1Input>
  }

  export type UserUpdateOneRequiredWithoutUser2NestedInput = {
    create?: XOR<UserCreateWithoutUser2Input, UserUncheckedCreateWithoutUser2Input>
    connectOrCreate?: UserCreateOrConnectWithoutUser2Input
    upsert?: UserUpsertWithoutUser2Input
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUser2Input, UserUpdateWithoutUser2Input>, UserUncheckedUpdateWithoutUser2Input>
  }

  export type PostPreferenceCreateNestedManyWithoutPostInput = {
    create?: XOR<PostPreferenceCreateWithoutPostInput, PostPreferenceUncheckedCreateWithoutPostInput> | PostPreferenceCreateWithoutPostInput[] | PostPreferenceUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostPreferenceCreateOrConnectWithoutPostInput | PostPreferenceCreateOrConnectWithoutPostInput[]
    createMany?: PostPreferenceCreateManyPostInputEnvelope
    connect?: PostPreferenceWhereUniqueInput | PostPreferenceWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutPostInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type PostPreferenceUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<PostPreferenceCreateWithoutPostInput, PostPreferenceUncheckedCreateWithoutPostInput> | PostPreferenceCreateWithoutPostInput[] | PostPreferenceUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostPreferenceCreateOrConnectWithoutPostInput | PostPreferenceCreateOrConnectWithoutPostInput[]
    createMany?: PostPreferenceCreateManyPostInputEnvelope
    connect?: PostPreferenceWhereUniqueInput | PostPreferenceWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type PostPreferenceUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostPreferenceCreateWithoutPostInput, PostPreferenceUncheckedCreateWithoutPostInput> | PostPreferenceCreateWithoutPostInput[] | PostPreferenceUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostPreferenceCreateOrConnectWithoutPostInput | PostPreferenceCreateOrConnectWithoutPostInput[]
    upsert?: PostPreferenceUpsertWithWhereUniqueWithoutPostInput | PostPreferenceUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostPreferenceCreateManyPostInputEnvelope
    set?: PostPreferenceWhereUniqueInput | PostPreferenceWhereUniqueInput[]
    disconnect?: PostPreferenceWhereUniqueInput | PostPreferenceWhereUniqueInput[]
    delete?: PostPreferenceWhereUniqueInput | PostPreferenceWhereUniqueInput[]
    connect?: PostPreferenceWhereUniqueInput | PostPreferenceWhereUniqueInput[]
    update?: PostPreferenceUpdateWithWhereUniqueWithoutPostInput | PostPreferenceUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostPreferenceUpdateManyWithWhereWithoutPostInput | PostPreferenceUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostPreferenceScalarWhereInput | PostPreferenceScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type CommentUpdateManyWithoutPostNestedInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutPostInput | CommentUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutPostInput | CommentUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutPostInput | CommentUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type PostPreferenceUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostPreferenceCreateWithoutPostInput, PostPreferenceUncheckedCreateWithoutPostInput> | PostPreferenceCreateWithoutPostInput[] | PostPreferenceUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostPreferenceCreateOrConnectWithoutPostInput | PostPreferenceCreateOrConnectWithoutPostInput[]
    upsert?: PostPreferenceUpsertWithWhereUniqueWithoutPostInput | PostPreferenceUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostPreferenceCreateManyPostInputEnvelope
    set?: PostPreferenceWhereUniqueInput | PostPreferenceWhereUniqueInput[]
    disconnect?: PostPreferenceWhereUniqueInput | PostPreferenceWhereUniqueInput[]
    delete?: PostPreferenceWhereUniqueInput | PostPreferenceWhereUniqueInput[]
    connect?: PostPreferenceWhereUniqueInput | PostPreferenceWhereUniqueInput[]
    update?: PostPreferenceUpdateWithWhereUniqueWithoutPostInput | PostPreferenceUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostPreferenceUpdateManyWithWhereWithoutPostInput | PostPreferenceUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostPreferenceScalarWhereInput | PostPreferenceScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutPostInput | CommentUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutPostInput | CommentUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutPostInput | CommentUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type CommentPreferenceCreateNestedManyWithoutCommentInput = {
    create?: XOR<CommentPreferenceCreateWithoutCommentInput, CommentPreferenceUncheckedCreateWithoutCommentInput> | CommentPreferenceCreateWithoutCommentInput[] | CommentPreferenceUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: CommentPreferenceCreateOrConnectWithoutCommentInput | CommentPreferenceCreateOrConnectWithoutCommentInput[]
    createMany?: CommentPreferenceCreateManyCommentInputEnvelope
    connect?: CommentPreferenceWhereUniqueInput | CommentPreferenceWhereUniqueInput[]
  }

  export type PostCreateNestedOneWithoutCommentsInput = {
    create?: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PostCreateOrConnectWithoutCommentsInput
    connect?: PostWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type CommentPreferenceUncheckedCreateNestedManyWithoutCommentInput = {
    create?: XOR<CommentPreferenceCreateWithoutCommentInput, CommentPreferenceUncheckedCreateWithoutCommentInput> | CommentPreferenceCreateWithoutCommentInput[] | CommentPreferenceUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: CommentPreferenceCreateOrConnectWithoutCommentInput | CommentPreferenceCreateOrConnectWithoutCommentInput[]
    createMany?: CommentPreferenceCreateManyCommentInputEnvelope
    connect?: CommentPreferenceWhereUniqueInput | CommentPreferenceWhereUniqueInput[]
  }

  export type CommentPreferenceUpdateManyWithoutCommentNestedInput = {
    create?: XOR<CommentPreferenceCreateWithoutCommentInput, CommentPreferenceUncheckedCreateWithoutCommentInput> | CommentPreferenceCreateWithoutCommentInput[] | CommentPreferenceUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: CommentPreferenceCreateOrConnectWithoutCommentInput | CommentPreferenceCreateOrConnectWithoutCommentInput[]
    upsert?: CommentPreferenceUpsertWithWhereUniqueWithoutCommentInput | CommentPreferenceUpsertWithWhereUniqueWithoutCommentInput[]
    createMany?: CommentPreferenceCreateManyCommentInputEnvelope
    set?: CommentPreferenceWhereUniqueInput | CommentPreferenceWhereUniqueInput[]
    disconnect?: CommentPreferenceWhereUniqueInput | CommentPreferenceWhereUniqueInput[]
    delete?: CommentPreferenceWhereUniqueInput | CommentPreferenceWhereUniqueInput[]
    connect?: CommentPreferenceWhereUniqueInput | CommentPreferenceWhereUniqueInput[]
    update?: CommentPreferenceUpdateWithWhereUniqueWithoutCommentInput | CommentPreferenceUpdateWithWhereUniqueWithoutCommentInput[]
    updateMany?: CommentPreferenceUpdateManyWithWhereWithoutCommentInput | CommentPreferenceUpdateManyWithWhereWithoutCommentInput[]
    deleteMany?: CommentPreferenceScalarWhereInput | CommentPreferenceScalarWhereInput[]
  }

  export type PostUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PostCreateOrConnectWithoutCommentsInput
    upsert?: PostUpsertWithoutCommentsInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutCommentsInput, PostUpdateWithoutCommentsInput>, PostUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type CommentPreferenceUncheckedUpdateManyWithoutCommentNestedInput = {
    create?: XOR<CommentPreferenceCreateWithoutCommentInput, CommentPreferenceUncheckedCreateWithoutCommentInput> | CommentPreferenceCreateWithoutCommentInput[] | CommentPreferenceUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: CommentPreferenceCreateOrConnectWithoutCommentInput | CommentPreferenceCreateOrConnectWithoutCommentInput[]
    upsert?: CommentPreferenceUpsertWithWhereUniqueWithoutCommentInput | CommentPreferenceUpsertWithWhereUniqueWithoutCommentInput[]
    createMany?: CommentPreferenceCreateManyCommentInputEnvelope
    set?: CommentPreferenceWhereUniqueInput | CommentPreferenceWhereUniqueInput[]
    disconnect?: CommentPreferenceWhereUniqueInput | CommentPreferenceWhereUniqueInput[]
    delete?: CommentPreferenceWhereUniqueInput | CommentPreferenceWhereUniqueInput[]
    connect?: CommentPreferenceWhereUniqueInput | CommentPreferenceWhereUniqueInput[]
    update?: CommentPreferenceUpdateWithWhereUniqueWithoutCommentInput | CommentPreferenceUpdateWithWhereUniqueWithoutCommentInput[]
    updateMany?: CommentPreferenceUpdateManyWithWhereWithoutCommentInput | CommentPreferenceUpdateManyWithWhereWithoutCommentInput[]
    deleteMany?: CommentPreferenceScalarWhereInput | CommentPreferenceScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPostPreferenceInput = {
    create?: XOR<UserCreateWithoutPostPreferenceInput, UserUncheckedCreateWithoutPostPreferenceInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostPreferenceInput
    connect?: UserWhereUniqueInput
  }

  export type PostCreateNestedOneWithoutPreferencesInput = {
    create?: XOR<PostCreateWithoutPreferencesInput, PostUncheckedCreateWithoutPreferencesInput>
    connectOrCreate?: PostCreateOrConnectWithoutPreferencesInput
    connect?: PostWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPostPreferenceNestedInput = {
    create?: XOR<UserCreateWithoutPostPreferenceInput, UserUncheckedCreateWithoutPostPreferenceInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostPreferenceInput
    upsert?: UserUpsertWithoutPostPreferenceInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostPreferenceInput, UserUpdateWithoutPostPreferenceInput>, UserUncheckedUpdateWithoutPostPreferenceInput>
  }

  export type PostUpdateOneRequiredWithoutPreferencesNestedInput = {
    create?: XOR<PostCreateWithoutPreferencesInput, PostUncheckedCreateWithoutPreferencesInput>
    connectOrCreate?: PostCreateOrConnectWithoutPreferencesInput
    upsert?: PostUpsertWithoutPreferencesInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutPreferencesInput, PostUpdateWithoutPreferencesInput>, PostUncheckedUpdateWithoutPreferencesInput>
  }

  export type UserCreateNestedOneWithoutCommentPreferencesInput = {
    create?: XOR<UserCreateWithoutCommentPreferencesInput, UserUncheckedCreateWithoutCommentPreferencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentPreferencesInput
    connect?: UserWhereUniqueInput
  }

  export type CommentCreateNestedOneWithoutPreferencesInput = {
    create?: XOR<CommentCreateWithoutPreferencesInput, CommentUncheckedCreateWithoutPreferencesInput>
    connectOrCreate?: CommentCreateOrConnectWithoutPreferencesInput
    connect?: CommentWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCommentPreferencesNestedInput = {
    create?: XOR<UserCreateWithoutCommentPreferencesInput, UserUncheckedCreateWithoutCommentPreferencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentPreferencesInput
    upsert?: UserUpsertWithoutCommentPreferencesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentPreferencesInput, UserUpdateWithoutCommentPreferencesInput>, UserUncheckedUpdateWithoutCommentPreferencesInput>
  }

  export type CommentUpdateOneRequiredWithoutPreferencesNestedInput = {
    create?: XOR<CommentCreateWithoutPreferencesInput, CommentUncheckedCreateWithoutPreferencesInput>
    connectOrCreate?: CommentCreateOrConnectWithoutPreferencesInput
    upsert?: CommentUpsertWithoutPreferencesInput
    connect?: CommentWhereUniqueInput
    update?: XOR<XOR<CommentUpdateToOneWithWhereWithoutPreferencesInput, CommentUpdateWithoutPreferencesInput>, CommentUncheckedUpdateWithoutPreferencesInput>
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

  export type FriendCreateWithoutUser1Input = {
    friend_id?: string
    mutual: boolean
    user2: UserCreateNestedOneWithoutUser2Input
  }

  export type FriendUncheckedCreateWithoutUser1Input = {
    friend_id?: string
    user2_id: string
    mutual: boolean
  }

  export type FriendCreateOrConnectWithoutUser1Input = {
    where: FriendWhereUniqueInput
    create: XOR<FriendCreateWithoutUser1Input, FriendUncheckedCreateWithoutUser1Input>
  }

  export type FriendCreateManyUser1InputEnvelope = {
    data: FriendCreateManyUser1Input | FriendCreateManyUser1Input[]
    skipDuplicates?: boolean
  }

  export type FriendCreateWithoutUser2Input = {
    friend_id?: string
    mutual: boolean
    user1: UserCreateNestedOneWithoutUser1Input
  }

  export type FriendUncheckedCreateWithoutUser2Input = {
    friend_id?: string
    user1_id: string
    mutual: boolean
  }

  export type FriendCreateOrConnectWithoutUser2Input = {
    where: FriendWhereUniqueInput
    create: XOR<FriendCreateWithoutUser2Input, FriendUncheckedCreateWithoutUser2Input>
  }

  export type FriendCreateManyUser2InputEnvelope = {
    data: FriendCreateManyUser2Input | FriendCreateManyUser2Input[]
    skipDuplicates?: boolean
  }

  export type PostCreateWithoutUserInput = {
    post_id?: string
    image?: string | null
    message?: string | null
    preferences?: PostPreferenceCreateNestedManyWithoutPostInput
    comments?: CommentCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutUserInput = {
    post_id?: string
    image?: string | null
    message?: string | null
    preferences?: PostPreferenceUncheckedCreateNestedManyWithoutPostInput
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutUserInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostCreateManyUserInputEnvelope = {
    data: PostCreateManyUserInput | PostCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutUserInput = {
    comment_id?: string
    message: string
    preferences?: CommentPreferenceCreateNestedManyWithoutCommentInput
    post: PostCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutUserInput = {
    comment_id?: string
    message: string
    postId: string
    preferences?: CommentPreferenceUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentCreateOrConnectWithoutUserInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentCreateManyUserInputEnvelope = {
    data: CommentCreateManyUserInput | CommentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommentPreferenceCreateWithoutUserInput = {
    comment_preference_id?: string
    preference: boolean
    comment: CommentCreateNestedOneWithoutPreferencesInput
  }

  export type CommentPreferenceUncheckedCreateWithoutUserInput = {
    comment_preference_id?: string
    commentId: string
    preference: boolean
  }

  export type CommentPreferenceCreateOrConnectWithoutUserInput = {
    where: CommentPreferenceWhereUniqueInput
    create: XOR<CommentPreferenceCreateWithoutUserInput, CommentPreferenceUncheckedCreateWithoutUserInput>
  }

  export type CommentPreferenceCreateManyUserInputEnvelope = {
    data: CommentPreferenceCreateManyUserInput | CommentPreferenceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PostPreferenceCreateWithoutUserInput = {
    post_preference_id?: string
    preference: boolean
    post: PostCreateNestedOneWithoutPreferencesInput
  }

  export type PostPreferenceUncheckedCreateWithoutUserInput = {
    post_preference_id?: string
    postId: string
    preference: boolean
  }

  export type PostPreferenceCreateOrConnectWithoutUserInput = {
    where: PostPreferenceWhereUniqueInput
    create: XOR<PostPreferenceCreateWithoutUserInput, PostPreferenceUncheckedCreateWithoutUserInput>
  }

  export type PostPreferenceCreateManyUserInputEnvelope = {
    data: PostPreferenceCreateManyUserInput | PostPreferenceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FriendUpsertWithWhereUniqueWithoutUser1Input = {
    where: FriendWhereUniqueInput
    update: XOR<FriendUpdateWithoutUser1Input, FriendUncheckedUpdateWithoutUser1Input>
    create: XOR<FriendCreateWithoutUser1Input, FriendUncheckedCreateWithoutUser1Input>
  }

  export type FriendUpdateWithWhereUniqueWithoutUser1Input = {
    where: FriendWhereUniqueInput
    data: XOR<FriendUpdateWithoutUser1Input, FriendUncheckedUpdateWithoutUser1Input>
  }

  export type FriendUpdateManyWithWhereWithoutUser1Input = {
    where: FriendScalarWhereInput
    data: XOR<FriendUpdateManyMutationInput, FriendUncheckedUpdateManyWithoutUser1Input>
  }

  export type FriendScalarWhereInput = {
    AND?: FriendScalarWhereInput | FriendScalarWhereInput[]
    OR?: FriendScalarWhereInput[]
    NOT?: FriendScalarWhereInput | FriendScalarWhereInput[]
    friend_id?: StringFilter<"Friend"> | string
    user1_id?: StringFilter<"Friend"> | string
    user2_id?: StringFilter<"Friend"> | string
    mutual?: BoolFilter<"Friend"> | boolean
  }

  export type FriendUpsertWithWhereUniqueWithoutUser2Input = {
    where: FriendWhereUniqueInput
    update: XOR<FriendUpdateWithoutUser2Input, FriendUncheckedUpdateWithoutUser2Input>
    create: XOR<FriendCreateWithoutUser2Input, FriendUncheckedCreateWithoutUser2Input>
  }

  export type FriendUpdateWithWhereUniqueWithoutUser2Input = {
    where: FriendWhereUniqueInput
    data: XOR<FriendUpdateWithoutUser2Input, FriendUncheckedUpdateWithoutUser2Input>
  }

  export type FriendUpdateManyWithWhereWithoutUser2Input = {
    where: FriendScalarWhereInput
    data: XOR<FriendUpdateManyMutationInput, FriendUncheckedUpdateManyWithoutUser2Input>
  }

  export type PostUpsertWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostUpdateWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
  }

  export type PostUpdateManyWithWhereWithoutUserInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutUserInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    post_id?: StringFilter<"Post"> | string
    userId?: StringFilter<"Post"> | string
    image?: StringNullableFilter<"Post"> | string | null
    message?: StringNullableFilter<"Post"> | string | null
  }

  export type CommentUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
  }

  export type CommentUpdateManyWithWhereWithoutUserInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    comment_id?: StringFilter<"Comment"> | string
    message?: StringFilter<"Comment"> | string
    userId?: StringFilter<"Comment"> | string
    postId?: StringFilter<"Comment"> | string
  }

  export type CommentPreferenceUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentPreferenceWhereUniqueInput
    update: XOR<CommentPreferenceUpdateWithoutUserInput, CommentPreferenceUncheckedUpdateWithoutUserInput>
    create: XOR<CommentPreferenceCreateWithoutUserInput, CommentPreferenceUncheckedCreateWithoutUserInput>
  }

  export type CommentPreferenceUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentPreferenceWhereUniqueInput
    data: XOR<CommentPreferenceUpdateWithoutUserInput, CommentPreferenceUncheckedUpdateWithoutUserInput>
  }

  export type CommentPreferenceUpdateManyWithWhereWithoutUserInput = {
    where: CommentPreferenceScalarWhereInput
    data: XOR<CommentPreferenceUpdateManyMutationInput, CommentPreferenceUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentPreferenceScalarWhereInput = {
    AND?: CommentPreferenceScalarWhereInput | CommentPreferenceScalarWhereInput[]
    OR?: CommentPreferenceScalarWhereInput[]
    NOT?: CommentPreferenceScalarWhereInput | CommentPreferenceScalarWhereInput[]
    comment_preference_id?: StringFilter<"CommentPreference"> | string
    userId?: StringFilter<"CommentPreference"> | string
    commentId?: StringFilter<"CommentPreference"> | string
    preference?: BoolFilter<"CommentPreference"> | boolean
  }

  export type PostPreferenceUpsertWithWhereUniqueWithoutUserInput = {
    where: PostPreferenceWhereUniqueInput
    update: XOR<PostPreferenceUpdateWithoutUserInput, PostPreferenceUncheckedUpdateWithoutUserInput>
    create: XOR<PostPreferenceCreateWithoutUserInput, PostPreferenceUncheckedCreateWithoutUserInput>
  }

  export type PostPreferenceUpdateWithWhereUniqueWithoutUserInput = {
    where: PostPreferenceWhereUniqueInput
    data: XOR<PostPreferenceUpdateWithoutUserInput, PostPreferenceUncheckedUpdateWithoutUserInput>
  }

  export type PostPreferenceUpdateManyWithWhereWithoutUserInput = {
    where: PostPreferenceScalarWhereInput
    data: XOR<PostPreferenceUpdateManyMutationInput, PostPreferenceUncheckedUpdateManyWithoutUserInput>
  }

  export type PostPreferenceScalarWhereInput = {
    AND?: PostPreferenceScalarWhereInput | PostPreferenceScalarWhereInput[]
    OR?: PostPreferenceScalarWhereInput[]
    NOT?: PostPreferenceScalarWhereInput | PostPreferenceScalarWhereInput[]
    post_preference_id?: StringFilter<"PostPreference"> | string
    userId?: StringFilter<"PostPreference"> | string
    postId?: StringFilter<"PostPreference"> | string
    preference?: BoolFilter<"PostPreference"> | boolean
  }

  export type UserCreateWithoutUser1Input = {
    user_id?: string
    name: string
    email: string
    address?: string | null
    image: string
    phone?: string | null
    user2?: FriendCreateNestedManyWithoutUser2Input
    posts?: PostCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    commentPreferences?: CommentPreferenceCreateNestedManyWithoutUserInput
    postPreference?: PostPreferenceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUser1Input = {
    user_id?: string
    name: string
    email: string
    address?: string | null
    image: string
    phone?: string | null
    user2?: FriendUncheckedCreateNestedManyWithoutUser2Input
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    commentPreferences?: CommentPreferenceUncheckedCreateNestedManyWithoutUserInput
    postPreference?: PostPreferenceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUser1Input = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUser1Input, UserUncheckedCreateWithoutUser1Input>
  }

  export type UserCreateWithoutUser2Input = {
    user_id?: string
    name: string
    email: string
    address?: string | null
    image: string
    phone?: string | null
    user1?: FriendCreateNestedManyWithoutUser1Input
    posts?: PostCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    commentPreferences?: CommentPreferenceCreateNestedManyWithoutUserInput
    postPreference?: PostPreferenceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUser2Input = {
    user_id?: string
    name: string
    email: string
    address?: string | null
    image: string
    phone?: string | null
    user1?: FriendUncheckedCreateNestedManyWithoutUser1Input
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    commentPreferences?: CommentPreferenceUncheckedCreateNestedManyWithoutUserInput
    postPreference?: PostPreferenceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUser2Input = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUser2Input, UserUncheckedCreateWithoutUser2Input>
  }

  export type UserUpsertWithoutUser1Input = {
    update: XOR<UserUpdateWithoutUser1Input, UserUncheckedUpdateWithoutUser1Input>
    create: XOR<UserCreateWithoutUser1Input, UserUncheckedCreateWithoutUser1Input>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUser1Input = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUser1Input, UserUncheckedUpdateWithoutUser1Input>
  }

  export type UserUpdateWithoutUser1Input = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    user2?: FriendUpdateManyWithoutUser2NestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    commentPreferences?: CommentPreferenceUpdateManyWithoutUserNestedInput
    postPreference?: PostPreferenceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUser1Input = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    user2?: FriendUncheckedUpdateManyWithoutUser2NestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    commentPreferences?: CommentPreferenceUncheckedUpdateManyWithoutUserNestedInput
    postPreference?: PostPreferenceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutUser2Input = {
    update: XOR<UserUpdateWithoutUser2Input, UserUncheckedUpdateWithoutUser2Input>
    create: XOR<UserCreateWithoutUser2Input, UserUncheckedCreateWithoutUser2Input>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUser2Input = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUser2Input, UserUncheckedUpdateWithoutUser2Input>
  }

  export type UserUpdateWithoutUser2Input = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    user1?: FriendUpdateManyWithoutUser1NestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    commentPreferences?: CommentPreferenceUpdateManyWithoutUserNestedInput
    postPreference?: PostPreferenceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUser2Input = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    user1?: FriendUncheckedUpdateManyWithoutUser1NestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    commentPreferences?: CommentPreferenceUncheckedUpdateManyWithoutUserNestedInput
    postPreference?: PostPreferenceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostPreferenceCreateWithoutPostInput = {
    post_preference_id?: string
    preference: boolean
    user: UserCreateNestedOneWithoutPostPreferenceInput
  }

  export type PostPreferenceUncheckedCreateWithoutPostInput = {
    post_preference_id?: string
    userId: string
    preference: boolean
  }

  export type PostPreferenceCreateOrConnectWithoutPostInput = {
    where: PostPreferenceWhereUniqueInput
    create: XOR<PostPreferenceCreateWithoutPostInput, PostPreferenceUncheckedCreateWithoutPostInput>
  }

  export type PostPreferenceCreateManyPostInputEnvelope = {
    data: PostPreferenceCreateManyPostInput | PostPreferenceCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutPostsInput = {
    user_id?: string
    name: string
    email: string
    address?: string | null
    image: string
    phone?: string | null
    user1?: FriendCreateNestedManyWithoutUser1Input
    user2?: FriendCreateNestedManyWithoutUser2Input
    comments?: CommentCreateNestedManyWithoutUserInput
    commentPreferences?: CommentPreferenceCreateNestedManyWithoutUserInput
    postPreference?: PostPreferenceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    user_id?: string
    name: string
    email: string
    address?: string | null
    image: string
    phone?: string | null
    user1?: FriendUncheckedCreateNestedManyWithoutUser1Input
    user2?: FriendUncheckedCreateNestedManyWithoutUser2Input
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    commentPreferences?: CommentPreferenceUncheckedCreateNestedManyWithoutUserInput
    postPreference?: PostPreferenceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type CommentCreateWithoutPostInput = {
    comment_id?: string
    message: string
    preferences?: CommentPreferenceCreateNestedManyWithoutCommentInput
    user: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutPostInput = {
    comment_id?: string
    message: string
    userId: string
    preferences?: CommentPreferenceUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentCreateOrConnectWithoutPostInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput>
  }

  export type CommentCreateManyPostInputEnvelope = {
    data: CommentCreateManyPostInput | CommentCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type PostPreferenceUpsertWithWhereUniqueWithoutPostInput = {
    where: PostPreferenceWhereUniqueInput
    update: XOR<PostPreferenceUpdateWithoutPostInput, PostPreferenceUncheckedUpdateWithoutPostInput>
    create: XOR<PostPreferenceCreateWithoutPostInput, PostPreferenceUncheckedCreateWithoutPostInput>
  }

  export type PostPreferenceUpdateWithWhereUniqueWithoutPostInput = {
    where: PostPreferenceWhereUniqueInput
    data: XOR<PostPreferenceUpdateWithoutPostInput, PostPreferenceUncheckedUpdateWithoutPostInput>
  }

  export type PostPreferenceUpdateManyWithWhereWithoutPostInput = {
    where: PostPreferenceScalarWhereInput
    data: XOR<PostPreferenceUpdateManyMutationInput, PostPreferenceUncheckedUpdateManyWithoutPostInput>
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    user1?: FriendUpdateManyWithoutUser1NestedInput
    user2?: FriendUpdateManyWithoutUser2NestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    commentPreferences?: CommentPreferenceUpdateManyWithoutUserNestedInput
    postPreference?: PostPreferenceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    user1?: FriendUncheckedUpdateManyWithoutUser1NestedInput
    user2?: FriendUncheckedUpdateManyWithoutUser2NestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    commentPreferences?: CommentPreferenceUncheckedUpdateManyWithoutUserNestedInput
    postPreference?: PostPreferenceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CommentUpsertWithWhereUniqueWithoutPostInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutPostInput, CommentUncheckedUpdateWithoutPostInput>
    create: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutPostInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutPostInput, CommentUncheckedUpdateWithoutPostInput>
  }

  export type CommentUpdateManyWithWhereWithoutPostInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutPostInput>
  }

  export type CommentPreferenceCreateWithoutCommentInput = {
    comment_preference_id?: string
    preference: boolean
    user: UserCreateNestedOneWithoutCommentPreferencesInput
  }

  export type CommentPreferenceUncheckedCreateWithoutCommentInput = {
    comment_preference_id?: string
    userId: string
    preference: boolean
  }

  export type CommentPreferenceCreateOrConnectWithoutCommentInput = {
    where: CommentPreferenceWhereUniqueInput
    create: XOR<CommentPreferenceCreateWithoutCommentInput, CommentPreferenceUncheckedCreateWithoutCommentInput>
  }

  export type CommentPreferenceCreateManyCommentInputEnvelope = {
    data: CommentPreferenceCreateManyCommentInput | CommentPreferenceCreateManyCommentInput[]
    skipDuplicates?: boolean
  }

  export type PostCreateWithoutCommentsInput = {
    post_id?: string
    image?: string | null
    message?: string | null
    preferences?: PostPreferenceCreateNestedManyWithoutPostInput
    user: UserCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateWithoutCommentsInput = {
    post_id?: string
    userId: string
    image?: string | null
    message?: string | null
    preferences?: PostPreferenceUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutCommentsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
  }

  export type UserCreateWithoutCommentsInput = {
    user_id?: string
    name: string
    email: string
    address?: string | null
    image: string
    phone?: string | null
    user1?: FriendCreateNestedManyWithoutUser1Input
    user2?: FriendCreateNestedManyWithoutUser2Input
    posts?: PostCreateNestedManyWithoutUserInput
    commentPreferences?: CommentPreferenceCreateNestedManyWithoutUserInput
    postPreference?: PostPreferenceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    user_id?: string
    name: string
    email: string
    address?: string | null
    image: string
    phone?: string | null
    user1?: FriendUncheckedCreateNestedManyWithoutUser1Input
    user2?: FriendUncheckedCreateNestedManyWithoutUser2Input
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    commentPreferences?: CommentPreferenceUncheckedCreateNestedManyWithoutUserInput
    postPreference?: PostPreferenceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type CommentPreferenceUpsertWithWhereUniqueWithoutCommentInput = {
    where: CommentPreferenceWhereUniqueInput
    update: XOR<CommentPreferenceUpdateWithoutCommentInput, CommentPreferenceUncheckedUpdateWithoutCommentInput>
    create: XOR<CommentPreferenceCreateWithoutCommentInput, CommentPreferenceUncheckedCreateWithoutCommentInput>
  }

  export type CommentPreferenceUpdateWithWhereUniqueWithoutCommentInput = {
    where: CommentPreferenceWhereUniqueInput
    data: XOR<CommentPreferenceUpdateWithoutCommentInput, CommentPreferenceUncheckedUpdateWithoutCommentInput>
  }

  export type CommentPreferenceUpdateManyWithWhereWithoutCommentInput = {
    where: CommentPreferenceScalarWhereInput
    data: XOR<CommentPreferenceUpdateManyMutationInput, CommentPreferenceUncheckedUpdateManyWithoutCommentInput>
  }

  export type PostUpsertWithoutCommentsInput = {
    update: XOR<PostUpdateWithoutCommentsInput, PostUncheckedUpdateWithoutCommentsInput>
    create: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutCommentsInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutCommentsInput, PostUncheckedUpdateWithoutCommentsInput>
  }

  export type PostUpdateWithoutCommentsInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: PostPreferenceUpdateManyWithoutPostNestedInput
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateWithoutCommentsInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: PostPreferenceUncheckedUpdateManyWithoutPostNestedInput
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    user1?: FriendUpdateManyWithoutUser1NestedInput
    user2?: FriendUpdateManyWithoutUser2NestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    commentPreferences?: CommentPreferenceUpdateManyWithoutUserNestedInput
    postPreference?: PostPreferenceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    user1?: FriendUncheckedUpdateManyWithoutUser1NestedInput
    user2?: FriendUncheckedUpdateManyWithoutUser2NestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    commentPreferences?: CommentPreferenceUncheckedUpdateManyWithoutUserNestedInput
    postPreference?: PostPreferenceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPostPreferenceInput = {
    user_id?: string
    name: string
    email: string
    address?: string | null
    image: string
    phone?: string | null
    user1?: FriendCreateNestedManyWithoutUser1Input
    user2?: FriendCreateNestedManyWithoutUser2Input
    posts?: PostCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    commentPreferences?: CommentPreferenceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostPreferenceInput = {
    user_id?: string
    name: string
    email: string
    address?: string | null
    image: string
    phone?: string | null
    user1?: FriendUncheckedCreateNestedManyWithoutUser1Input
    user2?: FriendUncheckedCreateNestedManyWithoutUser2Input
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    commentPreferences?: CommentPreferenceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostPreferenceInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostPreferenceInput, UserUncheckedCreateWithoutPostPreferenceInput>
  }

  export type PostCreateWithoutPreferencesInput = {
    post_id?: string
    image?: string | null
    message?: string | null
    user: UserCreateNestedOneWithoutPostsInput
    comments?: CommentCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutPreferencesInput = {
    post_id?: string
    userId: string
    image?: string | null
    message?: string | null
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutPreferencesInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutPreferencesInput, PostUncheckedCreateWithoutPreferencesInput>
  }

  export type UserUpsertWithoutPostPreferenceInput = {
    update: XOR<UserUpdateWithoutPostPreferenceInput, UserUncheckedUpdateWithoutPostPreferenceInput>
    create: XOR<UserCreateWithoutPostPreferenceInput, UserUncheckedCreateWithoutPostPreferenceInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostPreferenceInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostPreferenceInput, UserUncheckedUpdateWithoutPostPreferenceInput>
  }

  export type UserUpdateWithoutPostPreferenceInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    user1?: FriendUpdateManyWithoutUser1NestedInput
    user2?: FriendUpdateManyWithoutUser2NestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    commentPreferences?: CommentPreferenceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostPreferenceInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    user1?: FriendUncheckedUpdateManyWithoutUser1NestedInput
    user2?: FriendUncheckedUpdateManyWithoutUser2NestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    commentPreferences?: CommentPreferenceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostUpsertWithoutPreferencesInput = {
    update: XOR<PostUpdateWithoutPreferencesInput, PostUncheckedUpdateWithoutPreferencesInput>
    create: XOR<PostCreateWithoutPreferencesInput, PostUncheckedCreateWithoutPreferencesInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutPreferencesInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutPreferencesInput, PostUncheckedUpdateWithoutPreferencesInput>
  }

  export type PostUpdateWithoutPreferencesInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    comments?: CommentUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutPreferencesInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
  }

  export type UserCreateWithoutCommentPreferencesInput = {
    user_id?: string
    name: string
    email: string
    address?: string | null
    image: string
    phone?: string | null
    user1?: FriendCreateNestedManyWithoutUser1Input
    user2?: FriendCreateNestedManyWithoutUser2Input
    posts?: PostCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    postPreference?: PostPreferenceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentPreferencesInput = {
    user_id?: string
    name: string
    email: string
    address?: string | null
    image: string
    phone?: string | null
    user1?: FriendUncheckedCreateNestedManyWithoutUser1Input
    user2?: FriendUncheckedCreateNestedManyWithoutUser2Input
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    postPreference?: PostPreferenceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentPreferencesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentPreferencesInput, UserUncheckedCreateWithoutCommentPreferencesInput>
  }

  export type CommentCreateWithoutPreferencesInput = {
    comment_id?: string
    message: string
    post: PostCreateNestedOneWithoutCommentsInput
    user: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutPreferencesInput = {
    comment_id?: string
    message: string
    userId: string
    postId: string
  }

  export type CommentCreateOrConnectWithoutPreferencesInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutPreferencesInput, CommentUncheckedCreateWithoutPreferencesInput>
  }

  export type UserUpsertWithoutCommentPreferencesInput = {
    update: XOR<UserUpdateWithoutCommentPreferencesInput, UserUncheckedUpdateWithoutCommentPreferencesInput>
    create: XOR<UserCreateWithoutCommentPreferencesInput, UserUncheckedCreateWithoutCommentPreferencesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentPreferencesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentPreferencesInput, UserUncheckedUpdateWithoutCommentPreferencesInput>
  }

  export type UserUpdateWithoutCommentPreferencesInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    user1?: FriendUpdateManyWithoutUser1NestedInput
    user2?: FriendUpdateManyWithoutUser2NestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    postPreference?: PostPreferenceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentPreferencesInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    user1?: FriendUncheckedUpdateManyWithoutUser1NestedInput
    user2?: FriendUncheckedUpdateManyWithoutUser2NestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    postPreference?: PostPreferenceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CommentUpsertWithoutPreferencesInput = {
    update: XOR<CommentUpdateWithoutPreferencesInput, CommentUncheckedUpdateWithoutPreferencesInput>
    create: XOR<CommentCreateWithoutPreferencesInput, CommentUncheckedCreateWithoutPreferencesInput>
    where?: CommentWhereInput
  }

  export type CommentUpdateToOneWithWhereWithoutPreferencesInput = {
    where?: CommentWhereInput
    data: XOR<CommentUpdateWithoutPreferencesInput, CommentUncheckedUpdateWithoutPreferencesInput>
  }

  export type CommentUpdateWithoutPreferencesInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutPreferencesInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type FriendCreateManyUser1Input = {
    friend_id?: string
    user2_id: string
    mutual: boolean
  }

  export type FriendCreateManyUser2Input = {
    friend_id?: string
    user1_id: string
    mutual: boolean
  }

  export type PostCreateManyUserInput = {
    post_id?: string
    image?: string | null
    message?: string | null
  }

  export type CommentCreateManyUserInput = {
    comment_id?: string
    message: string
    postId: string
  }

  export type CommentPreferenceCreateManyUserInput = {
    comment_preference_id?: string
    commentId: string
    preference: boolean
  }

  export type PostPreferenceCreateManyUserInput = {
    post_preference_id?: string
    postId: string
    preference: boolean
  }

  export type FriendUpdateWithoutUser1Input = {
    friend_id?: StringFieldUpdateOperationsInput | string
    mutual?: BoolFieldUpdateOperationsInput | boolean
    user2?: UserUpdateOneRequiredWithoutUser2NestedInput
  }

  export type FriendUncheckedUpdateWithoutUser1Input = {
    friend_id?: StringFieldUpdateOperationsInput | string
    user2_id?: StringFieldUpdateOperationsInput | string
    mutual?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FriendUncheckedUpdateManyWithoutUser1Input = {
    friend_id?: StringFieldUpdateOperationsInput | string
    user2_id?: StringFieldUpdateOperationsInput | string
    mutual?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FriendUpdateWithoutUser2Input = {
    friend_id?: StringFieldUpdateOperationsInput | string
    mutual?: BoolFieldUpdateOperationsInput | boolean
    user1?: UserUpdateOneRequiredWithoutUser1NestedInput
  }

  export type FriendUncheckedUpdateWithoutUser2Input = {
    friend_id?: StringFieldUpdateOperationsInput | string
    user1_id?: StringFieldUpdateOperationsInput | string
    mutual?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FriendUncheckedUpdateManyWithoutUser2Input = {
    friend_id?: StringFieldUpdateOperationsInput | string
    user1_id?: StringFieldUpdateOperationsInput | string
    mutual?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PostUpdateWithoutUserInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: PostPreferenceUpdateManyWithoutPostNestedInput
    comments?: CommentUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutUserInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: PostPreferenceUncheckedUpdateManyWithoutPostNestedInput
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutUserInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommentUpdateWithoutUserInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    preferences?: CommentPreferenceUpdateManyWithoutCommentNestedInput
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutUserInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    preferences?: CommentPreferenceUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutUserInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentPreferenceUpdateWithoutUserInput = {
    comment_preference_id?: StringFieldUpdateOperationsInput | string
    preference?: BoolFieldUpdateOperationsInput | boolean
    comment?: CommentUpdateOneRequiredWithoutPreferencesNestedInput
  }

  export type CommentPreferenceUncheckedUpdateWithoutUserInput = {
    comment_preference_id?: StringFieldUpdateOperationsInput | string
    commentId?: StringFieldUpdateOperationsInput | string
    preference?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CommentPreferenceUncheckedUpdateManyWithoutUserInput = {
    comment_preference_id?: StringFieldUpdateOperationsInput | string
    commentId?: StringFieldUpdateOperationsInput | string
    preference?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PostPreferenceUpdateWithoutUserInput = {
    post_preference_id?: StringFieldUpdateOperationsInput | string
    preference?: BoolFieldUpdateOperationsInput | boolean
    post?: PostUpdateOneRequiredWithoutPreferencesNestedInput
  }

  export type PostPreferenceUncheckedUpdateWithoutUserInput = {
    post_preference_id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    preference?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PostPreferenceUncheckedUpdateManyWithoutUserInput = {
    post_preference_id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    preference?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PostPreferenceCreateManyPostInput = {
    post_preference_id?: string
    userId: string
    preference: boolean
  }

  export type CommentCreateManyPostInput = {
    comment_id?: string
    message: string
    userId: string
  }

  export type PostPreferenceUpdateWithoutPostInput = {
    post_preference_id?: StringFieldUpdateOperationsInput | string
    preference?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutPostPreferenceNestedInput
  }

  export type PostPreferenceUncheckedUpdateWithoutPostInput = {
    post_preference_id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    preference?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PostPreferenceUncheckedUpdateManyWithoutPostInput = {
    post_preference_id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    preference?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CommentUpdateWithoutPostInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    preferences?: CommentPreferenceUpdateManyWithoutCommentNestedInput
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutPostInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    preferences?: CommentPreferenceUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutPostInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentPreferenceCreateManyCommentInput = {
    comment_preference_id?: string
    userId: string
    preference: boolean
  }

  export type CommentPreferenceUpdateWithoutCommentInput = {
    comment_preference_id?: StringFieldUpdateOperationsInput | string
    preference?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutCommentPreferencesNestedInput
  }

  export type CommentPreferenceUncheckedUpdateWithoutCommentInput = {
    comment_preference_id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    preference?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CommentPreferenceUncheckedUpdateManyWithoutCommentInput = {
    comment_preference_id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    preference?: BoolFieldUpdateOperationsInput | boolean
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