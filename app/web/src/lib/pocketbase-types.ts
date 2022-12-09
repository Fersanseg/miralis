/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	Creatures = "creatures",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string

// System fields
export type BaseSystemFields = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: { [key: string]: any }
}

export type AuthSystemFields = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields

// Record types for each collection

export enum CreaturesRarityOptions {
	"COMMON" = "COMMON",
	"UNCOMMON" = "UNCOMMON",
	"RARE" = "RARE",
	"UNIQUE" = "UNIQUE",
}

export enum CreaturesSizeOptions {
	"TINY" = "TINY",
	"SMALL" = "SMALL",
	"MEDIUM" = "MEDIUM",
	"LARGE" = "LARGE",
	"HUGE" = "HUGE",
	"GARGANTUAN" = "GARGANTUAN",
}
export type CreaturesRecord = {
	name: string
	family?: string
	level: number
	rarity: CreaturesRarityOptions
	size: CreaturesSizeOptions
	traits: string
	properties: string
	image?: string
	description: string
	partsValue: number
	partsBulk: string
	skills?: string
	hasSpells: boolean
}

export enum UsersGroupOptions {
	"admin" = "admin",
	"user" = "user",
}
export type UsersRecord = {
	name?: string
	avatar?: string
	group: UsersGroupOptions
}

// Response types include system fields and match responses from the PocketBase API
export type CreaturesResponse = CreaturesRecord & BaseSystemFields
export type UsersResponse = UsersRecord & AuthSystemFields

export type CollectionRecords = {
	creatures: CreaturesRecord
	users: UsersRecord
}