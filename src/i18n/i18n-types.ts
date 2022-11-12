// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString, RequiredParams } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType & DisallowNamespaces
export type BaseLocale = 'en'

export type Locales =
	| 'en'

export type Translation = RootTranslation & DisallowNamespaces

export type Translations = RootTranslation &
{
	account: NamespaceAccountTranslation,
	instances: NamespaceInstancesTranslation,
	settings: NamespaceSettingsTranslation
}

type RootTranslation = {
	/**
	 * G​l​o​w​s​q​u​i​d​ ​L​a​u​n​c​h​e​r
	 */
	title: string
}

export type NamespaceAccountTranslation = {
	/**
	 * N​o​b​o​d​y
	 */
	noAccountSelected: string
	/**
	 * S​e​l​e​c​t​ ​A​c​c​o​u​n​t
	 */
	select: string
	/**
	 * A​v​a​t​a​r​ ​f​o​r​ ​{​0​}
	 * @param {string} 0
	 */
	avatarFor: RequiredParams<'0'>
	/**
	 * A​d​d​ ​A​c​c​o​u​n​t
	 */
	add: string
	/**
	 * A​c​c​o​u​n​t​ ​S​e​t​t​i​n​g​s
	 */
	management: string
	modal: {
		/**
		 * A​c​c​o​u​n​t​s
		 */
		label: string
		/**
		 * A​d​d​ ​A​c​c​o​u​n​t
		 */
		title: string
		/**
		 * G​e​t​t​i​n​g​ ​c​o​d​e​.​.​.
		 */
		gettingCode: string
		/**
		 * L​e​t​s​ ​s​t​a​r​t​!​ ​C​l​i​c​k​ ​o​n​ ​t​h​e​ ​b​u​t​t​o​n​ ​t​o​ ​t​h​e​ ​r​i​g​h​t​.​ ​P​a​s​t​e​ ​{​0​}​ ​a​t
		 * @param {string} 0
		 */
		start: RequiredParams<'0'>
		/**
		 * c​o​p​y​ ​c​o​d​e​ ​a​n​d​ ​o​p​e​n​ ​i​n​ ​b​r​o​w​s​e​r​,​ ​a​n​d​ ​s​t​a​r​t​ ​p​r​o​c​e​s​s​.
		 */
		startProcess: string
		steps: {
			'0': {
				/**
				 * S​t​a​r​t​e​d​ ​p​r​o​c​e​s​s
				 */
				label: string
				/**
				 * Y​o​u​ ​h​a​v​e​ ​s​t​a​r​t​e​d​ ​t​h​e​ ​p​r​o​c​e​s​s​ ​o​f​ ​a​d​d​i​n​g​ ​a​n​ ​a​c​c​o​u​n​t
				 */
				description: string
			}
			'1': {
				/**
				 * R​e​c​i​e​v​e​d​ ​a​c​c​e​s​s​ ​t​o​k​e​n
				 */
				label: string
				/**
				 * G​l​o​w​s​q​u​i​d​ ​h​a​s​ ​r​e​c​i​e​v​e​d​ ​t​h​e​ ​a​c​c​e​s​s​ ​t​o​k​e​n​ ​f​r​o​m​ ​M​i​c​r​o​s​o​f​t
				 */
				description: string
			}
			'2': {
				/**
				 * R​e​c​i​e​v​e​d​ ​a​c​c​o​u​n​t​ ​d​a​t​a
				 */
				label: string
				/**
				 * G​l​o​w​s​q​u​i​d​ ​h​a​s​ ​r​e​c​i​e​v​e​d​ ​t​h​e​ ​a​c​c​o​u​n​t​ ​d​a​t​a​ ​f​r​o​m​ ​M​i​c​r​o​s​o​f​t
				 */
				description: string
			}
		}
		/**
		 * C​a​n​c​e​l
		 */
		cancel: string
	}
}

export type NamespaceInstancesTranslation = {
	/**
	 * L​a​s​t​ ​p​l​a​y​e​d​ ​{​0​}
	 * @param {string} 0
	 */
	lastPlayed: RequiredParams<'0'>
	/**
	 * P​l​a​y
	 */
	play: string
	/**
	 * S​e​t​t​i​n​g​s
	 */
	settings: string
	/**
	 * A​d​d​ ​I​n​s​t​a​n​c​e
	 */
	add: string
}

export type NamespaceSettingsTranslation = {
	/**
	 * S​e​t​t​i​n​g​s
	 */
	name: string
}

export type Namespaces =
	| 'account'
	| 'instances'
	| 'settings'

type DisallowNamespaces = {
	/**
	 * reserved for 'account'-namespace\
	 * you need to use the `./account/index.ts` file instead
	 */
	account?: "[typesafe-i18n] reserved for 'account'-namespace. You need to use the `./account/index.ts` file instead."

	/**
	 * reserved for 'instances'-namespace\
	 * you need to use the `./instances/index.ts` file instead
	 */
	instances?: "[typesafe-i18n] reserved for 'instances'-namespace. You need to use the `./instances/index.ts` file instead."

	/**
	 * reserved for 'settings'-namespace\
	 * you need to use the `./settings/index.ts` file instead
	 */
	settings?: "[typesafe-i18n] reserved for 'settings'-namespace. You need to use the `./settings/index.ts` file instead."
}

export type TranslationFunctions = {
	/**
	 * Glowsquid Launcher
	 */
	title: () => LocalizedString
	account: {
		/**
		 * Nobody
		 */
		noAccountSelected: () => LocalizedString
		/**
		 * Select Account
		 */
		select: () => LocalizedString
		/**
		 * Avatar for {0}
		 */
		avatarFor: (arg0: string) => LocalizedString
		/**
		 * Add Account
		 */
		add: () => LocalizedString
		/**
		 * Account Settings
		 */
		management: () => LocalizedString
		modal: {
			/**
			 * Accounts
			 */
			label: () => LocalizedString
			/**
			 * Add Account
			 */
			title: () => LocalizedString
			/**
			 * Getting code...
			 */
			gettingCode: () => LocalizedString
			/**
			 * Lets start! Click on the button to the right. Paste {0} at
			 */
			start: (arg0: string) => LocalizedString
			/**
			 * copy code and open in browser, and start process.
			 */
			startProcess: () => LocalizedString
			steps: {
				'0': {
					/**
					 * Started process
					 */
					label: () => LocalizedString
					/**
					 * You have started the process of adding an account
					 */
					description: () => LocalizedString
				}
				'1': {
					/**
					 * Recieved access token
					 */
					label: () => LocalizedString
					/**
					 * Glowsquid has recieved the access token from Microsoft
					 */
					description: () => LocalizedString
				}
				'2': {
					/**
					 * Recieved account data
					 */
					label: () => LocalizedString
					/**
					 * Glowsquid has recieved the account data from Microsoft
					 */
					description: () => LocalizedString
				}
			}
			/**
			 * Cancel
			 */
			cancel: () => LocalizedString
		}
	}
	instances: {
		/**
		 * Last played {0}
		 */
		lastPlayed: (arg0: string) => LocalizedString
		/**
		 * Play
		 */
		play: () => LocalizedString
		/**
		 * Settings
		 */
		settings: () => LocalizedString
		/**
		 * Add Instance
		 */
		add: () => LocalizedString
	}
	settings: {
		/**
		 * Settings
		 */
		name: () => LocalizedString
	}
}

export type Formatters = {}
