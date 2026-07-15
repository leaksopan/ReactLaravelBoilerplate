<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'ui-playground')->name('home');
Route::inertia('ui-playground', 'ui-playground')->name('ui-playground');
Route::inertia('lottie', 'lottie-gallery')->name('lottie-gallery');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';
