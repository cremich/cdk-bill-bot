# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CostAndUsageDataCatalog <a name="CostAndUsageDataCatalog" id="@cremich/cdk-bill-bot.CostAndUsageDataCatalog"></a>

#### Initializers <a name="Initializers" id="@cremich/cdk-bill-bot.CostAndUsageDataCatalog.Initializer"></a>

```typescript
import { CostAndUsageDataCatalog } from '@cremich/cdk-bill-bot'

new CostAndUsageDataCatalog(scope: Construct, id: string, props: CostAndUsageDataCatalogProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cremich/cdk-bill-bot.CostAndUsageDataCatalog.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cremich/cdk-bill-bot.CostAndUsageDataCatalog.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cremich/cdk-bill-bot.CostAndUsageDataCatalog.Initializer.parameter.props">props</a></code> | <code><a href="#@cremich/cdk-bill-bot.CostAndUsageDataCatalogProps">CostAndUsageDataCatalogProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cremich/cdk-bill-bot.CostAndUsageDataCatalog.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@cremich/cdk-bill-bot.CostAndUsageDataCatalog.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@cremich/cdk-bill-bot.CostAndUsageDataCatalog.Initializer.parameter.props"></a>

- *Type:* <a href="#@cremich/cdk-bill-bot.CostAndUsageDataCatalogProps">CostAndUsageDataCatalogProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cremich/cdk-bill-bot.CostAndUsageDataCatalog.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@cremich/cdk-bill-bot.CostAndUsageDataCatalog.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cremich/cdk-bill-bot.CostAndUsageDataCatalog.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cremich/cdk-bill-bot.CostAndUsageDataCatalog.isConstruct"></a>

```typescript
import { CostAndUsageDataCatalog } from '@cremich/cdk-bill-bot'

CostAndUsageDataCatalog.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cremich/cdk-bill-bot.CostAndUsageDataCatalog.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cremich/cdk-bill-bot.CostAndUsageDataCatalog.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cremich/cdk-bill-bot.CostAndUsageDataCatalog.property.athenaBucket">athenaBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | The bucket where Amazon Athena writes query results. |
| <code><a href="#@cremich/cdk-bill-bot.CostAndUsageDataCatalog.property.athenaWorkgroup">athenaWorkgroup</a></code> | <code>aws-cdk-lib.aws_athena.CfnWorkGroup</code> | The name of the Amazon Athena workgroup to query the data catalog. |
| <code><a href="#@cremich/cdk-bill-bot.CostAndUsageDataCatalog.property.crawler">crawler</a></code> | <code>aws-cdk-lib.aws_glue.CfnCrawler</code> | The name of the AWS Glue crawler that creates the data catalog. |
| <code><a href="#@cremich/cdk-bill-bot.CostAndUsageDataCatalog.property.curBucket">curBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | The bucket where AWS delivers the report. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cremich/cdk-bill-bot.CostAndUsageDataCatalog.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `athenaBucket`<sup>Required</sup> <a name="athenaBucket" id="@cremich/cdk-bill-bot.CostAndUsageDataCatalog.property.athenaBucket"></a>

```typescript
public readonly athenaBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

The bucket where Amazon Athena writes query results.

---

##### `athenaWorkgroup`<sup>Required</sup> <a name="athenaWorkgroup" id="@cremich/cdk-bill-bot.CostAndUsageDataCatalog.property.athenaWorkgroup"></a>

```typescript
public readonly athenaWorkgroup: CfnWorkGroup;
```

- *Type:* aws-cdk-lib.aws_athena.CfnWorkGroup

The name of the Amazon Athena workgroup to query the data catalog.

---

##### `crawler`<sup>Required</sup> <a name="crawler" id="@cremich/cdk-bill-bot.CostAndUsageDataCatalog.property.crawler"></a>

```typescript
public readonly crawler: CfnCrawler;
```

- *Type:* aws-cdk-lib.aws_glue.CfnCrawler

The name of the AWS Glue crawler that creates the data catalog.

---

##### `curBucket`<sup>Required</sup> <a name="curBucket" id="@cremich/cdk-bill-bot.CostAndUsageDataCatalog.property.curBucket"></a>

```typescript
public readonly curBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

The bucket where AWS delivers the report.

---


### CostAndUsageReport <a name="CostAndUsageReport" id="@cremich/cdk-bill-bot.CostAndUsageReport"></a>

#### Initializers <a name="Initializers" id="@cremich/cdk-bill-bot.CostAndUsageReport.Initializer"></a>

```typescript
import { CostAndUsageReport } from '@cremich/cdk-bill-bot'

new CostAndUsageReport(scope: Construct, id: string, props: CostAndUsageReportProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cremich/cdk-bill-bot.CostAndUsageReport.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cremich/cdk-bill-bot.CostAndUsageReport.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cremich/cdk-bill-bot.CostAndUsageReport.Initializer.parameter.props">props</a></code> | <code><a href="#@cremich/cdk-bill-bot.CostAndUsageReportProps">CostAndUsageReportProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cremich/cdk-bill-bot.CostAndUsageReport.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@cremich/cdk-bill-bot.CostAndUsageReport.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@cremich/cdk-bill-bot.CostAndUsageReport.Initializer.parameter.props"></a>

- *Type:* <a href="#@cremich/cdk-bill-bot.CostAndUsageReportProps">CostAndUsageReportProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cremich/cdk-bill-bot.CostAndUsageReport.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@cremich/cdk-bill-bot.CostAndUsageReport.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cremich/cdk-bill-bot.CostAndUsageReport.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cremich/cdk-bill-bot.CostAndUsageReport.isConstruct"></a>

```typescript
import { CostAndUsageReport } from '@cremich/cdk-bill-bot'

CostAndUsageReport.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cremich/cdk-bill-bot.CostAndUsageReport.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cremich/cdk-bill-bot.CostAndUsageReport.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cremich/cdk-bill-bot.CostAndUsageReport.property.bucket">bucket</a></code> | <code><a href="#@cremich/cdk-bill-bot.CURBucket">CURBucket</a></code> | The bucket where AWS delivers the report. |
| <code><a href="#@cremich/cdk-bill-bot.CostAndUsageReport.property.name">name</a></code> | <code>string</code> | The name of the cost and usage report. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cremich/cdk-bill-bot.CostAndUsageReport.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cremich/cdk-bill-bot.CostAndUsageReport.property.bucket"></a>

```typescript
public readonly bucket: CURBucket;
```

- *Type:* <a href="#@cremich/cdk-bill-bot.CURBucket">CURBucket</a>

The bucket where AWS delivers the report.

---

##### `name`<sup>Required</sup> <a name="name" id="@cremich/cdk-bill-bot.CostAndUsageReport.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the cost and usage report.

---


### CURBucket <a name="CURBucket" id="@cremich/cdk-bill-bot.CURBucket"></a>

A new Amazon S3 bucket for cost and usage reports.

#### Initializers <a name="Initializers" id="@cremich/cdk-bill-bot.CURBucket.Initializer"></a>

