import chalk from 'chalk';

export class Logging {
	public static info = (args: any) => {
		console.log(chalk.cyan(`[INFO] ${new Date().toLocaleString()}`, typeof args === 'string' ? chalk.cyanBright(args) : args));
	};

	public static warn = (args: any) => {
		console.log(chalk.yellow(`[WARN] ${new Date().toLocaleString()}`, typeof args === 'string' ? chalk.yellowBright(args) : args));
	};

	public static error = (args: any) => {
		console.log(chalk.red(`[ERROR] ${new Date().toLocaleString()}`, typeof args === 'string' ? chalk.redBright(args) : args));
	};
}
