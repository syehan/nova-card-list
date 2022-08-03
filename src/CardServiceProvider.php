<?php

namespace Syehan\CardList;

use Illuminate\Support\ServiceProvider;
use Laravel\Nova\Events\ServingNova;
use Laravel\Nova\Nova;
use Syehan\CardList\Console\CardCommand;

class CardServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Nova::serving(function (ServingNova $event) {
            Nova::script('syehan-card-list', __DIR__ . '/../dist/js/card.js');
        });

        if ($this->app->runningInConsole()) {
            $this->commands([CardCommand::class]);
        }
    }
}