```typescript
import { CURBucket } from '@cremich/cdk-bill-bot'

new CURBucket(scope: Construct, id: string, props?: CURBucketProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cremich/cdk-bill-bot.CURBucket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cremich/cdk-bill-bot.CURBucket.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cremich/cdk-bill-bot.CURBucket.Initializer.parameter.props">props</a></code> | <code><a href="#@cremich/cdk-bill-bot.CURBucketProps">CURBucketProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cremich/cdk-bill-bot.CURBucket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@cremich/cdk-bill-bot.CURBucket.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="@cremich/cdk-bill-bot.CURBucket.Initializer.parameter.props"></a>

- *Type:* <a href="#@cremich/cdk-bill-bot.CURBucketProps">CURBucketProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cremich/cdk-bill-bot.CURBucket.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cremich/cdk-bill-bot.CURBucket.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@cremich/cdk-bill-bot.CURBucket.addEventNotification">addEventNotification</a></code> | Adds a bucket notification event destination. |
| <code><a href="#@cremich/cdk-bill-bot.CURBucket.addObjectCreatedNotification">addObjectCreatedNotification</a></code> | Subscribes a destination to receive notifications when an object is created in the bucket. |
| <code><a href="#@cremich/cdk-bill-bot.CURBucket.addObjectRemovedNotification">addObjectRemovedNotification</a></code> | Subscribes a destination to receive notifications when an object is removed from the bucket. |
| <code><a href="#@cremich/cdk-bill-bot.CURBucket.addToResourcePolicy">addToResourcePolicy</a></code> | Adds a statement to the resource policy for a principal (i.e. account/role/service) to perform actions on this bucket and/or its contents. Use `bucketArn` and `arnForObjects(keys)` to obtain ARNs for this bucket or objects. |
| <code><a href="#@cremich/cdk-bill-bot.CURBucket.arnForObjects">arnForObjects</a></code> | Returns an ARN that represents all objects within the bucket that match the key pattern specified. |
| <code><a href="#@cremich/cdk-bill-bot.CURBucket.grantDelete">grantDelete</a></code> | Grants s3:DeleteObject* permission to an IAM principal for objects in this bucket. |
| <code><a href="#@cremich/cdk-bill-bot.CURBucket.grantPublicAccess">grantPublicAccess</a></code> | Allows unrestricted access to objects from this bucket. |
| <code><a href="#@cremich/cdk-bill-bot.CURBucket.grantPut">grantPut</a></code> | Grants s3:PutObject* and s3:Abort* permissions for this bucket to an IAM principal. |
| <code><a href="#@cremich/cdk-bill-bot.CURBucket.grantPutAcl">grantPutAcl</a></code> | Grant the given IAM identity permissions to modify the ACLs of objects in the given Bucket. |
| <code><a href="#@cremich/cdk-bill-bot.CURBucket.grantRead">grantRead</a></code> | Grant read permissions for this bucket and it's contents to an IAM principal (Role/Group/User). |
| <code><a href="#@cremich/cdk-bill-bot.CURBucket.grantReadWrite">grantReadWrite</a></code> | Grants read/write permissions for this bucket and it's contents to an IAM principal (Role/Group/User). |
| <code><a href="#@cremich/cdk-bill-bot.CURBucket.grantWrite">grantWrite</a></code> | Grant write permissions to this bucket to an IAM principal. |
| <code><a href="#@cremich/cdk-bill-bot.CURBucket.onCloudTrailEvent">onCloudTrailEvent</a></code> | Define a CloudWatch event that triggers when something happens to this repository. |
| <code><a href="#@cremich/cdk-bill-bot.CURBucket.onCloudTrailPutObject">onCloudTrailPutObject</a></code> | Defines an AWS CloudWatch event that triggers when an object is uploaded to the specified paths (keys) in this bucket using the PutObject API call. |
| <code><a href="#@cremich/cdk-bill-bot.CURBucket.onCloudTrailWriteObject">onCloudTrailWriteObject</a></code> | Defines an AWS CloudWatch event that triggers when an object at the specified paths (keys) in this bucket are written to. |
| <code><a href="#@cremich/cdk-bill-bot.CURBucket.s3UrlForObject">s3UrlForObject</a></code> | The S3 URL of an S3 object. For example:. |
| <code><a href="#@cremich/cdk-bill-bot.CURBucket.transferAccelerationUrlForObject">transferAccelerationUrlForObject</a></code> | The https Transfer Acceleration URL of an S3 object. |
| <code><a href="#@cremich/cdk-bill-bot.CURBucket.urlForObject">urlForObject</a></code> | The https URL of an S3 object. Specify `regional: false` at the options for non-regional URLs. For example:. |
| <code><a href="#@cremich/cdk-bill-bot.CURBucket.virtualHostedUrlForObject">virtualHostedUrlForObject</a></code> | The virtual hosted-style URL of an S3 object. Specify `regional: false` at the options for non-regional URL. For example:. |
| <code><a href="#@cremich/cdk-bill-bot.CURBucket.addCorsRule">addCorsRule</a></code> | Adds a cross-origin access configuration for objects in an Amazon S3 bucket. |
| <code><a href="#@cremich/cdk-bill-bot.CURBucket.addInventory">addInventory</a></code> | Add an inventory configuration. |
| <code><a href="#@cremich/cdk-bill-bot.CURBucket.addLifecycleRule">addLifecycleRule</a></code> | Add a lifecycle rule to the bucket. |
| <code><a href="#@cremich/cdk-bill-bot.CURBucket.addMetric">addMetric</a></code> | Adds a metrics configuration for the CloudWatch request metrics from the bucket. |

---

##### `toString` <a name="toString" id="@cremich/cdk-bill-bot.CURBucket.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@cremich/cdk-bill-bot.CURBucket.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@cremich/cdk-bill-bot.CURBucket.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addEventNotification` <a name="addEventNotification" id="@cremich/cdk-bill-bot.CURBucket.addEventNotification"></a>

```typescript
public addEventNotification(event: EventType, dest: IBucketNotificationDestination, filters: NotificationKeyFilter): void
```

Adds a bucket notification event destination.

> [https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html](https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html)

*Example*

```typescript
   declare const myLambda: lambda.Function;
   const bucket = new s3.Bucket(this, 'MyBucket');
   bucket.addEventNotification(s3.EventType.OBJECT_CREATED, new s3n.LambdaDestination(myLambda), {prefix: 'home/myusername/*'});
```


###### `event`<sup>Required</sup> <a name="event" id="@cremich/cdk-bill-bot.CURBucket.addEventNotification.parameter.event"></a>

- *Type:* aws-cdk-lib.aws_s3.EventType

The event to trigger the notification.

---

###### `dest`<sup>Required</sup> <a name="dest" id="@cremich/cdk-bill-bot.CURBucket.addEventNotification.parameter.dest"></a>

- *Type:* aws-cdk-lib.aws_s3.IBucketNotificationDestination

The notification destination (Lambda, SNS Topic or SQS Queue).

---

###### `filters`<sup>Required</sup> <a name="filters" id="@cremich/cdk-bill-bot.CURBucket.addEventNotification.parameter.filters"></a>

- *Type:* aws-cdk-lib.aws_s3.NotificationKeyFilter

S3 object key filter rules to determine which objects trigger this event.

Each filter must include a `prefix` and/or `suffix`
that will be matched against the s3 object key. Refer to the S3 Developer Guide
for details about allowed filter rules.

---

##### `addObjectCreatedNotification` <a name="addObjectCreatedNotification" id="@cremich/cdk-bill-bot.CURBucket.addObjectCreatedNotification"></a>

```typescript
public addObjectCreatedNotification(dest: IBucketNotificationDestination, filters: NotificationKeyFilter): void
```

Subscribes a destination to receive notifications when an object is created in the bucket.

This is identical to calling
`onEvent(EventType.OBJECT_CREATED)`.

###### `dest`<sup>Required</sup> <a name="dest" id="@cremich/cdk-bill-bot.CURBucket.addObjectCreatedNotification.parameter.dest"></a>

- *Type:* aws-cdk-lib.aws_s3.IBucketNotificationDestination

The notification destination (see onEvent).

---

###### `filters`<sup>Required</sup> <a name="filters" id="@cremich/cdk-bill-bot.CURBucket.addObjectCreatedNotification.parameter.filters"></a>

- *Type:* aws-cdk-lib.aws_s3.NotificationKeyFilter

Filters (see onEvent).

---

##### `addObjectRemovedNotification` <a name="addObjectRemovedNotification" id="@cremich/cdk-bill-bot.CURBucket.addObjectRemovedNotification"></a>

```typescript
public addObjectRemovedNotification(dest: IBucketNotificationDestination, filters: NotificationKeyFilter): void
```

Subscribes a destination to receive notifications when an object is removed from the bucket.

This is identical to calling
`onEvent(EventType.OBJECT_REMOVED)`.

###### `dest`<sup>Required</sup> <a name="dest" id="@cremich/cdk-bill-bot.CURBucket.addObjectRemovedNotification.parameter.dest"></a>

- *Type:* aws-cdk-lib.aws_s3.IBucketNotificationDestination

The notification destination (see onEvent).

---

###### `filters`<sup>Required</sup> <a name="filters" id="@cremich/cdk-bill-bot.CURBucket.addObjectRemovedNotification.parameter.filters"></a>

- *Type:* aws-cdk-lib.aws_s3.NotificationKeyFilter

Filters (see onEvent).

---

##### `addToResourcePolicy` <a name="addToResourcePolicy" id="@cremich/cdk-bill-bot.CURBucket.addToResourcePolicy"></a>

```typescript
public addToResourcePolicy(permission: PolicyStatement): AddToResourcePolicyResult
```

