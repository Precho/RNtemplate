import { desc, setGlobalOptions, task } from 'foy'

setGlobalOptions({
  strict: true,
  logCommand: false,
  loading: false,
})

desc('ESlint')
task('eslint', async ctx => {
  await ctx
    .cd('..')
    .exec('yarn eslint ./app --ext .js,.jsx,.ts,.tsx --config ./app/.eslintrc.js --quiet')
})

desc('TypeScript')
task('tsc', async ctx => {
  await ctx.cd('..').exec('yarn tsc -p ./app/tsconfig.json')
})

desc('CI')
task('ci', ['tsc', 'eslint'])

desc('LINT')
task('lint', ['tsc', 'eslint'])