Adds a statement to the resource policy for a principal (i.e. account/role/service) to perform actions on this bucket and/or its contents. Use `bucketArn` and `arnForObjects(keys)` to obtain ARNs for this bucket or objects.

Note that the policy statement may or may not be added to the policy.
For example, when an `IBucket` is created from an existing bucket,
it's not possible to tell whether the bucket already has a policy
attached, let alone to re-use that policy to add more statements to it.
So it's safest to do nothing in these cases.

###### `permission`<sup>Required</sup> <a name="permission" id="@cremich/cdk-bill-bot.CURBucket.addToResourcePolicy.parameter.permission"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

the policy statement to be added to the bucket's policy.

---

##### `arnForObjects` <a name="arnForObjects" id="@cremich/cdk-bill-bot.CURBucket.arnForObjects"></a>

```typescript
public arnForObjects(keyPattern: string): string
```

Returns an ARN that represents all objects within the bucket that match the key pattern specified.

To represent all keys, specify ``"*"``.

If you need to specify a keyPattern with multiple components, concatenate them into a single string, e.g.:

   arnForObjects(`home/${team}/${user}/*`)

###### `keyPattern`<sup>Required</sup> <a name="keyPattern" id="@cremich/cdk-bill-bot.CURBucket.arnForObjects.parameter.keyPattern"></a>

- *Type:* string

---

##### `grantDelete` <a name="grantDelete" id="@cremich/cdk-bill-bot.CURBucket.grantDelete"></a>

```typescript
public grantDelete(identity: IGrantable, objectsKeyPattern?: any): Grant
```

Grants s3:DeleteObject* permission to an IAM principal for objects in this bucket.

###### `identity`<sup>Required</sup> <a name="identity" id="@cremich/cdk-bill-bot.CURBucket.grantDelete.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal.

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="@cremich/cdk-bill-bot.CURBucket.grantDelete.parameter.objectsKeyPattern"></a>

- *Type:* any

Restrict the permission to a certain key pattern (default '*').

---

##### `grantPublicAccess` <a name="grantPublicAccess" id="@cremich/cdk-bill-bot.CURBucket.grantPublicAccess"></a>

```typescript
public grantPublicAccess(allowedActions: string, keyPrefix?: string): Grant
```

Allows unrestricted access to objects from this bucket.

IMPORTANT: This permission allows anyone to perform actions on S3 objects
in this bucket, which is useful for when you configure your bucket as a
website and want everyone to be able to read objects in the bucket without
needing to authenticate.

Without arguments, this method will grant read ("s3:GetObject") access to
all objects ("*") in the bucket.

The method returns the `iam.Grant` object, which can then be modified
as needed. For example, you can add a condition that will restrict access only
to an IPv4 range like this:

     const grant = bucket.grantPublicAccess();
     grant.resourceStatement!.addCondition(‘IpAddress’, { “aws:SourceIp”: “54.240.143.0/24” });

Note that if this `IBucket` refers to an existing bucket, possibly not
managed by CloudFormation, this method will have no effect, since it's
impossible to modify the policy of an existing bucket.

###### `allowedActions`<sup>Required</sup> <a name="allowedActions" id="@cremich/cdk-bill-bot.CURBucket.grantPublicAccess.parameter.allowedActions"></a>

- *Type:* string

the set of S3 actions to allow.

Default is "s3:GetObject".

---

###### `keyPrefix`<sup>Optional</sup> <a name="keyPrefix" id="@cremich/cdk-bill-bot.CURBucket.grantPublicAccess.parameter.keyPrefix"></a>

- *Type:* string

the prefix of S3 object keys (e.g. `home/*`). Default is "*".

---

##### `grantPut` <a name="grantPut" id="@cremich/cdk-bill-bot.CURBucket.grantPut"></a>

```typescript
public grantPut(identity: IGrantable, objectsKeyPattern?: any): Grant
```

Grants s3:PutObject* and s3:Abort* permissions for this bucket to an IAM principal.

If encryption is used, permission to use the key to encrypt the contents
of written files will also be granted to the same principal.

###### `identity`<sup>Required</sup> <a name="identity" id="@cremich/cdk-bill-bot.CURBucket.grantPut.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal.

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="@cremich/cdk-bill-bot.CURBucket.grantPut.parameter.objectsKeyPattern"></a>

- *Type:* any

Restrict the permission to a certain key pattern (default '*').

---

##### `grantPutAcl` <a name="grantPutAcl" id="@cremich/cdk-bill-bot.CURBucket.grantPutAcl"></a>

```typescript
public grantPutAcl(identity: IGrantable, objectsKeyPattern?: string): Grant
```

Grant the given IAM identity permissions to modify the ACLs of objects in the given Bucket.

If your application has the '@aws-cdk/aws-s3:grantWriteWithoutAcl' feature flag set,
calling {@link grantWrite} or {@link grantReadWrite} no longer grants permissions to modify the ACLs of the objects;
in this case, if you need to modify object ACLs, call this method explicitly.

###### `identity`<sup>Required</sup> <a name="identity" id="@cremich/cdk-bill-bot.CURBucket.grantPutAcl.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="@cremich/cdk-bill-bot.CURBucket.grantPutAcl.parameter.objectsKeyPattern"></a>

- *Type:* string

---

##### `grantRead` <a name="grantRead" id="@cremich/cdk-bill-bot.CURBucket.grantRead"></a>

```typescript
public grantRead(identity: IGrantable, objectsKeyPattern?: any): Grant
```

Grant read permissions for this bucket and it's contents to an IAM principal (Role/Group/User).

If encryption is used, permission to use the key to decrypt the contents
of the bucket will also be granted to the same principal.

###### `identity`<sup>Required</sup> <a name="identity" id="@cremich/cdk-bill-bot.CURBucket.grantRead.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal.

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="@cremich/cdk-bill-bot.CURBucket.grantRead.parameter.objectsKeyPattern"></a>

- *Type:* any

Restrict the permission to a certain key pattern (default '*').

---

##### `grantReadWrite` <a name="grantReadWrite" id="@cremich/cdk-bill-bot.CURBucket.grantReadWrite"></a>

```typescript
public grantReadWrite(identity: IGrantable, objectsKeyPattern?: any): Grant
```

Grants read/write permissions for this bucket and it's contents to an IAM principal (Role/Group/User).

If an encryption key is used, permission to use the key for
encrypt/decrypt will also be granted.

Before CDK version 1.85.0, this method granted the `s3:PutObject*` permission that included `s3:PutObjectAcl`,
which could be used to grant read/write object access to IAM principals in other accounts.
If you want to get rid of that behavior, update your CDK version to 1.85.0 or later,
and make sure the `@aws-cdk/aws-s3:grantWriteWithoutAcl` feature flag is set to `true`
in the `context` key of your cdk.json file.
If you've already updated, but still need the principal to have permissions to modify the ACLs,
use the {@link grantPutAcl} method.

###### `identity`<sup>Required</sup> <a name="identity" id="@cremich/cdk-bill-bot.CURBucket.grantReadWrite.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="@cremich/cdk-bill-bot.CURBucket.grantReadWrite.parameter.objectsKeyPattern"></a>

- *Type:* any

---

##### `grantWrite` <a name="grantWrite" id="@cremich/cdk-bill-bot.CURBucket.grantWrite"></a>

```typescript
public grantWrite(identity: IGrantable, objectsKeyPattern?: any): Grant
```

Grant write permissions to this bucket to an IAM principal.

If encryption is used, permission to use the key to encrypt the contents
of written files will also be granted to the same principal.

Before CDK version 1.85.0, this method granted the `s3:PutObject*` permission that included `s3:PutObjectAcl`,
which could be used to grant read/write object access to IAM principals in other accounts.
If you want to get rid of that behavior, update your CDK version to 1.85.0 or later,
and make sure the `@aws-cdk/aws-s3:grantWriteWithoutAcl` feature flag is set to `true`
in the `context` key of your cdk.json file.
If you've already updated, but still need the principal to have permissions to modify the ACLs,
use the {@link grantPutAcl} method.

###### `identity`<sup>Required</sup> <a name="identity" id="@cremich/cdk-bill-bot.CURBucket.grantWrite.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="@cremich/cdk-bill-bot.CURBucket.grantWrite.parameter.objectsKeyPattern"></a>

- *Type:* any

---

##### `onCloudTrailEvent` <a name="onCloudTrailEvent" id="@cremich/cdk-bill-bot.CURBucket.onCloudTrailEvent"></a>

```typescript
public onCloudTrailEvent(id: string, options?: OnCloudTrailBucketEventOptions): Rule
```

Define a CloudWatch event that triggers when something happens to this repository.

Requires that there exists at least one CloudTrail Trail in your account
that captures the event. This method will not create the Trail.

###### `id`<sup>Required</sup> <a name="id" id="@cremich/cdk-bill-bot.CURBucket.onCloudTrailEvent.parameter.id"></a>

- *Type:* string

The id of the rule.

---

###### `options`<sup>Optional</sup> <a name="options" id="@cremich/cdk-bill-bot.CURBucket.onCloudTrailEvent.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_s3.OnCloudTrailBucketEventOptions

Options for adding the rule.

---

##### `onCloudTrailPutObject` <a name="onCloudTrailPutObject" id="@cremich/cdk-bill-bot.CURBucket.onCloudTrailPutObject"></a>

```typescript
public onCloudTrailPutObject(id: string, options?: OnCloudTrailBucketEventOptions): Rule
```

Defines an AWS CloudWatch event that triggers when an object is uploaded to the specified paths (keys) in this bucket using the PutObject API call.

Note that some tools like `aws s3 cp` will automatically use either
PutObject or the multipart upload API depending on the file size,
so using `onCloudTrailWriteObject` may be preferable.

Requires that there exists at least one CloudTrail Trail in your account
that captures the event. This method will not create the Trail.

###### `id`<sup>Required</sup> <a name="id" id="@cremich/cdk-bill-bot.CURBucket.onCloudTrailPutObject.parameter.id"></a>

- *Type:* string

The id of the rule.

---

###### `options`<sup>Optional</sup> <a name="options" id="@cremich/cdk-bill-bot.CURBucket.onCloudTrailPutObject.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_s3.OnCloudTrailBucketEventOptions

Options for adding the rule.

---

##### `onCloudTrailWriteObject` <a name="onCloudTrailWriteObject" id="@cremich/cdk-bill-bot.CURBucket.onCloudTrailWriteObject"></a>

```typescript
public onCloudTrailWriteObject(id: string, options?: OnCloudTrailBucketEventOptions): Rule
```

Defines an AWS CloudWatch event that triggers when an object at the specified paths (keys) in this bucket are written to.

This includes
the events PutObject, CopyObject, and CompleteMultipartUpload.

Note that some tools like `aws s3 cp` will automatically use either
PutObject or the multipart upload API depending on the file size,
so using this method may be preferable to `onCloudTrailPutObject`.

Requires that there exists at least one CloudTrail Trail in your account
that captures the event. This method will not create the Trail.

###### `id`<sup>Required</sup> <a name="id" id="@cremich/cdk-bill-bot.CURBucket.onCloudTrailWriteObject.parameter.id"></a>

- *Type:* string

The id of the rule.

---

###### `options`<sup>Optional</sup> <a name="options" id="@cremich/cdk-bill-bot.CURBucket.onCloudTrailWriteObject.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_s3.OnCloudTrailBucketEventOptions

Options for adding the rule.

---

##### `s3UrlForObject` <a name="s3UrlForObject" id="@cremich/cdk-bill-bot.CURBucket.s3UrlForObject"></a>

```typescript
public s3UrlForObject(key?: string): string
```

The S3 URL of an S3 object. For example:.

`s3://onlybucket`
- `s3://bucket/key`

###### `key`<sup>Optional</sup> <a name="key" id="@cremich/cdk-bill-bot.CURBucket.s3UrlForObject.parameter.key"></a>

- *Type:* string

The S3 key of the object.

If not specified, the S3 URL of the
bucket is returned.

---

##### `transferAccelerationUrlForObject` <a name="transferAccelerationUrlForObject" id="@cremich/cdk-bill-bot.CURBucket.transferAccelerationUrlForObject"></a>

```typescript
public transferAccelerationUrlForObject(key?: string, options?: TransferAccelerationUrlOptions): string
```

The https Transfer Acceleration URL of an S3 object.

Specify `dualStack: true` at the options
for dual-stack endpoint (connect to the bucket over IPv6). For example:

- `https://bucket.s3-accelerate.amazonaws.com`
- `https://bucket.s3-accelerate.amazonaws.com/key`

###### `key`<sup>Optional</sup> <a name="key" id="@cremich/cdk-bill-bot.CURBucket.transferAccelerationUrlForObject.parameter.key"></a>

- *Type:* string

The S3 key of the object.

If not specified, the URL of the
bucket is returned.

---

###### `options`<sup>Optional</sup> <a name="options" id="@cremich/cdk-bill-bot.CURBucket.transferAccelerationUrlForObject.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_s3.TransferAccelerationUrlOptions

Options for generating URL.

---

##### `urlForObject` <a name="urlForObject" id="@cremich/cdk-bill-bot.CURBucket.urlForObject"></a>

```typescript
public urlForObject(key?: string): string
```

The https URL of an S3 object. Specify `regional: false` at the options for non-regional URLs. For example:.

`https://s3.us-west-1.amazonaws.com/onlybucket`
- `https://s3.us-west-1.amazonaws.com/bucket/key`
- `https://s3.cn-north-1.amazonaws.com.cn/china-bucket/mykey`

###### `key`<sup>Optional</sup> <a name="key" id="@cremich/cdk-bill-bot.CURBucket.urlForObject.parameter.key"></a>

- *Type:* string

The S3 key of the object.

If not specified, the URL of the
bucket is returned.

---

##### `virtualHostedUrlForObject` <a name="virtualHostedUrlForObject" id="@cremich/cdk-bill-bot.CURBucket.virtualHostedUrlForObject"></a>

```typescript
public virtualHostedUrlForObject(key?: string, options?: VirtualHostedStyleUrlOptions): string
```

The virtual hosted-style URL of an S3 object. Specify `regional: false` at the options for non-regional URL. For example:.

`https://only-bucket.s3.us-west-1.amazonaws.com`
- `https://bucket.s3.us-west-1.amazonaws.com/key`
- `https://bucket.s3.amazonaws.com/key`
- `https://china-bucket.s3.cn-north-1.amazonaws.com.cn/mykey`

###### `key`<sup>Optional</sup> <a name="key" id="@cremich/cdk-bill-bot.CURBucket.virtualHostedUrlForObject.parameter.key"></a>

- *Type:* string

The S3 key of the object.

If not specified, the URL of the
bucket is returned.

---

###### `options`<sup>Optional</sup> <a name="options" id="@cremich/cdk-bill-bot.CURBucket.virtualHostedUrlForObject.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_s3.VirtualHostedStyleUrlOptions

Options for generating URL.

---

##### `addCorsRule` <a name="addCorsRule" id="@cremich/cdk-bill-bot.CURBucket.addCorsRule"></a>

```typescript
public addCorsRule(rule: CorsRule): void
```

Adds a cross-origin access configuration for objects in an Amazon S3 bucket.

###### `rule`<sup>Required</sup> <a name="rule" id="@cremich/cdk-bill-bot.CURBucket.addCorsRule.parameter.rule"></a>

- *Type:* aws-cdk-lib.aws_s3.CorsRule

The CORS configuration rule to add.

---

##### `addInventory` <a name="addInventory" id="@cremich/cdk-bill-bot.CURBucket.addInventory"></a>

```typescript
public addInventory(inventory: Inventory): void
```

Add an inventory configuration.

###### `inventory`<sup>Required</sup> <a name="inventory" id="@cremich/cdk-bill-bot.CURBucket.addInventory.parameter.inventory"></a>

- *Type:* aws-cdk-lib.aws_s3.Inventory

configuration to add.

---

##### `addLifecycleRule` <a name="addLifecycleRule" id="@cremich/cdk-bill-bot.CURBucket.addLifecycleRule"></a>

```typescript
public addLifecycleRule(rule: LifecycleRule): void
```

Add a lifecycle rule to the bucket.

###### `rule`<sup>Required</sup> <a name="rule" id="@cremich/cdk-bill-bot.CURBucket.addLifecycleRule.parameter.rule"></a>

- *Type:* aws-cdk-lib.aws_s3.LifecycleRule

The rule to add.

---

##### `addMetric` <a name="addMetric" id="@cremich/cdk-bill-bot.CURBucket.addMetric"></a>

```typescript
public addMetric(metric: BucketMetrics): void
```

Adds a metrics configuration for the CloudWatch request metrics from the bucket.

###### `metric`<sup>Required</sup> <a name="metric" id="@cremich/cdk-bill-bot.CURBucket.addMetric.parameter.metric"></a>

- *Type:* aws-cdk-lib.aws_s3.BucketMetrics

The metric configuration to add.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cremich/cdk-bill-bot.CURBucket.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cremich/cdk-bill-bot.CURBucket.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@cremich/cdk-bill-bot.CURBucket.fromBucketArn">fromBucketArn</a></code> | *No description.* |
| <code><a href="#@cremich/cdk-bill-bot.CURBucket.fromBucketAttributes">fromBucketAttributes</a></code> | Creates a Bucket construct that represents an external bucket. |
| <code><a href="#@cremich/cdk-bill-bot.CURBucket.fromBucketName">fromBucketName</a></code> | *No description.* |
| <code><a href="#@cremich/cdk-bill-bot.CURBucket.validateBucketName">validateBucketName</a></code> | Thrown an exception if the given bucket name is not valid. |

---

##### `isConstruct` <a name="isConstruct" id="@cremich/cdk-bill-bot.CURBucket.isConstruct"></a>

```typescript
import { CURBucket } from '@cremich/cdk-bill-bot'

CURBucket.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cremich/cdk-bill-bot.CURBucket.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isResource` <a name="isResource" id="@cremich/cdk-bill-bot.CURBucket.isResource"></a>

```typescript
import { CURBucket } from '@cremich/cdk-bill-bot'

CURBucket.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@cremich/cdk-bill-bot.CURBucket.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromBucketArn` <a name="fromBucketArn" id="@cremich/cdk-bill-bot.CURBucket.fromBucketArn"></a>

```typescript
import { CURBucket } from '@cremich/cdk-bill-bot'

CURBucket.fromBucketArn(scope: Construct, id: string, bucketArn: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="@cremich/cdk-bill-bot.CURBucket.fromBucketArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@cremich/cdk-bill-bot.CURBucket.fromBucketArn.parameter.id"></a>

- *Type:* string

---

###### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="@cremich/cdk-bill-bot.CURBucket.fromBucketArn.parameter.bucketArn"></a>

- *Type:* string

---

##### `fromBucketAttributes` <a name="fromBucketAttributes" id="@cremich/cdk-bill-bot.CURBucket.fromBucketAttributes"></a>

```typescript
import { CURBucket } from '@cremich/cdk-bill-bot'

CURBucket.fromBucketAttributes(scope: Construct, id: string, attrs: BucketAttributes)
```

Creates a Bucket construct that represents an external bucket.

###### `scope`<sup>Required</sup> <a name="scope" id="@cremich/cdk-bill-bot.CURBucket.fromBucketAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

The parent creating construct (usually `this`).

---

###### `id`<sup>Required</sup> <a name="id" id="@cremich/cdk-bill-bot.CURBucket.fromBucketAttributes.parameter.id"></a>

- *Type:* string

The construct's name.

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="@cremich/cdk-bill-bot.CURBucket.fromBucketAttributes.parameter.attrs"></a>

- *Type:* aws-cdk-lib.aws_s3.BucketAttributes

A `BucketAttributes` object.

Can be obtained from a call to
`bucket.export()` or manually created.

---

##### `fromBucketName` <a name="fromBucketName" id="@cremich/cdk-bill-bot.CURBucket.fromBucketName"></a>

```typescript
import { CURBucket } from '@cremich/cdk-bill-bot'

CURBucket.fromBucketName(scope: Construct, id: string, bucketName: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="@cremich/cdk-bill-bot.CURBucket.fromBucketName.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@cremich/cdk-bill-bot.CURBucket.fromBucketName.parameter.id"></a>

- *Type:* string

---

###### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cremich/cdk-bill-bot.CURBucket.fromBucketName.parameter.bucketName"></a>

- *Type:* string

---

##### `validateBucketName` <a name="validateBucketName" id="@cremich/cdk-bill-bot.CURBucket.validateBucketName"></a>

```typescript
import { CURBucket } from '@cremich/cdk-bill-bot'

CURBucket.validateBucketName(physicalName: string)
```

Thrown an exception if the given bucket name is not valid.

###### `physicalName`<sup>Required</sup> <a name="physicalName" id="@cremich/cdk-bill-bot.CURBucket.validateBucketName.parameter.physicalName"></a>

- *Type:* string

name of the bucket.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cremich/cdk-bill-bot.CURBucket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cremich/cdk-bill-bot.CURBucket.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@cremich/cdk-bill-bot.CURBucket.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@cremich/cdk-bill-bot.CURBucket.property.bucketArn">bucketArn</a></code> | <code>string</code> | The ARN of the bucket. |
| <code><a href="#@cremich/cdk-bill-bot.CURBucket.property.bucketDomainName">bucketDomainName</a></code> | <code>string</code> | The IPv4 DNS name of the specified bucket. |
| <code><a href="#@cremich/cdk-bill-bot.CURBucket.property.bucketDualStackDomainName">bucketDualStackDomainName</a></code> | <code>string</code> | The IPv6 DNS name of the specified bucket. |
| <code><a href="#@cremich/cdk-bill-bot.CURBucket.property.bucketName">bucketName</a></code> | <code>string</code> | The name of the bucket. |
| <code><a href="#@cremich/cdk-bill-bot.CURBucket.property.bucketRegionalDomainName">bucketRegionalDomainName</a></code> | <code>string</code> | The regional domain name of the specified bucket. |
| <code><a href="#@cremich/cdk-bill-bot.CURBucket.property.bucketWebsiteDomainName">bucketWebsiteDomainName</a></code> | <code>string</code> | The Domain name of the static website. |
| <code><a href="#@cremich/cdk-bill-bot.CURBucket.property.bucketWebsiteUrl">bucketWebsiteUrl</a></code> | <code>string</code> | The URL of the static website. |
| <code><a href="#@cremich/cdk-bill-bot.CURBucket.property.encryptionKey">encryptionKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | Optional KMS encryption key associated with this bucket. |
| <code><a href="#@cremich/cdk-bill-bot.CURBucket.property.isWebsite">isWebsite</a></code> | <code>boolean</code> | If this bucket has been configured for static website hosting. |
| <code><a href="#@cremich/cdk-bill-bot.CURBucket.property.policy">policy</a></code> | <code>aws-cdk-lib.aws_s3.BucketPolicy</code> | The resource policy associated with this bucket. |
| <code><a href="#@cremich/cdk-bill-bot.CURBucket.property.region">region</a></code> | <code>string</code> | The region this bucket is provisioned. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cremich/cdk-bill-bot.CURBucket.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@cremich/cdk-bill-bot.CURBucket.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@cremich/cdk-bill-bot.CURBucket.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="@cremich/cdk-bill-bot.CURBucket.property.bucketArn"></a>

```typescript
public readonly bucketArn: string;
```

- *Type:* string

The ARN of the bucket.

---

##### `bucketDomainName`<sup>Required</sup> <a name="bucketDomainName" id="@cremich/cdk-bill-bot.CURBucket.property.bucketDomainName"></a>

```typescript
public readonly bucketDomainName: string;
```

- *Type:* string

The IPv4 DNS name of the specified bucket.

---

##### `bucketDualStackDomainName`<sup>Required</sup> <a name="bucketDualStackDomainName" id="@cremich/cdk-bill-bot.CURBucket.property.bucketDualStackDomainName"></a>

```typescript
public readonly bucketDualStackDomainName: string;
```

- *Type:* string

The IPv6 DNS name of the specified bucket.

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cremich/cdk-bill-bot.CURBucket.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

The name of the bucket.

---

##### `bucketRegionalDomainName`<sup>Required</sup> <a name="bucketRegionalDomainName" id="@cremich/cdk-bill-bot.CURBucket.property.bucketRegionalDomainName"></a>

```typescript
public readonly bucketRegionalDomainName: string;
```

- *Type:* string

The regional domain name of the specified bucket.

---

##### `bucketWebsiteDomainName`<sup>Required</sup> <a name="bucketWebsiteDomainName" id="@cremich/cdk-bill-bot.CURBucket.property.bucketWebsiteDomainName"></a>

```typescript
public readonly bucketWebsiteDomainName: string;
```

- *Type:* string

The Domain name of the static website.

---

##### `bucketWebsiteUrl`<sup>Required</sup> <a name="bucketWebsiteUrl" id="@cremich/cdk-bill-bot.CURBucket.property.bucketWebsiteUrl"></a>

```typescript
public readonly bucketWebsiteUrl: string;
```

- *Type:* string

The URL of the static website.

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@cremich/cdk-bill-bot.CURBucket.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

Optional KMS encryption key associated with this bucket.

---

##### `isWebsite`<sup>Optional</sup> <a name="isWebsite" id="@cremich/cdk-bill-bot.CURBucket.property.isWebsite"></a>

```typescript
public readonly isWebsite: boolean;
```

- *Type:* boolean

If this bucket has been configured for static website hosting.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cremich/cdk-bill-bot.CURBucket.property.policy"></a>

```typescript
public readonly policy: BucketPolicy;
```

- *Type:* aws-cdk-lib.aws_s3.BucketPolicy

The resource policy associated with this bucket.

If `autoCreatePolicy` is true, a `BucketPolicy` will be created upon the
first call to addToResourcePolicy(s).

---

##### `region`<sup>Required</sup> <a name="region" id="@cremich/cdk-bill-bot.CURBucket.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region this bucket is provisioned.

---


## Structs <a name="Structs" id="Structs"></a>

### CostAndUsageDataCatalogProps <a name="CostAndUsageDataCatalogProps" id="@cremich/cdk-bill-bot.CostAndUsageDataCatalogProps"></a>

Properties for creating an AWS Cost and Usage data catalog.

#### Initializer <a name="Initializer" id="@cremich/cdk-bill-bot.CostAndUsageDataCatalogProps.Initializer"></a>

```typescript
import { CostAndUsageDataCatalogProps } from '@cremich/cdk-bill-bot'

const costAndUsageDataCatalogProps: CostAndUsageDataCatalogProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cremich/cdk-bill-bot.CostAndUsageDataCatalogProps.property.curBucket">curBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | *No description.* |

---

##### `curBucket`<sup>Required</sup> <a name="curBucket" id="@cremich/cdk-bill-bot.CostAndUsageDataCatalogProps.property.curBucket"></a>

```typescript
public readonly curBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

---

### CostAndUsageReportProps <a name="CostAndUsageReportProps" id="@cremich/cdk-bill-bot.CostAndUsageReportProps"></a>

Properties for creating an AWS Cost and Usage Report.

#### Initializer <a name="Initializer" id="@cremich/cdk-bill-bot.CostAndUsageReportProps.Initializer"></a>

```typescript
import { CostAndUsageReportProps } from '@cremich/cdk-bill-bot'

const costAndUsageReportProps: CostAndUsageReportProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cremich/cdk-bill-bot.CostAndUsageReportProps.property.compression">compression</a></code> | <code><a href="#@cremich/cdk-bill-bot.Compression">Compression</a></code> | *No description.* |
| <code><a href="#@cremich/cdk-bill-bot.CostAndUsageReportProps.property.format">format</a></code> | <code><a href="#@cremich/cdk-bill-bot.Format">Format</a></code> | *No description.* |
| <code><a href="#@cremich/cdk-bill-bot.CostAndUsageReportProps.property.timeUnit">timeUnit</a></code> | <code><a href="#@cremich/cdk-bill-bot.TimeUnit">TimeUnit</a></code> | *No description.* |
| <code><a href="#@cremich/cdk-bill-bot.CostAndUsageReportProps.property.bucket">bucket</a></code> | <code><a href="#@cremich/cdk-bill-bot.CURBucket">CURBucket</a></code> | *No description.* |
| <code><a href="#@cremich/cdk-bill-bot.CostAndUsageReportProps.property.refreshClosedReports">refreshClosedReports</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@cremich/cdk-bill-bot.CostAndUsageReportProps.property.versioning">versioning</a></code> | <code><a href="#@cremich/cdk-bill-bot.Versioning">Versioning</a></code> | *No description.* |

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cremich/cdk-bill-bot.CostAndUsageReportProps.property.compression"></a>

```typescript
public readonly compression: Compression;
```

- *Type:* <a href="#@cremich/cdk-bill-bot.Compression">Compression</a>

---

##### `format`<sup>Required</sup> <a name="format" id="@cremich/cdk-bill-bot.CostAndUsageReportProps.property.format"></a>

```typescript
public readonly format: Format;
```

- *Type:* <a href="#@cremich/cdk-bill-bot.Format">Format</a>

---

##### `timeUnit`<sup>Required</sup> <a name="timeUnit" id="@cremich/cdk-bill-bot.CostAndUsageReportProps.property.timeUnit"></a>

```typescript
public readonly timeUnit: TimeUnit;
```

- *Type:* <a href="#@cremich/cdk-bill-bot.TimeUnit">TimeUnit</a>

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cremich/cdk-bill-bot.CostAndUsageReportProps.property.bucket"></a>

```typescript
public readonly bucket: CURBucket;
```

- *Type:* <a href="#@cremich/cdk-bill-bot.CURBucket">CURBucket</a>

---

##### `refreshClosedReports`<sup>Optional</sup> <a name="refreshClosedReports" id="@cremich/cdk-bill-bot.CostAndUsageReportProps.property.refreshClosedReports"></a>

```typescript
public readonly refreshClosedReports: boolean;
```

- *Type:* boolean

---

##### `versioning`<sup>Optional</sup> <a name="versioning" id="@cremich/cdk-bill-bot.CostAndUsageReportProps.property.versioning"></a>

```typescript
public readonly versioning: Versioning;
```

- *Type:* <a href="#@cremich/cdk-bill-bot.Versioning">Versioning</a>

---

### CURBucketProps <a name="CURBucketProps" id="@cremich/cdk-bill-bot.CURBucketProps"></a>

Properties for creating an Amazon S3 bucket for cost and usage reports.

#### Initializer <a name="Initializer" id="@cremich/cdk-bill-bot.CURBucketProps.Initializer"></a>

```typescript
import { CURBucketProps } from '@cremich/cdk-bill-bot'

const cURBucketProps: CURBucketProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cremich/cdk-bill-bot.CURBucketProps.property.accessControl">accessControl</a></code> | <code>aws-cdk-lib.aws_s3.BucketAccessControl</code> | Specifies a canned ACL that grants predefined permissions to the bucket. |
| <code><a href="#@cremich/cdk-bill-bot.CURBucketProps.property.autoDeleteObjects">autoDeleteObjects</a></code> | <code>boolean</code> | Whether all objects should be automatically deleted when the bucket is removed from the stack or when the stack is deleted. |
| <code><a href="#@cremich/cdk-bill-bot.CURBucketProps.property.blockPublicAccess">blockPublicAccess</a></code> | <code>aws-cdk-lib.aws_s3.BlockPublicAccess</code> | The block public access configuration of this bucket. |
| <code><a href="#@cremich/cdk-bill-bot.CURBucketProps.property.bucketKeyEnabled">bucketKeyEnabled</a></code> | <code>boolean</code> | Specifies whether Amazon S3 should use an S3 Bucket Key with server-side encryption using KMS (SSE-KMS) for new objects in the bucket. |
| <code><a href="#@cremich/cdk-bill-bot.CURBucketProps.property.bucketName">bucketName</a></code> | <code>string</code> | Physical name of this bucket. |
| <code><a href="#@cremich/cdk-bill-bot.CURBucketProps.property.cors">cors</a></code> | <code>aws-cdk-lib.aws_s3.CorsRule[]</code> | The CORS configuration of this bucket. |
| <code><a href="#@cremich/cdk-bill-bot.CURBucketProps.property.encryption">encryption</a></code> | <code>aws-cdk-lib.aws_s3.BucketEncryption</code> | The kind of server-side encryption to apply to this bucket. |
| <code><a href="#@cremich/cdk-bill-bot.CURBucketProps.property.encryptionKey">encryptionKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | External KMS key to use for bucket encryption. |
| <code><a href="#@cremich/cdk-bill-bot.CURBucketProps.property.enforceSSL">enforceSSL</a></code> | <code>boolean</code> | Enforces SSL for requests. |
| <code><a href="#@cremich/cdk-bill-bot.CURBucketProps.property.inventories">inventories</a></code> | <code>aws-cdk-lib.aws_s3.Inventory[]</code> | The inventory configuration of the bucket. |
| <code><a href="#@cremich/cdk-bill-bot.CURBucketProps.property.lifecycleRules">lifecycleRules</a></code> | <code>aws-cdk-lib.aws_s3.LifecycleRule[]</code> | Rules that define how Amazon S3 manages objects during their lifetime. |
| <code><a href="#@cremich/cdk-bill-bot.CURBucketProps.property.metrics">metrics</a></code> | <code>aws-cdk-lib.aws_s3.BucketMetrics[]</code> | The metrics configuration of this bucket. |
| <code><a href="#@cremich/cdk-bill-bot.CURBucketProps.property.objectOwnership">objectOwnership</a></code> | <code>aws-cdk-lib.aws_s3.ObjectOwnership</code> | The objectOwnership of the bucket. |
| <code><a href="#@cremich/cdk-bill-bot.CURBucketProps.property.publicReadAccess">publicReadAccess</a></code> | <code>boolean</code> | Grants public read access to all objects in the bucket. |
| <code><a href="#@cremich/cdk-bill-bot.CURBucketProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | Policy to apply when the bucket is removed from this stack. |
| <code><a href="#@cremich/cdk-bill-bot.CURBucketProps.property.serverAccessLogsBucket">serverAccessLogsBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | Destination bucket for the server access logs. |
| <code><a href="#@cremich/cdk-bill-bot.CURBucketProps.property.serverAccessLogsPrefix">serverAccessLogsPrefix</a></code> | <code>string</code> | Optional log file prefix to use for the bucket's access logs. |
| <code><a href="#@cremich/cdk-bill-bot.CURBucketProps.property.transferAcceleration">transferAcceleration</a></code> | <code>boolean</code> | Whether this bucket should have transfer acceleration turned on or not. |
| <code><a href="#@cremich/cdk-bill-bot.CURBucketProps.property.versioned">versioned</a></code> | <code>boolean</code> | Whether this bucket should have versioning turned on or not. |
| <code><a href="#@cremich/cdk-bill-bot.CURBucketProps.property.websiteErrorDocument">websiteErrorDocument</a></code> | <code>string</code> | The name of the error document (e.g. "404.html") for the website. `websiteIndexDocument` must also be set if this is set. |
| <code><a href="#@cremich/cdk-bill-bot.CURBucketProps.property.websiteIndexDocument">websiteIndexDocument</a></code> | <code>string</code> | The name of the index document (e.g. "index.html") for the website. Enables static website hosting for this bucket. |
| <code><a href="#@cremich/cdk-bill-bot.CURBucketProps.property.websiteRedirect">websiteRedirect</a></code> | <code>aws-cdk-lib.aws_s3.RedirectTarget</code> | Specifies the redirect behavior of all requests to a website endpoint of a bucket. |
| <code><a href="#@cremich/cdk-bill-bot.CURBucketProps.property.websiteRoutingRules">websiteRoutingRules</a></code> | <code>aws-cdk-lib.aws_s3.RoutingRule[]</code> | Rules that define when a redirect is applied and the redirect behavior. |

---

##### `accessControl`<sup>Optional</sup> <a name="accessControl" id="@cremich/cdk-bill-bot.CURBucketProps.property.accessControl"></a>

```typescript
public readonly accessControl: BucketAccessControl;
```

- *Type:* aws-cdk-lib.aws_s3.BucketAccessControl
- *Default:* BucketAccessControl.PRIVATE

Specifies a canned ACL that grants predefined permissions to the bucket.

---

##### `autoDeleteObjects`<sup>Optional</sup> <a name="autoDeleteObjects" id="@cremich/cdk-bill-bot.CURBucketProps.property.autoDeleteObjects"></a>

```typescript
public readonly autoDeleteObjects: boolean;
```

- *Type:* boolean
- *Default:* false

Whether all objects should be automatically deleted when the bucket is removed from the stack or when the stack is deleted.

Requires the `removalPolicy` to be set to `RemovalPolicy.DESTROY`.

**Warning** if you have deployed a bucket with `autoDeleteObjects: true`,
switching this to `false` in a CDK version *before* `1.126.0` will lead to
all objects in the bucket being deleted. Be sure to update your bucket resources
by deploying with CDK version `1.126.0` or later **before** switching this value to `false`.

---

##### `blockPublicAccess`<sup>Optional</sup> <a name="blockPublicAccess" id="@cremich/cdk-bill-bot.CURBucketProps.property.blockPublicAccess"></a>

```typescript
public readonly blockPublicAccess: BlockPublicAccess;
```

- *Type:* aws-cdk-lib.aws_s3.BlockPublicAccess
- *Default:* CloudFormation defaults will apply. New buckets and objects don't allow public access, but users can modify bucket policies or object permissions to allow public access

The block public access configuration of this bucket.

> [https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html](https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html)

---

##### `bucketKeyEnabled`<sup>Optional</sup> <a name="bucketKeyEnabled" id="@cremich/cdk-bill-bot.CURBucketProps.property.bucketKeyEnabled"></a>

```typescript
public readonly bucketKeyEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Specifies whether Amazon S3 should use an S3 Bucket Key with server-side encryption using KMS (SSE-KMS) for new objects in the bucket.

Only relevant, when Encryption is set to {@link BucketEncryption.KMS}

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cremich/cdk-bill-bot.CURBucketProps.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string
- *Default:* Assigned by CloudFormation (recommended).

Physical name of this bucket.

---

##### `cors`<sup>Optional</sup> <a name="cors" id="@cremich/cdk-bill-bot.CURBucketProps.property.cors"></a>

```typescript
public readonly cors: CorsRule[];
```

- *Type:* aws-cdk-lib.aws_s3.CorsRule[]
- *Default:* No CORS configuration.

The CORS configuration of this bucket.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-cors.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-cors.html)

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cremich/cdk-bill-bot.CURBucketProps.property.encryption"></a>

```typescript
public readonly encryption: BucketEncryption;
```

- *Type:* aws-cdk-lib.aws_s3.BucketEncryption
- *Default:* `Kms` if `encryptionKey` is specified, or `Unencrypted` otherwise.

The kind of server-side encryption to apply to this bucket.

If you choose KMS, you can specify a KMS key via `encryptionKey`. If
encryption key is not specified, a key will automatically be created.

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@cremich/cdk-bill-bot.CURBucketProps.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey
- *Default:* If encryption is set to "Kms" and this property is undefined, a new KMS key will be created and associated with this bucket.

External KMS key to use for bucket encryption.

The 'encryption' property must be either not specified or set to "Kms".
An error will be emitted if encryption is set to "Unencrypted" or
"Managed".

---

##### `enforceSSL`<sup>Optional</sup> <a name="enforceSSL" id="@cremich/cdk-bill-bot.CURBucketProps.property.enforceSSL"></a>

```typescript
public readonly enforceSSL: boolean;
```

- *Type:* boolean
- *Default:* false

Enforces SSL for requests.

S3.5 of the AWS Foundational Security Best Practices Regarding S3.

> [https://docs.aws.amazon.com/config/latest/developerguide/s3-bucket-ssl-requests-only.html](https://docs.aws.amazon.com/config/latest/developerguide/s3-bucket-ssl-requests-only.html)

---

##### `inventories`<sup>Optional</sup> <a name="inventories" id="@cremich/cdk-bill-bot.CURBucketProps.property.inventories"></a>

```typescript
public readonly inventories: Inventory[];
```

- *Type:* aws-cdk-lib.aws_s3.Inventory[]
- *Default:* No inventory configuration

The inventory configuration of the bucket.

> [https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-inventory.html](https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-inventory.html)

---

##### `lifecycleRules`<sup>Optional</sup> <a name="lifecycleRules" id="@cremich/cdk-bill-bot.CURBucketProps.property.lifecycleRules"></a>

```typescript
public readonly lifecycleRules: LifecycleRule[];
```

- *Type:* aws-cdk-lib.aws_s3.LifecycleRule[]
- *Default:* No lifecycle rules.

Rules that define how Amazon S3 manages objects during their lifetime.

---

##### `metrics`<sup>Optional</sup> <a name="metrics" id="@cremich/cdk-bill-bot.CURBucketProps.property.metrics"></a>

```typescript
public readonly metrics: BucketMetrics[];
```

- *Type:* aws-cdk-lib.aws_s3.BucketMetrics[]
- *Default:* No metrics configuration.

The metrics configuration of this bucket.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-metricsconfiguration.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-metricsconfiguration.html)

---

##### `objectOwnership`<sup>Optional</sup> <a name="objectOwnership" id="@cremich/cdk-bill-bot.CURBucketProps.property.objectOwnership"></a>

```typescript
public readonly objectOwnership: ObjectOwnership;
```

- *Type:* aws-cdk-lib.aws_s3.ObjectOwnership
- *Default:* No ObjectOwnership configuration, uploading account will own the object.

The objectOwnership of the bucket.

> [https://docs.aws.amazon.com/AmazonS3/latest/dev/about-object-ownership.html](https://docs.aws.amazon.com/AmazonS3/latest/dev/about-object-ownership.html)

---

##### `publicReadAccess`<sup>Optional</sup> <a name="publicReadAccess" id="@cremich/cdk-bill-bot.CURBucketProps.property.publicReadAccess"></a>

```typescript
public readonly publicReadAccess: boolean;
```

- *Type:* boolean
- *Default:* false

Grants public read access to all objects in the bucket.

Similar to calling `bucket.grantPublicAccess()`

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@cremich/cdk-bill-bot.CURBucketProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* The bucket will be orphaned.

Policy to apply when the bucket is removed from this stack.

---

##### `serverAccessLogsBucket`<sup>Optional</sup> <a name="serverAccessLogsBucket" id="@cremich/cdk-bill-bot.CURBucketProps.property.serverAccessLogsBucket"></a>

```typescript
public readonly serverAccessLogsBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket
- *Default:* If "serverAccessLogsPrefix" undefined - access logs disabled, otherwise - log to current bucket.

Destination bucket for the server access logs.

---

##### `serverAccessLogsPrefix`<sup>Optional</sup> <a name="serverAccessLogsPrefix" id="@cremich/cdk-bill-bot.CURBucketProps.property.serverAccessLogsPrefix"></a>

```typescript
public readonly serverAccessLogsPrefix: string;
```

- *Type:* string
- *Default:* No log file prefix

Optional log file prefix to use for the bucket's access logs.

If defined without "serverAccessLogsBucket", enables access logs to current bucket with this prefix.

---

##### `transferAcceleration`<sup>Optional</sup> <a name="transferAcceleration" id="@cremich/cdk-bill-bot.CURBucketProps.property.transferAcceleration"></a>

```typescript
public readonly transferAcceleration: boolean;
```

- *Type:* boolean
- *Default:* false

Whether this bucket should have transfer acceleration turned on or not.

---

##### `versioned`<sup>Optional</sup> <a name="versioned" id="@cremich/cdk-bill-bot.CURBucketProps.property.versioned"></a>

```typescript
public readonly versioned: boolean;
```

- *Type:* boolean
- *Default:* false

Whether this bucket should have versioning turned on or not.

---

##### `websiteErrorDocument`<sup>Optional</sup> <a name="websiteErrorDocument" id="@cremich/cdk-bill-bot.CURBucketProps.property.websiteErrorDocument"></a>

```typescript
public readonly websiteErrorDocument: string;
```

- *Type:* string
- *Default:* No error document.

The name of the error document (e.g. "404.html") for the website. `websiteIndexDocument` must also be set if this is set.

---

##### `websiteIndexDocument`<sup>Optional</sup> <a name="websiteIndexDocument" id="@cremich/cdk-bill-bot.CURBucketProps.property.websiteIndexDocument"></a>

```typescript
public readonly websiteIndexDocument: string;
```

- *Type:* string
- *Default:* No index document.

The name of the index document (e.g. "index.html") for the website. Enables static website hosting for this bucket.

---

##### `websiteRedirect`<sup>Optional</sup> <a name="websiteRedirect" id="@cremich/cdk-bill-bot.CURBucketProps.property.websiteRedirect"></a>

```typescript
public readonly websiteRedirect: RedirectTarget;
```

- *Type:* aws-cdk-lib.aws_s3.RedirectTarget
- *Default:* No redirection.

Specifies the redirect behavior of all requests to a website endpoint of a bucket.

If you specify this property, you can't specify "websiteIndexDocument", "websiteErrorDocument" nor , "websiteRoutingRules".

---

##### `websiteRoutingRules`<sup>Optional</sup> <a name="websiteRoutingRules" id="@cremich/cdk-bill-bot.CURBucketProps.property.websiteRoutingRules"></a>

```typescript
public readonly websiteRoutingRules: RoutingRule[];
```

- *Type:* aws-cdk-lib.aws_s3.RoutingRule[]
- *Default:* No redirection rules.

Rules that define when a redirect is applied and the redirect behavior.

---



## Enums <a name="Enums" id="Enums"></a>

### Compression <a name="Compression" id="@cremich/cdk-bill-bot.Compression"></a>

The compression format that AWS uses for the report.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cremich/cdk-bill-bot.Compression.ZIP">ZIP</a></code> | Zip compression. |
| <code><a href="#@cremich/cdk-bill-bot.Compression.GZIP">GZIP</a></code> | Gzip compression. |
| <code><a href="#@cremich/cdk-bill-bot.Compression.PARQUET">PARQUET</a></code> | Parquet compression. |

---

##### `ZIP` <a name="ZIP" id="@cremich/cdk-bill-bot.Compression.ZIP"></a>

Zip compression.

---


##### `GZIP` <a name="GZIP" id="@cremich/cdk-bill-bot.Compression.GZIP"></a>

Gzip compression.

---


##### `PARQUET` <a name="PARQUET" id="@cremich/cdk-bill-bot.Compression.PARQUET"></a>

Parquet compression.

---


### Format <a name="Format" id="@cremich/cdk-bill-bot.Format"></a>

The format that AWS saves the report in.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cremich/cdk-bill-bot.Format.TEXT_OR_CSV">TEXT_OR_CSV</a></code> | Text or CSV format. |
| <code><a href="#@cremich/cdk-bill-bot.Format.PARQUET">PARQUET</a></code> | Parquet format. |

---

##### `TEXT_OR_CSV` <a name="TEXT_OR_CSV" id="@cremich/cdk-bill-bot.Format.TEXT_OR_CSV"></a>

Text or CSV format.

---


##### `PARQUET` <a name="PARQUET" id="@cremich/cdk-bill-bot.Format.PARQUET"></a>

Parquet format.

---


### TimeUnit <a name="TimeUnit" id="@cremich/cdk-bill-bot.TimeUnit"></a>

The length of time covered by the report.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cremich/cdk-bill-bot.TimeUnit.HOURLY">HOURLY</a></code> | Time covered per hour. |
| <code><a href="#@cremich/cdk-bill-bot.TimeUnit.DAILY">DAILY</a></code> | Time covered per day. |
| <code><a href="#@cremich/cdk-bill-bot.TimeUnit.MONTHLY">MONTHLY</a></code> | Time covered per month. |

---

##### `HOURLY` <a name="HOURLY" id="@cremich/cdk-bill-bot.TimeUnit.HOURLY"></a>

Time covered per hour.

---


##### `DAILY` <a name="DAILY" id="@cremich/cdk-bill-bot.TimeUnit.DAILY"></a>

Time covered per day.

---


##### `MONTHLY` <a name="MONTHLY" id="@cremich/cdk-bill-bot.TimeUnit.MONTHLY"></a>

Time covered per month.

---


### Versioning <a name="Versioning" id="@cremich/cdk-bill-bot.Versioning"></a>

Whether you want AWS to overwrite the previous version of each report or to deliver the report in addition to the previous versions.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cremich/cdk-bill-bot.Versioning.CREATE_NEW_REPORT">CREATE_NEW_REPORT</a></code> | Create a new report version. |
| <code><a href="#@cremich/cdk-bill-bot.Versioning.OVERWRITE_REPORT">OVERWRITE_REPORT</a></code> | Overwrite existing report. |

---

##### `CREATE_NEW_REPORT` <a name="CREATE_NEW_REPORT" id="@cremich/cdk-bill-bot.Versioning.CREATE_NEW_REPORT"></a>

Create a new report version.

---


##### `OVERWRITE_REPORT` <a name="OVERWRITE_REPORT" id="@cremich/cdk-bill-bot.Versioning.OVERWRITE_REPORT"></a>

Overwrite existing report.

---

